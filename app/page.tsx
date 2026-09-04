"use client";

import Image from "next/image";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Home() {
  const [showRequestOptions, setShowRequestOptions] = useState(false);
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [requestSubmitted, setRequestSubmitted] = useState(false);
  const [requestId, setRequestId] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showCallOptions, setShowCallOptions] = useState(false);
  return (
    <main className="min-h-screen bg-white text-zinc-900">

      {/* Navbar */}
<nav className="relative flex items-center justify-between px-6 py-5 md:px-12 lg:px-20 border-b border-zinc-200">
  
  {/* Logo */}
  <div className="flex items-center gap-3">
  <Image
  src="/images/pnr-logo.png"
  alt="PNR Earthmovers"
  width={120}
  height={120}
  className="h-24 w-24 object-contain"
/>

  <div>
    <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
<span className="text-red-600">EARTHMOVERS</span>
    </h1>

    <p className="text-xs text-zinc-500">
      Earthmoving & Equipment Services
    </p>
  </div>
</div>
  {/* Desktop Navigation */}
  <div className="hidden md:flex items-center gap-8 text-sm font-medium">
    <a href="#" className="hover:text-yellow-600 transition">
      Home
    </a>

    <a href="#services" className="hover:text-yellow-600 transition">
      Services
    </a>

    <a href="#equipment" className="hover:text-yellow-600 transition">
      Equipment
    </a>

    <a href="#about" className="hover:text-yellow-600 transition">
      About
    </a>

    <a href="#contact" className="hover:text-yellow-600 transition">
      Contact
    </a>
  </div>

  {/* Desktop Request Button */}
  <button
    onClick={() => setShowRequestOptions(true)}
    className="hidden md:block bg-yellow-500 hover:bg-yellow-400 px-5 py-3 rounded-lg font-semibold transition"
  >
    Request a Machine
  </button>

  {/* Mobile Menu Button */}
  <button
  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
  className="md:hidden text-2xl font-bold p-2"
>
  {mobileMenuOpen ? "✕" : "☰"}
</button>

  {/* Mobile Menu */}
  {mobileMenuOpen && (
    <div className="absolute top-full left-0 right-0 z-50 bg-white border-b border-zinc-200 shadow-lg md:hidden">
      
      <div className="flex flex-col px-6 py-4 text-sm font-medium">

        <a
          href="#"
          onClick={() => setMobileMenuOpen(false)}
          className="py-3 border-b border-zinc-100"
        >
          Home
        </a>

        <a
          href="#services"
          onClick={() => setMobileMenuOpen(false)}
          className="py-3 border-b border-zinc-100"
        >
          Services
        </a>

        <a
          href="#equipment"
          onClick={() => setMobileMenuOpen(false)}
          className="py-3 border-b border-zinc-100"
        >
          Equipment
        </a>

        <a
          href="#about"
          onClick={() => setMobileMenuOpen(false)}
          className="py-3 border-b border-zinc-100"
        >
          About
        </a>

        <a
          href="#contact"
          onClick={() => setMobileMenuOpen(false)}
          className="py-3 border-b border-zinc-100"
        >
          Contact
        </a>

        <button
          onClick={() => {
            setMobileMenuOpen(false);
            setShowRequestOptions(true);
          }}
          className="mt-4 bg-yellow-500 hover:bg-yellow-400 px-5 py-3 rounded-lg font-semibold transition"
        >
          Request a Machine
        </button>

      </div>
    </div>
  )}
</nav>

      {/* Hero Section */}
      <section className="relative min-h-[75vh] overflow-hidden bg-zinc-950 text-white px-6 md:px-12 lg:px-20">

        <div className="max-w-7xl mx-auto min-h-[75vh] grid grid-cols-1 lg:grid-cols-2 items-center gap-10">

          {/* Hero Text */}
          <div className="py-20 lg:py-0">

            <p className="text-yellow-400 font-semibold uppercase tracking-[0.2em] text-sm mb-5">
              Reliable Earthmoving Solutions
            </p>

            <h2 className="text-5xl md:text-6xl xl:text-7xl font-bold leading-tight">
              Powering Your
              <br />
              <span className="text-yellow-400">
                Projects From Ground Up.
              </span>
            </h2>

            <p className="mt-6 text-zinc-300 text-lg max-w-xl leading-8">
              Professional earthmoving and excavation services for
              agricultural, industrial, construction and other projects.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">

              <button
  onClick={() => setShowRequestOptions(true)}
  className="bg-yellow-500 hover:bg-yellow-400 text-black px-7 py-4 rounded-lg font-bold transition"
>
  Request a Machine
</button>

             <button
  onClick={() => setShowCallOptions(true)}
  className="border border-zinc-600 hover:border-yellow-500 hover:text-yellow-500 px-6 py-3 rounded-lg font-semibold transition"
>
  Call Now
</button>

            </div>

          </div>


         {/* Hero Machine Image */}
<div className="relative h-[400px] lg:h-[550px] flex items-center justify-center overflow-hidden">

  {/* Ambient glow */}
  <div className="absolute inset-0 bg-yellow-500/10 blur-3xl rounded-full" />

  {/* Left blend into black */}
  <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-zinc-950 via-zinc-950/60 to-transparent z-20 pointer-events-none" />

  {/* Bottom blend */}
  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-zinc-950 to-transparent z-20 pointer-events-none" />

  <Image
    src="/images/HITACHI-130.png"
    alt="Tata Hitachi 130 excavator"
    width={700}
    height={500}
    priority
    className="relative z-10 w-full max-w-2xl object-contain drop-shadow-2xl"
  />

</div>
</div>

      </section>


      {/* Services */}
      <section id="services" className="py-20 px-6 md:px-12 lg:px-20">

        <div className="max-w-7xl mx-auto">

          <div className="max-w-2xl mb-12">

            <p className="text-yellow-600 font-semibold uppercase tracking-wider text-sm">
              What We Do
            </p>

            <h2 className="text-4xl font-bold mt-3">
              Our Services
            </h2>

            <p className="text-zinc-600 mt-4">
              Reliable machinery and experienced operators for different
              types of earthmoving requirements.
            </p>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            <ServiceCard
              title="Excavation"
              description="Excavation and digging work for construction and other projects."
            />

            <ServiceCard
              title="Earthwork"
              description="Earthmoving and site preparation for various requirements."
            />

            <ServiceCard
              title="Land Leveling"
              description="Land preparation and leveling for agricultural and construction purposes."
            />

            <ServiceCard
              title="Mud & Material Loading"
              description="Loading and shifting earth, mud and other materials."
            />

            <ServiceCard
              title="Industrial Work"
              description="Machinery support for industrial and infrastructure projects."
            />

            <ServiceCard
              title="Agricultural Work"
              description="Earthmoving solutions for farms and agricultural land."
            />

          </div>

        </div>

      </section>


      {/* Equipment */}
      <section
        id="equipment"
        className="py-20 px-6 md:px-12 lg:px-20 bg-zinc-100"
      >

        <div className="max-w-7xl mx-auto">

          <p className="text-yellow-600 font-semibold uppercase tracking-wider text-sm">
            Our Fleet
          </p>

          <h2 className="text-4xl font-bold mt-3 mb-12">
            Our Equipment
          </h2>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <EquipmentCard
              name="JCB 3DX"
              details="2018 Model • Earthmoving & Excavation"
              image="/images/jcb-3dx.png"
            />

            <EquipmentCard
              name="Tata Hitachi 130"
              details="2022 Model • Excavation, Earthwork & Heavy Loading"
              image="/images/hitachi-130.png"
            />

          </div>

        </div>

      </section>


      {/* About */}
      <section id="about" className="py-20 px-6 md:px-12 lg:px-20">

        <div className="max-w-4xl mx-auto text-center">

          <p className="text-yellow-600 font-semibold uppercase tracking-wider text-sm">
            About PNR Earthmovers
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Reliable Machines. Reliable Work.
          </h2>

          <p className="mt-6 text-zinc-600 text-lg leading-8">
            PNR Earthmovers provides earthmoving and equipment services
            for agricultural, industrial, construction and other
            earthmoving requirements. Our focus is simple — reliable
            equipment, dependable service and getting the work done.
          </p>

        </div>

      </section>


      {/* Contact */}
<section
  id="contact"
  className="bg-zinc-950 text-white py-20 px-6 md:px-12 lg:px-20"
>
  <div className="max-w-5xl mx-auto text-center">

    <p className="text-red-500 font-semibold uppercase tracking-wider text-sm">
      Need a Machine?
    </p>

    <h2 className="text-4xl md:text-5xl font-bold mt-3">
      Let's Get Your Work Started.
    </h2>

    <p className="text-zinc-400 mt-5 max-w-2xl mx-auto">
      Contact PNR Earthmovers to discuss your work requirements,
      location and machine availability.
    </p>

    {/* Phone Numbers */}
    <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">

      <a
        href="tel:9618098930"
        className="bg-red-600 hover:bg-red-700 px-6 py-4 rounded-lg font-bold transition"
      >
        📞 9618098930
      </a>

      <a
        href="tel:9849521852"
        className="border border-zinc-600 hover:border-red-500 hover:text-red-500 px-6 py-4 rounded-lg font-bold transition"
      >
        📞 9849521852
      </a>

    </div>

    {/* Request Button */}
    <div className="mt-5">
      <button
        onClick={() => setShowRequestOptions(true)}
        className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold transition"
      >
        Request a Machine
      </button>
    </div>

  </div>
</section>


      {/* Footer */}
      <footer className="bg-black text-zinc-500 py-8 px-6 text-center text-sm">
        <p>
          © {new Date().getFullYear()} PNR Earthmovers. All rights reserved.
        </p>
      </footer>

    {/* Request Options Modal */}
{showRequestOptions && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6"
    onClick={() => setShowRequestOptions(false)}
  >
    <div
      className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl"
      onClick={(e) => e.stopPropagation()}
    >

      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-yellow-600">
            PNR Earthmovers
          </p>

          <h2 className="mt-2 text-2xl font-bold text-zinc-900">
            Request a Machine
          </h2>
        </div>

        <button
          onClick={() => setShowRequestOptions(false)}
          className="text-2xl text-zinc-400 hover:text-zinc-900"
        >
          ×
        </button>
      </div>

      <p className="text-zinc-600 mb-6">
        Choose how you would like to contact us.
      </p>

      {/* Online Request */}
      <button
        onClick={() => {
  setShowRequestOptions(false);
  setShowRequestForm(true);
}}
        className="w-full rounded-xl border border-zinc-200 p-5 text-left hover:border-yellow-500 hover:bg-yellow-50 transition"
      >
        <div className="text-lg font-bold text-zinc-900">
          📋 Request Online
        </div>

        <p className="mt-1 text-sm text-zinc-500">
          Submit your work details and we'll get back to you.
        </p>
      </button>

      {/* Call */}
      <a
        href="tel:9618098930  "
        className="mt-4 block w-full rounded-xl bg-yellow-500 p-5 text-left hover:bg-yellow-400 transition"
      >
        <div className="text-lg font-bold text-black">
          📞 Call PNR Earthmovers
        </div>

        <p className="mt-1 text-sm text-zinc-800">
          Speak directly with us about your work.
        </p>
      </a>

      <button
        onClick={() => setShowRequestOptions(false)}
        className="mt-5 w-full text-sm font-medium text-zinc-500 hover:text-zinc-900"
      >
        Cancel
      </button>

    </div>
  </div>
)}


