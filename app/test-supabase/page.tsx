"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function TestSupabase() {
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");

  const testLogin = async () => {
    setResult("Testing login...");

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error("TEST LOGIN ERROR:", error);
      setResult(`ERROR: ${error.message}`);
      return;
    }

    setResult(
      data.user
        ? "LOGIN SUCCESS ✅"
        : "Login completed but no user returned."
    );
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-white p-10">
      <h1 className="text-3xl font-bold mb-8">
        Supabase Login Test
      </h1>

      <div className="max-w-md space-y-4">
        <input
          type="email"
          placeholder="Admin email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded-lg text-black"
        />

        <input
          type="password"
          placeholder="Admin password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 rounded-lg text-black"
        />

        <button
          onClick={testLogin}
          className="bg-red-600 px-6 py-3 rounded-lg font-bold"
        >
          Test Login
        </button>

        {result && (
          <p className="mt-6 text-lg font-semibold">
            Result: {result}
          </p>
        )}
      </div>
    </main>
  );
}