import React, { useState } from "react";
import { X } from "lucide-react";
import Heidolph from "/src/assets/PrincipalLogos/RowOne/Heidolph.svg";
import Radleys from "/src/assets/PrincipalLogos/RowOne/radley.svg";
import Waters from '/src/assets/PrincipalLogos/RowTwo/waters.svg';
import Metller from '/src/assets/PrincipalLogos/RowTwo/Metller.png';
import Chemspeed from '/src/assets/PrincipalLogos/RowSix/Chemspeed.jpg';
import RegisterForm from "./RegisterForm";
import { Helmet } from "react-helmet";
import WebinarBanner from "/src/assets/Events/WebinarBanner.jpg";
import Webinars from "./Webinars";


const webinars = [
 {
    id: 1,
    title: "SwissCAT+ ETH Zurich: Redefining Catalysis Research with Automation, Robotics & AI",
    description:
      "Join Dr. Yuhui Hou (ETH Zurich) for a deep dive into SwissCAT+ – a pioneering platform leveraging robotics, AI, and automation to revolutionize catalyst discovery.",
    date1: "September 9 | 12:30 PM & 8:30 PM IST",
    date: "2025-09-09",
    img: Chemspeed, // Replace with the actual imported image
    details: `
  <p><strong>SwissCAT+ ETH Zurich: Redefining Catalysis Research with Automation, Robotics & AI</strong></p>
  <p class="mt-2">Join us for an exclusive session with <strong>Dr. Yuhui Hou (ETH Zurich)</strong> as he showcases SwissCAT+ – a breakthrough facility revolutionizing catalysis research through robotics, automation, and AI.</p>

  <p class="mt-4 font-semibold">✨ What to expect:</p>
  <ul class="list-disc list-inside mt-2 space-y-1">
    <li>🔹 Robotic synthesis & high-throughput testing</li>
    <li>🔹 FAIR data & automated processing</li>
    <li>🔹 AI-powered catalyst discovery (Bayesian optimization)</li>
    <li>🔹 Real-world CO₂-to-methanol case studies</li>
    <li>🔹 The future of autonomous research labs</li>
  </ul>

  <p class="mt-4">📅 <strong>2 Sessions | Tuesday, Sep 9, 2025</strong></p>
  <p>🕐 <strong>12:30 PM IST & 8:30 PM IST</strong></p>
`
  },
  {
    id: 2,
    title: "Calibration of Weighing Devices: 🎯 Boost Profitability with Accurate Weighing Processes",
    description:
      "Ensure compliance and precision in your weighing operations with METTLER TOLEDO’s ACC – the new benchmark in calibration. Learn how accuracy impacts cost, quality, and efficiency.",
    date1: "August 27 | 11:30 PM IST",
    date: "2025-08-27",
    img: Metller, // Replace with the correct imported image for this webinar
    details: `
  <p><strong>Calibration of Weighing Devices: 🎯 Boost Profitability with Accurate Weighing Processes</strong></p>
  <p class="mt-2">⚖️ Ensure compliance & precision with METTLER TOLEDO’s Accuracy Calibration Certificate (ACC) – the new benchmark in weighing calibration!</p>
  
  <p class="mt-4 font-semibold">✨ What You’ll Learn:</p>
  <ul class="list-disc list-inside mt-2 space-y-1">
    <li>🔹 Calibration of non-automatic weighing instruments</li>
    <li>🔹 Impact on quality, efficiency & cost</li>
    <li>🔹 How ACC ensures measurement certainty & safe weighing ranges</li>
    <li>🔹 Real-world benefits for lab & production teams</li>
  </ul>

  <p class="mt-4 font-semibold">🎯 Who should attend?</p>
  <ul class="list-disc list-inside mt-2 space-y-1">
    <li>✅ Lab & production managers</li>
    <li>✅ QA personnel & auditors</li>
    <li>✅ Anyone using balances or non-automatic weighing devices</li>
  </ul>

  <p class="mt-4">📅 <strong>Wednesday, Aug 27, 2025</strong></p>
  <p>🕦 <strong>11:30 PM IST</strong></p>
`
  },
  {
    id: 3,
    title: "Microelectrodes in Action: Enhancing pH & Conductivity Measurements",
    description:
      "Explore real-world applications and precision techniques using microelectrodes. Boost your research with insights into sensitivity, troubleshooting, and expert Q&A.",
    date1: "August 20 | 07:30 PM IST",
    date: "2025-08-20",
    img: Metller, // Replace with actual image import
    details: `
  <p><strong>Microelectrodes in Action: Enhancing pH & Conductivity Measurements</strong></p>
  <p class="mt-2">Dive into the fundamentals and advanced applications of microelectrodes to enhance your research accuracy and sensitivity.</p>
  
  <p class="mt-4 font-semibold">✨ What’s Inside:</p>
  <ul class="list-disc list-inside mt-2 space-y-1">
    <li>🔹 Microelectrode fundamentals & unique advantages</li>
    <li>🔹 Techniques to boost accuracy & sensitivity</li>
    <li>🔹 Real-world applications in microfluidics, cell/tissue fluids & more</li>
    <li>🔹 Troubleshooting common issues</li>
    <li>🔹 Live Q&A with experts!</li>
  </ul>

  <p class="mt-4 font-semibold">🔥 Why attend?</p>
  <ul class="list-disc list-inside mt-2 space-y-1">
    <li>🚀 Boost your research with precision techniques</li>
    <li>💡 Explore emerging innovations</li>
    <li>🤝 Connect with expert minds</li>
    <li>✅ Apply actionable insights instantly</li>
  </ul>

  <p class="mt-4">📅 <strong>Wednesday, Aug 20, 2025</strong></p>
  <p>🕖 <strong>7:30 PM IST</strong></p>
`
  },
  {
    id: 4,
    title: "Empower Tips: Ask Me Anything About ALCOA++ Best Practices in Empower Software",
    description:
      "Join our interactive session to explore how Empower aligns with ALCOA++ principles – ensuring your data is Attributable, Legible, Contemporaneous, Original, Accurate & more ✅",
    date1: "August 14 | 07:30 PM IST",
    date: "2025-08-14",
    // image: "https://www.inkarp.co.in/assets/images/Analytical-Validation.jpeg",
    img: Waters,
    details: `
  <p><strong>Empower Tips: Ask Me Anything About ALCOA++ Best Practices in Empower Software</strong></p>
  <p class="mt-2">Ensure your lab’s data integrity with Empower Software!</p>
  <p class="mt-2">Join our interactive session to explore how Empower aligns with ALCOA++ principles – ensuring your data is Attributable, Legible, Contemporaneous, Original, Accurate & more ✅</p>
  <p class="mt-4 font-semibold">✨ What’s in it for you?</p>
  <ul class="list-disc list-inside mt-2 space-y-1">
    <li>🔹 ALCOA++ best practices explained</li>
    <li>🔹 Empower tips for compliance</li>
    <li>🔹 Real-world examples & expert insights</li>
    <li>🔹 Ask your data integrity questions live!</li>
    <li>🔹 Strengthen traceability & accountability</li>
  </ul>
  <p class="mt-4">📅 <strong>Thursday, Aug 14, 2025</strong></p>
  <p>🕖 <strong>7:30 PM IST</strong></p>
`
  },
];

