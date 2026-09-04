"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function TestSupabase() {
  const supabase = createClient();

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || "";

  const [result, setResult] = useState("");

  const checkConfig = async () => {
    const checks = [
      `URL has leading/trailing spaces: ${
        url !== url.trim() ? "YES ❌" : "NO ✅"
      }`,

      `Key has leading/trailing spaces: ${
        key !== key.trim() ? "YES ❌" : "NO ✅"
      }`,

      `URL starts with https://: ${
        url.startsWith("https://") ? "YES ✅" : "NO ❌"
      }`,

      `URL ends with .supabase.co: ${
        url.endsWith(".supabase.co") ? "YES ✅" : "NO ❌"
      }`,

      `Key starts with sb_publishable_: ${
        key.startsWith("sb_publishable_") ? "YES ✅" : "NO ❌"
      }`,

      `URL length: ${url.length}`,

      `Key length: ${key.length}`,
    ];

    setResult(checks.join("\n"));
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-white p-10">
      <h1 className="text-3xl font-bold mb-8">
        Supabase Configuration Diagnostic
      </h1>

      <button
        onClick={checkConfig}
        className="bg-red-600 px-6 py-3 rounded-lg font-bold"
      >
        Check Configuration
      </button>

      {result && (
        <pre className="mt-8 whitespace-pre-wrap text-lg leading-8">
          {result}
        </pre>
      )}
    </main>
  );
}