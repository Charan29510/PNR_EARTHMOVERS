"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function TestSupabase() {
  const supabase = createClient();

  const [result, setResult] = useState("Not tested");

  const testConnection = async () => {
    setResult("Testing...");

    const { data, error } = await supabase.auth.getSession();

    if (error) {
      setResult(`ERROR: ${error.message}`);
      return;
    }

    setResult(
      data.session
        ? "Supabase connection works — session exists ✅"
        : "Supabase connection works — no active session ✅"
    );
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-white p-10">
      <h1 className="text-3xl font-bold mb-6">
        Supabase Connection Test
      </h1>

      <button
        onClick={testConnection}
        className="bg-red-600 px-6 py-3 rounded-lg font-bold"
      >
        Test Supabase Connection
      </button>

      <p className="mt-6 text-lg">
        Result: <strong>{result}</strong>
      </p>
    </main>
  );
}