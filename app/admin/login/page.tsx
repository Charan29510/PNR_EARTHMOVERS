"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function AdminLogin() {
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError("Invalid email or password.");
      setLoading(false);
      return;
    }

    router.push("/admin/dashboard");
  };

  return (
    <main className="min-h-screen bg-zinc-950 flex items-center justify-center px-4 py-8 relative overflow-hidden">

      {/* Subtle red background glow */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-red-600/10 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-red-600/10 blur-3xl" />

      <div className="relative w-full max-w-md">

        {/* PNR Branding */}
        <div className="text-center mb-8 drop-shadow-lg">
          <div className="flex justify-center mb-4">
            <div className="bg-white rounded-full p-2 shadow-xl">
              <img
                src="/images/pnr-logo.png"
                alt="PNR Earthmovers"
                className="h-24 w-24 object-contain"
              />
            </div>
          </div>

          <h1 className="text-2xl font-bold text-white tracking-tight">
            PNR <span className="text-red-500">EARTHMOVERS</span>
          </h1>

          <p className="text-zinc-200 text-sm mt-1">
            Earthmoving & Equipment Services
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-white/20">

          {/* Card Header */}
          <div className="bg-zinc-950 px-6 py-5 border-b-4 border-red-600">
            <h2 className="text-xl font-bold text-white">
              Admin Login
            </h2>

            <p className="text-zinc-400 text-sm mt-1">
              Sign in to manage PNR Earthmovers
            </p>
          </div>

          {/* Form */}
          <div className="p-6 md:p-7">
            <form onSubmit={handleLogin} className="space-y-5">

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-zinc-800 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  className="w-full rounded-xl border border-zinc-300 bg-zinc-50 px-4 py-3.5 text-zinc-900 outline-none transition focus:border-red-500 focus:ring-4 focus:ring-red-500/10"
                  placeholder="Enter admin email"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-semibold text-zinc-800 mb-2">
                  Password
                </label>

                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                  className="w-full rounded-xl border border-zinc-300 bg-zinc-50 px-4 py-3.5 text-zinc-900 outline-none transition focus:border-red-500 focus:ring-4 focus:ring-red-500/10"
                  placeholder="Enter password"
                />
              </div>

              {/* Error */}
              {error && (
                <div className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3">
                  <span className="text-red-600">⚠️</span>

                  <p className="text-sm font-medium text-red-700">
                    {error}
                  </p>
                </div>
              )}

              {/* Login Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-red-600 hover:bg-red-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-xl transition shadow-lg shadow-red-600/20"
              >
                {loading ? "Signing in..." : "Sign In to Dashboard"}
              </button>

            </form>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-zinc-600 text-xs mt-6">
          PNR Earthmovers • Admin Portal
        </p>

      </div>
    </main>
  );
}