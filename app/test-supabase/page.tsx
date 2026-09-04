export default function TestSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  return (
    <main className="min-h-screen bg-zinc-950 text-white p-10">
      <h1 className="text-3xl font-bold mb-6">
        Supabase Configuration Test
      </h1>

      <p>
        URL loaded:{" "}
        <strong>{url ? "YES ✅" : "NO ❌"}</strong>
      </p>

      <p className="mt-3">
        Key loaded:{" "}
        <strong>{key ? "YES ✅" : "NO ❌"}</strong>
      </p>

      <p className="mt-3">
        URL format:{" "}
        <strong>
          {url?.startsWith("https://") ? "VALID ✅" : "INVALID ❌"}
        </strong>
      </p>
    </main>
  );
}