{/* Online Request Form */}
{showRequestForm && (
  <div
    className="fixed inset-0 z-50 overflow-y-auto bg-black/70 px-4 py-8"
    onClick={() => setShowRequestForm(false)}
  >
    <div
      className="mx-auto w-full max-w-2xl rounded-2xl bg-white p-6 md:p-8 shadow-2xl"
      onClick={(e) => e.stopPropagation()}
    >

      {/* Header */}
      <div className="flex items-start justify-between mb-8">

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-yellow-600">
            PNR Earthmovers
          </p>

          <h2 className="mt-2 text-3xl font-bold text-zinc-900">
            Request a Machine
          </h2>

          <p className="mt-2 text-zinc-500">
            Tell us about your work requirement.
          </p>
        </div>

        <button
          onClick={() => setShowRequestForm(false)}
          className="text-2xl text-zinc-400 hover:text-zinc-900"
        >
          ×
        </button>

      </div>


      {/* Form */}
      {!requestSubmitted && (
      <form
  className="space-y-6"
  onSubmit={async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
const requestId = `PNR-${Date.now()}`;

const request = {
  request_id: requestId,
  customer_name: formData.get("name") as string,
  phone: formData.get("phone") as string,
  location: formData.get("location") as string,
  machine_required: formData.get("machine") as string,
  work_type: formData.get("workType") as string,
  duration: formData.get("duration") as string,
  work_category: formData.get("workCategory") as string,
  preferred_start_date: formData.get("startDate") as string,
  work_details: formData.get("details") as string,
};

const { error } = await supabase
  .from("requests")
  .insert(request);

if (error) {
  console.error("Request submission failed:");
  console.error("Code:", error.code);
  console.error("Message:", error.message);
  console.error("Details:", error.details);
  console.error("Hint:", error.hint);

  alert(`Database error: ${error.message}`);
  return;
}

console.log("Request saved successfully:", request);

setRequestId(requestId);
setRequestSubmitted(true);
  }}
>

        {/* Customer Name */}
        <div>
          <label className="block text-sm font-semibold text-zinc-800 mb-2">
            Your Name *
          </label>

          <input
            type="text"
            name="name"
            required
            placeholder="Enter your name"
            className="w-full rounded-lg border border-zinc-300 px-4 py-3 outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100"
          />
        </div>


        {/* Phone */}
        <div>
          <label className="block text-sm font-semibold text-zinc-800 mb-2">
            Phone Number *
          </label>

            <input
              type="tel"
              name="phone"
              required
              placeholder="Enter your phone number"
              className="w-full rounded-lg border border-zinc-300 px-4 py-3 outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100"
            />
        </div>


        {/* Location */}
        <div>
          <label className="block text-sm font-semibold text-zinc-800 mb-2">
            Work Location *
          </label>

          <input
            type="text"
            name="location"
            required
            placeholder="Village / Area / City"
            className="w-full rounded-lg border border-zinc-300 px-4 py-3 outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100"
          />
        </div>


        {/* Machine */}
        <div>
          <label className="block text-sm font-semibold text-zinc-800 mb-2">
            Machine Required *
          </label>

          <select
            name="machine"
            required
            className="w-full rounded-lg border border-zinc-300 px-4 py-3 bg-white outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100"
          >
            <option value="">Select a machine</option>
            <option value="JCB 3DX">JCB 3DX</option>
            <option value="Tata Hitachi 130">Tata Hitachi 130</option>
          </select>
        </div>


        {/* Type of Work */}
        <div>
          <label className="block text-sm font-semibold text-zinc-800 mb-2">
            Type of Work *
          </label>

          <select
           name="workCategory"
            required
            className="w-full rounded-lg border border-zinc-300 px-4 py-3 bg-white outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100"
          >
            <option value="">Select type of work</option>
            <option value="Excavation">Excavation</option>
            <option value="Earthwork">Earthwork</option>
            <option value="Land Leveling">Land Leveling</option>
            <option value="Mud Loading">Mud / Material Loading</option>
            <option value="Industrial Work">Industrial Work</option>
            <option value="Agricultural Work">Agricultural Work</option>
            <option value="Other">Other</option>
          </select>
        </div>


        {/* Duration */}
        <div>
          <label className="block text-sm font-semibold text-zinc-800 mb-2">
            Expected Duration *
          </label>

          <select
          name="duration"
            required
            className="w-full rounded-lg border border-zinc-300 px-4 py-3 bg-white outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100"
          >
            <option value="">Select duration</option>
            <option value="Hours">Hours</option>
            <option value="1 Day">1 Day</option>
            <option value="Several Days">Several Days</option>
            <option value="1 Week">1 Week</option>
            <option value="Several Weeks">Several Weeks</option>
            <option value="Other">Other</option>
          </select>
        </div>


        {/* Work Type */}
        <div>
          <label className="block text-sm font-semibold text-zinc-800 mb-3">
            Work Type *
          </label>

          <div className="flex gap-6">

            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="workType"
                value="Private"
                required
              />
              <span>Private</span>
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"

                name="workType"
                value="Public"
              />
              <span>Public</span>
            </label>

          </div>
        </div>


        {/* Start Date */}
        <div>
          <label className="block text-sm font-semibold text-zinc-800 mb-2">
            Preferred Start Date *
          </label>

          <input
          type="date"
          name="startDate"
            
            required
            className="w-full rounded-lg border border-zinc-300 px-4 py-3 outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100"
          />
        </div>


        {/* Work Details */}
        <div>
          <label className="block text-sm font-semibold text-zinc-800 mb-2">
            Work Details
          </label>

          <textarea
            name="details"
            rows={4}
            placeholder="Describe the work, approximate quantity, site conditions, or anything else we should know..."
            className="w-full rounded-lg border border-zinc-300 px-4 py-3 outline-none resize-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100"
          />
        </div>


        {/* Submit */}
        <button
          type="submit"
          className="w-full rounded-lg bg-yellow-500 py-4 font-bold text-black hover:bg-yellow-400 transition"
        >
          Submit Request
        </button>

        <p className="text-center text-xs text-zinc-500">
          We will contact you after reviewing your requirement and machine availability.
        </p>

      </form>
      )}
      {/* Request Submitted */}
{requestSubmitted && (
  <div className="py-8 text-center">

    {/* Success Icon */}
    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-yellow-100">
      <span className="text-4xl">✓</span>
    </div>

    <h2 className="mt-6 text-3xl font-bold text-zinc-900">
      Request Received
    </h2>

    <p className="mt-4 text-zinc-600 leading-7">
      Thank you for contacting PNR Earthmovers.
      Your request has been recorded successfully.
    </p>

    {/* Request ID */}
    <div className="mt-7 rounded-xl bg-zinc-100 p-5">

      <p className="text-sm text-zinc-500">
        Your Request ID
      </p>

      <p className="mt-2 text-xl font-bold tracking-wider text-zinc-900">
        {requestId}
      </p>

    </div>

    <p className="mt-6 text-sm text-zinc-500 leading-6">
      We will check machine availability and contact you
      regarding your requirement.
    </p>

    <button
      onClick={() => {
        setShowRequestForm(false);
        setRequestSubmitted(false);
        setRequestId("");
      }}
      className="mt-8 rounded-lg bg-yellow-500 px-8 py-4 font-bold text-black hover:bg-yellow-400 transition"
    >
      Done
    </button>

  </div>
)}

    </div>
  </div>
)}