// Helper function to calculate days left until a date string in 'YYYY-MM-DD' format
function getDaysLeft(dateString) {
  const today = new Date();
  const target = new Date(dateString);
  // Zero out the time for accurate day difference
  today.setHours(0, 0, 0, 0);
  target.setHours(0, 0, 0, 0);
  const diff = target - today;
  if (diff < 0) return 0;
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

export default function WebinarsNew() {
  const [selectedWebinar, setSelectedWebinar] = useState(null);
  const [showRegister, setShowRegister] = useState(false);

  const handleCloseModal = () => {
    setSelectedWebinar(null);
    setShowRegister(false);
  };

  return (
    <>

      <div className="w-full">
        {/* Banner */}
        <Helmet>
          <title>Webinars - Inkarp Instruments Private Ltd</title>
          <meta name="keywords" content='default' />
          <meta name="description" content="Join Inkarp's Expert-LED Webinars to stay informed on Industry Trends, Best Practices, and Innovative Solutions. Explore upcoming webinars and access on-demand recordings for professional growth." />
        </Helmet>
        <div className="relative w-full">
          <img src={WebinarBanner} alt="Webinar Banner" className="w-full h-auto object-cover" />
          {/* <div className="absolute inset-0  flex flex-col justify-center items-center text-white text-center px-6 py-10">
          <h1 className="text-3xl font-[MaxOT] md:text-4xl font-bold text-[#E63946]">Explore Upcoming Webinars</h1>
          <p className="mt-3 text-base md:text-lg max-w-xl text-black">
            Stay informed and inspired with expert-led discussions
          </p>
        </div> */}
        </div>
        {/* Webinar List */}
        <div className="space-y-6 max-w-7xl mx-auto px-4 py-10 ">
          {webinars.map((webinar) => (
            <div
              key={webinar.id}
              className="p-4 rounded-xl shadow flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border border-gray-300 bg-[#F5F5F5]"
            >
              <div className="flex gap-3">
                {/* <span
                    className="text-4xl sm:text-5xl font-bold text-transparent font-[MaxOT] leading-none select-none flex-shrink-0"
                    style={{ WebkitTextStroke: "2px #0f1b33" }}
                  >
                    {webinar.number}
                  </span> */}

                <div className="flex flex-col items-center">
                  <img src={webinar.img} alt="Logo" className="w-24 h-16 object-contain bg-white rounded-xl" />

                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-md lg:w-[180px] w-full">
                  <p className="font-[Roboto]">{webinar.date1}</p>
                  <div className="flex items-center text-[#E63946]  px-3 py-1 rounded-xl text-md font-semibold font-[Roboto] ">
                    {getDaysLeft(webinar.date)} days left
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-md font-[MaxOT] text-[#E63946]">{webinar.title}</h3>
                <p className="text-sm font-[Roboto]">{webinar.description}</p>
              </div>

              <div className="flex gap-3 flex-col">
                <button
                  onClick={() => setSelectedWebinar(webinar)}
                  className="text-sm px-4 py-2 bg-[#E63946] text-white rounded hover:bg-red-700 transition font-[MaxOT] hover:text-black"
                >
                  Know More
                </button>

              </div>
            </div>
          ))}
        </div>

        {/* Webinar Detail Modal */}
        {selectedWebinar && !showRegister && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto relative p-6">
              <button
                className="absolute top-4 right-4 text-gray-600 hover:text-black"
                onClick={handleCloseModal}
              >
                <X className="w-5 h-5" />
              </button>
              {/* <h3 className="text-2xl font-bold text-[#E63946] font-[MaxOT] mb-2">{selectedWebinar.title}</h3> */}
              {/* <img
              src={selectedWebinar.image}
              alt={selectedWebinar.title}
              className="w-full h-full object-cover mb-4 border rounded-lg"
            /> */}
              <div className="font-[Roboto]  mb-3 text-md space-y-2">
                <div dangerouslySetInnerHTML={{ __html: selectedWebinar.details }} />
              </div>
              <div className="text-center mt-6">
                <button
                  onClick={() => setShowRegister(true)}
                  className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 text-sm"
                >
                  Register Now →
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Register Form Modal */}
        {showRegister && (
          <RegisterForm isOpen={true} onClose={handleCloseModal} />
        )}
      </div>
    </>
  );
}
