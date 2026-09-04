"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

type Request = {
  id: number;
  request_id: string;
  customer_name: string;
  phone: string;
  location: string;
  machine_required: string;
  work_type: string;
  duration: string;
  work_category: string;
  preferred_start_date: string;
  work_details: string | null;
  status: string;
  created_at: string;
};

export default function AdminDashboard() {
  const supabase = createClient();
  const handleLogout = async () => {
  await supabase.auth.signOut();
  router.push("/admin/login");
};
const updateStatus = async (requestId: number, newStatus: string) => {
  const { error } = await supabase
    .from("requests")
    .update({ status: newStatus })
    .eq("id", requestId);

  if (error) {
    console.error("Failed to update status:", error);
    alert("Could not update request status.");
    return;
  }

  setRequests((currentRequests) =>
    currentRequests.map((request) =>
      request.id === requestId
        ? { ...request, status: newStatus }
        : request
    )
  );
};
    const router = useRouter();
  const [requests, setRequests] = useState<Request[]>([]);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const totalRequests = requests.length;

const newRequests = requests.filter(
  (request) => request.status === "New"
).length;

const confirmedRequests = requests.filter(
  (request) => request.status === "Confirmed"
).length;

const completedRequests = requests.filter(
  (request) => request.status === "Completed"
).length;

  useEffect(() => {
  const loadRequests = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      router.push("/admin/login");
      return;
    }

    const { data, error } = await supabase
      .from("requests")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Failed to load requests:", error);
      setLoading(false);
      return;
    }

    setRequests(data || []);
    setLoading(false);
  };

  loadRequests();
}, []);

  return (
<main className="min-h-screen bg-zinc-100">
  <div className="flex min-h-screen">

    {/* Sidebar */}
    <aside
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-zinc-950 text-white transform transition-transform duration-300 md:relative md:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="p-6">
<button
  onClick={() => setSidebarOpen(false)}
  className="md:hidden absolute top-4 right-4 text-2xl text-white"
  aria-label="Close sidebar"
>
  ✕
</button>
        <div className="flex items-center gap-3 mb-8">
          <Image
            src="/images/pnr-logo.png"
            alt="PNR Earthmovers"
            width={55}
            height={55}
            className="h-12 w-12 object-contain"
          />

          <div>
            <p className="font-bold">PNR</p>
            <p className="text-xs text-red-500 font-semibold">
              EARTHMOVERS
            </p>
          </div>
        </div>

        <nav className="space-y-2">

          <a
            href="#"
            className="block px-4 py-3 rounded-lg bg-red-600 font-semibold"
          >
            🏠 Dashboard
          </a>

          <a
  href="#requests"
  onClick={() => setSidebarOpen(false)}
  className="block px-4 py-3 rounded-lg hover:bg-zinc-800 transition"
>
  📋 Requests
</a>

          <button
            disabled
            className="w-full text-left px-4 py-3 rounded-lg text-zinc-500 cursor-not-allowed"
          >
            🚜 Machines
          </button>

          <button
            disabled
            className="w-full text-left px-4 py-3 rounded-lg text-zinc-500 cursor-not-allowed"
          >
            👷 Drivers
          </button>

          <button
            disabled
            className="w-full text-left px-4 py-3 rounded-lg text-zinc-500 cursor-not-allowed"
          >
            📅 Jobs
          </button>

          <button
            disabled
            className="w-full text-left px-4 py-3 rounded-lg text-zinc-500 cursor-not-allowed"
          >
            💰 Payments
          </button>

          <button
            disabled
            className="w-full text-left px-4 py-3 rounded-lg text-zinc-500 cursor-not-allowed"
          >
            ⛽ Fuel
          </button>

          <button
            disabled
            className="w-full text-left px-4 py-3 rounded-lg text-zinc-500 cursor-not-allowed"
          >
            🔧 Maintenance
          </button>

          <button
            disabled
            className="w-full text-left px-4 py-3 rounded-lg text-zinc-500 cursor-not-allowed"
          >
            🏦 EMI
          </button>

          <button
            disabled
            className="w-full text-left px-4 py-3 rounded-lg text-zinc-500 cursor-not-allowed"
          >
            📊 Profit & Loss
          </button>

        </nav>

      </div>
    </aside>

    {/* Dashboard Area */}
    <div className="flex-1 min-w-0">
                 <header className="bg-zinc-950 text-white px-6 md:px-8 py-4 flex items-center justify-between border-b border-zinc-800">
      <button
  onClick={() => setSidebarOpen(!sidebarOpen)}
  className="md:hidden text-2xl mr-4"
  aria-label="Toggle dashboard menu"
>
  {sidebarOpen ? "✕" : "☰"}
</button>
  {/* PNR Branding */}
  <div className="flex items-center gap-4">

    <Image
      src="/images/pnr-logo.png"
      alt="PNR Earthmovers"
      width={90}
      height={90}
      className="h-20 w-20 object-contain"
    />

    <div>
      <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
        PNR <span className="text-red-500">EARTHMOVERS</span>
      </h1>

      <p className="text-zinc-400 text-sm mt-1">
        Admin Dashboard
      </p>
    </div>

  </div>

  {/* Logout */}
  <button
    onClick={handleLogout}
    className="bg-white text-zinc-900 px-4 py-2 rounded-lg font-semibold hover:bg-zinc-200 transition"
  >
    Logout
  </button>

</header>
      <section className="p-8">
        {/* Dashboard Summary */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">

  {/* Total Requests */}
  <div className="bg-white rounded-2xl p-6 border border-zinc-200 shadow-sm">
    <p className="text-sm font-semibold text-zinc-500">
      Total Requests
    </p>

    <p className="text-4xl font-bold text-zinc-900 mt-2">
      {totalRequests}
    </p>

    <p className="text-sm text-zinc-400 mt-2">
      All customer requests
    </p>
  </div>

  {/* New Requests */}
  <div className="bg-white rounded-2xl p-6 border border-red-100 shadow-sm">
    <p className="text-sm font-semibold text-red-600">
      New Requests
    </p>

    <p className="text-4xl font-bold text-zinc-900 mt-2">
      {newRequests}
    </p>

    <p className="text-sm text-zinc-400 mt-2">
      Need your attention
    </p>
  </div>

  {/* Confirmed */}
  <div className="bg-white rounded-2xl p-6 border border-green-100 shadow-sm">
    <p className="text-sm font-semibold text-green-600">
      Confirmed Jobs
    </p>

    <p className="text-4xl font-bold text-zinc-900 mt-2">
      {confirmedRequests}
    </p>

    <p className="text-sm text-zinc-400 mt-2">
      Ready to schedule
    </p>
  </div>

  {/* Completed */}
  <div className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm">
    <p className="text-sm font-semibold text-blue-600">
      Completed
    </p>

    <p className="text-4xl font-bold text-zinc-900 mt-2">
      {completedRequests}
    </p>

    <p className="text-sm text-zinc-400 mt-2">
      Successfully finished
    </p>
  </div>

</div>
        <h2
  id="requests"
  className="text-3xl font-bold text-zinc-900"
>
  Customer Requests
</h2>

        <p className="text-zinc-500 mt-1 mb-8">
          Manage incoming machine requests.
        </p>

        {loading ? (
          <p>Loading requests...</p>
        ) : requests.length === 0 ? (
          <div className="bg-white rounded-xl p-8">
            <p className="text-zinc-500">
              No requests found.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {requests.map((request) => (
  <div
    key={request.id}
    className="bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden"
  >

    {/* Card Header */}
    <div className="px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-zinc-100">

      <div>
        <p className="text-sm font-bold text-red-600">
          {request.request_id}
        </p>

        <h3 className="text-xl font-bold text-zinc-900 mt-1">
          {request.customer_name}
        </h3>

        <a
          href={`tel:${request.phone}`}
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-red-600 mt-1 transition"
        >
          📞 {request.phone}
        </a>
      </div>

      {/* Status */}
      <span
        className={`self-start sm:self-center px-4 py-2 rounded-full text-sm font-bold ${
          request.status === "New"
            ? "bg-red-100 text-red-700"
            : request.status === "Contacted"
            ? "bg-blue-100 text-blue-700"
            : request.status === "Negotiating"
            ? "bg-orange-100 text-orange-700"
            : request.status === "Confirmed"
            ? "bg-green-100 text-green-700"
            : request.status === "Completed"
            ? "bg-zinc-200 text-zinc-700"
            : "bg-red-100 text-red-700"
        }`}
      >
        {request.status}
      </span>

    </div>

    {/* Request Information */}
    <div className="px-6 py-6">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

        {/* Machine */}
        <div className="bg-zinc-50 rounded-xl p-4">
          <p className="text-xs uppercase tracking-wide text-zinc-400 font-semibold">
            Machine
          </p>

          <p className="font-bold text-zinc-900 mt-1">
            🚜 {request.machine_required}
          </p>
        </div>

        {/* Work */}
        <div className="bg-zinc-50 rounded-xl p-4">
          <p className="text-xs uppercase tracking-wide text-zinc-400 font-semibold">
            Work
          </p>

          <p className="font-bold text-zinc-900 mt-1">
            {request.work_category}
          </p>
        </div>

        {/* Location */}
        <div className="bg-zinc-50 rounded-xl p-4">
          <p className="text-xs uppercase tracking-wide text-zinc-400 font-semibold">
            Location
          </p>

          <p className="font-bold text-zinc-900 mt-1">
            📍 {request.location}
          </p>
        </div>

        {/* Duration */}
        <div className="bg-zinc-50 rounded-xl p-4">
          <p className="text-xs uppercase tracking-wide text-zinc-400 font-semibold">
            Duration
          </p>

          <p className="font-bold text-zinc-900 mt-1">
            ⏱️ {request.duration}
          </p>
        </div>

        {/* Work Type */}
        <div className="bg-zinc-50 rounded-xl p-4">
          <p className="text-xs uppercase tracking-wide text-zinc-400 font-semibold">
            Work Type
          </p>

          <p className="font-bold text-zinc-900 mt-1">
            {request.work_type}
          </p>
        </div>

        {/* Start Date */}
        <div className="bg-zinc-50 rounded-xl p-4">
          <p className="text-xs uppercase tracking-wide text-zinc-400 font-semibold">
            Start Date
          </p>

          <p className="font-bold text-zinc-900 mt-1">
            📅 {request.preferred_start_date}
          </p>
        </div>

      </div>

      {/* Work Details */}
      {request.work_details && (
        <div className="mt-5 bg-zinc-50 rounded-xl p-4">
          <p className="text-xs uppercase tracking-wide text-zinc-400 font-semibold">
            Work Details
          </p>

          <p className="text-zinc-700 mt-2 leading-6">
            {request.work_details}
          </p>
        </div>
      )}

      {/* Actions */}
      <div className="mt-6 pt-5 border-t border-zinc-100 flex flex-wrap gap-3">

        {request.status === "New" && (
          <>
            <button
              onClick={() => updateStatus(request.id, "Contacted")}
              className="px-4 py-2.5 rounded-lg bg-blue-100 text-blue-700 font-semibold hover:bg-blue-200 transition"
            >
              Contacted
            </button>

            <button
              onClick={() => updateStatus(request.id, "Negotiating")}
              className="px-4 py-2.5 rounded-lg bg-orange-100 text-orange-700 font-semibold hover:bg-orange-200 transition"
            >
              Negotiating
            </button>

            <button
              onClick={() => updateStatus(request.id, "Confirmed")}
              className="px-4 py-2.5 rounded-lg bg-green-100 text-green-700 font-semibold hover:bg-green-200 transition"
            >
              Confirm
            </button>

            <button
              onClick={() => updateStatus(request.id, "Rejected")}
              className="px-4 py-2.5 rounded-lg bg-red-100 text-red-700 font-semibold hover:bg-red-200 transition"
            >
              Reject
            </button>
          </>
        )}

        {request.status === "Contacted" && (
          <>
            <button
              onClick={() => updateStatus(request.id, "Negotiating")}
              className="px-4 py-2.5 rounded-lg bg-orange-100 text-orange-700 font-semibold hover:bg-orange-200 transition"
            >
              Negotiating
            </button>

            <button
              onClick={() => updateStatus(request.id, "Confirmed")}
              className="px-4 py-2.5 rounded-lg bg-green-100 text-green-700 font-semibold hover:bg-green-200 transition"
            >
              Confirm
            </button>
          </>
        )}

        {request.status === "Negotiating" && (
          <button
            onClick={() => updateStatus(request.id, "Confirmed")}
            className="px-4 py-2.5 rounded-lg bg-green-100 text-green-700 font-semibold hover:bg-green-200 transition"
          >
            Confirm
          </button>
        )}

        {request.status === "Confirmed" && (
          <button
            onClick={() => updateStatus(request.id, "Completed")}
            className="px-4 py-2.5 rounded-lg bg-zinc-200 text-zinc-800 font-semibold hover:bg-zinc-300 transition"
          >
            Mark Completed
          </button>
        )}

      </div>

    </div>

  </div>
))}
               
          </div>
        )}
      </section>
      </div>
  </div>
    </main>
  );
}