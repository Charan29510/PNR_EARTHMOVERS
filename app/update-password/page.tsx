"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function UpdatePassword() {
  const router = useRouter();
  const supabase = createClient();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpdatePassword = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.updateUser({
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    setSuccess("Password updated successfully.");

    setTimeout(() => {
      router.push("/admin/login");
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-zinc-950 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">

        {/* Branding */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-white rounded-full p-2 shadow-xl">
              <img
                src="/images/pnr-logo.png"
                alt="PNR Earthmovers"
                className="h-24 w-24 object-contain"
              />
            </div>
          </div>

          <h1 className="text-2xl font-bold text-white">
            PNR <span className="text-red-500">EARTHMOVERS</span>
          </h1>

          <p className="text-zinc-400 text-sm mt-1">
            Earthmoving & Equipment Services
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">

          <div className="bg-zinc-950 px-6 py-5 border-b-4 border-red-600">
            <h2 className="text-xl font-bold text-white">
              Set New Password
            </h2>

            <p className="text-zinc-400 text-sm mt-1">
              Create a new password for your admin account
            </p>
          </div>

          <div className="p-6 md:p-7">
            <form
              onSubmit={handleUpdatePassword}
              className="space-y-5"
            >
              {/* New Password */}
              <div>
                <label className="block text-sm font-semibold text-zinc-800 mb-2">
                  New Password
                </label>

                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  className="w-full rounded-xl border border-zinc-300 bg-zinc-50 px-4 py-3.5 text-zinc-900 outline-none transition focus:border-red-500 focus:ring-4 focus:ring-red-500/10"
                  placeholder="Enter new password"
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-semibold text-zinc-800 mb-2">
                  Confirm Password
                </label>

                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(e.target.value)
                  }
                  required
                  minLength={6}
                  className="w-full rounded-xl border border-zinc-300 bg-zinc-50 px-4 py-3.5 text-zinc-900 outline-none transition focus:border-red-500 focus:ring-4 focus:ring-red-500/10"
                  placeholder="Confirm new password"
                />
              </div>

              {/* Error */}
              {error && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3">
                  <p className="text-sm font-medium text-red-700">
                    ⚠️ {error}
                  </p>
                </div>
              )}

              {/* Success */}
              {success && (
                <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3">
                  <p className="text-sm font-medium text-green-700">
                    ✅ {success}
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-red-600 hover:bg-red-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-xl transition"
              >
                {loading ? "Updating..." : "Update Password"}
              </button>
            </form>
          </div>
        </div>

        <p className="text-center text-zinc-600 text-xs mt-6">
          PNR Earthmovers • Admin Portal
        </p>
      </div>
    </main>
  );
}