{showCallOptions && (
  <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4">
    <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">

      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-zinc-900">
          Call PNR Earthmovers
        </h2>

        <p className="mt-2 text-sm text-zinc-500">
          Choose a number to contact us
        </p>
      </div>

      <div className="space-y-3">

        <a
          href="tel:9618098930"
          className="flex items-center justify-between rounded-xl bg-red-600 px-5 py-4 font-semibold text-white hover:bg-red-700 transition"
        >
          <span>📞 9618098930</span>
          <span>Call →</span>
        </a>

        <a
          href="tel:9849521852"
          className="flex items-center justify-between rounded-xl border border-zinc-300 px-5 py-4 font-semibold text-zinc-900 hover:border-red-500 hover:text-red-600 transition"
        >
          <span>📞 9849521852</span>
          <span>Call →</span>
        </a>

      </div>

      <button
        onClick={() => setShowCallOptions(false)}
        className="mt-5 w-full rounded-xl bg-zinc-100 px-5 py-3 font-semibold text-zinc-700 hover:bg-zinc-200 transition"
      >
        Cancel
      </button>

    </div>
  </div>
)}

    </main>
  );
}


/* Service Card */
function ServiceCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="border border-zinc-200 rounded-xl p-7 hover:border-yellow-400 hover:shadow-lg transition">

      <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-5">
        🚜
      </div>

      <h3 className="text-xl font-bold">
        {title}
      </h3>

      <p className="text-zinc-600 mt-3 leading-7">
        {description}
      </p>

    </div>
  );
}


/* Equipment Card */
function EquipmentCard({
  name,
  details,
  image,
}: {
  name: string;
  details: string;
  image: string;
}) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-zinc-200">

      <div className="h-72 bg-white flex items-center justify-center p-6">

        <Image
          src={image}
          alt={name}
          width={600}
          height={400}
          className="w-full h-full object-contain"
        />

      </div>

      <div className="p-7">

        <h3 className="text-2xl font-bold">
          {name}
        </h3>

        <p className="text-zinc-600 mt-3">
          {details}
        </p>

        <button className="mt-6 text-yellow-600 font-semibold hover:text-yellow-700">
          Request this machine →
        </button>

      </div>

    </div>
  );
}