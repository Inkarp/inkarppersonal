import React, { useState } from "react";
import axios from "axios";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    jobTitle: "",
    city: "",
    state: "",
    inquiryType: "",
    isExistingCustomer: "",
    purchaseTimeline: "",
    application: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const inquiryTypes = [
    { value: "R&D", label: "R&D" },
    { value: "Application Support", label: "Application Support" },
    { value: "Quality Control (QC)", label: "Quality Control (QC)" },
    { value: "Quality Assurance (QA)", label: "Quality Assurance (QA)" },
    { value: "Analytical Laboratory Services", label: "Analytical Laboratory Services" },
    { value: "Regulatory Affairs", label: "Regulatory Affairs" },
    { value: "Product Development", label: "Product Development" },
    { value: "Validation & Calibration", label: "Validation & Calibration" },
    { value: "Technical Services", label: "Technical Services" },
    { value: "Others", label: "Others" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const res = await axios.post("http://localhost:5000/api/contact/submit", formData);
      if (res.data?.success) {
        setStatus({ type: "success", message: "Message sent successfully! We will get back to you soon." });
        setFormData({
          name: "",
          email: "",
          phone: "",
          jobTitle: "",
          city: "",
          state: "",
          inquiryType: "",
          isExistingCustomer: "",
          purchaseTimeline: "",
          application: "",
          message: "",
        });
        e.target.reset();
      } else {
        setStatus({ type: "error", message: res.data?.message || "An error occurred while sending your message" });
      }
    } catch (err) {
      setStatus({
        type: "error",
        message: err.response?.data?.message || "An error occurred while sending your message",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative w-[98%] mx-auto py-10 md:px-10 lg:px-20">
      {/* soft on-brand background */}
      {/* <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(230,57,70,0.08),transparent),radial-gradient(1200px_600px_at_80%_110%,rgba(230,57,70,0.08),transparent)]" /> */}

      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-2xl border border-gray-200 text-center bg-white p-6 sm:p-8">
          <h3 className="text-2xl text-[#E63946] font-[MaxOT] mb-1">Contact Our Team</h3>
          <p className="mb-6 text-sm font-[Roboto] text-black/70">
            Fill out the form and our team will get back to you shortly. Fields marked * are required.
          </p>

          {status.message && (
            <div
              className={`mb-6 p-4 rounded-lg text-sm font-[Roboto] ${
                status.type === "success"
                  ? "bg-green-50 text-green-700 border border-green-200"
                  : "bg-red-50 text-red-700 border border-red-200"
              }`}
            >
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="Your Name *"
                required
                autoComplete="name"
                className="w-full rounded-full border border-gray-200 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#E63946]"
              />
              <input
                type="email"
                name="email"
                onChange={handleChange}
                placeholder="Your Email *"
                required
                autoComplete="email"
                className="w-full rounded-full border border-gray-200 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#E63946]"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="tel"
                name="phone"
                onChange={handleChange}
                placeholder="Your Phone *"
                required
                autoComplete="tel"
                className="w-full rounded-full border border-gray-200 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#E63946]"
              />
              <input
                type="text"
                name="jobTitle"
                onChange={handleChange}
                placeholder="Designation *"
                required
                className="w-full rounded-full border border-gray-200 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#E63946]"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="city"
                onChange={handleChange}
                placeholder="City"
                className="w-full rounded-full border border-gray-200 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#E63946]"
              />
              <input
                type="text"
                name="state"
                onChange={handleChange}
                placeholder="State"
                className="w-full rounded-full border border-gray-200 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#E63946]"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <select
                name="inquiryType"
                onChange={handleChange}
                required
                className="w-full rounded-full border border-gray-200 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#E63946] bg-white"
              >
                <option value="">Department</option>
                {["R&D","Application Support","Quality Control (QC)","Quality Assurance (QA)","Analytical Laboratory Services","Regulatory Affairs","Product Development","Validation & Calibration","Technical Services","Others"]
                  .map((label) => (
                  <option key={label} value={label}>{label}</option>
                ))}
              </select>

              <input
                type="text"
                name="application"
                onChange={handleChange}
                placeholder="Application"
                className="w-full rounded-full border border-gray-200 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#E63946]"
              />
            </div>

            <textarea
              name="message"
              onChange={handleChange}
              placeholder="Please elaborate your requirement"
              className="w-full h-32 rounded-2xl border border-gray-200 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#E63946] resize-none"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className={`mt-2 inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-base font-semibold shadow transition ${
                isSubmitting ? "opacity-80 cursor-not-allowed" : "hover:opacity-95"
              }`}
              style={{ background: "linear-gradient(90deg,#BE0010,#E63946)" }}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-30" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-80" fill="currentColor" d="M4 12a8 8 0 018-8V0a12 12 0 100 24v-4a8 8 0 01-8-8z" />
                  </svg>
                  Sending...
                </>
              ) : (
                <>Submit <span aria-hidden>→</span></>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
