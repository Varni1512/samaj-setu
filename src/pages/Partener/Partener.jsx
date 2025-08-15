// File: Partner.jsx

import React from "react";

const partnerLogos = [
  "/Logo/logo1.png",
  "/Logo/logo2.jpg",
  "/Logo/logo3.jpg",
  "/Logo/logo4.jpg",
  "/Logo/logo5.png"
];

export default function Partner() {
  return (
    <div className="mt-1 w-full flex flex-col items-center">
      <h3 className="text-3xl font-bold text-[#6D4C41] mb-4">
        Our Partner Organization
      </h3>
      <div className="flex flex-wrap justify-center gap-6">
        {partnerLogos.map((logo, idx) => (
          <img
            key={logo}
            src={logo}
            alt={`Partner Logo ${idx + 1}`}
            className="w-28 h-28 object-contain rounded-lg  p-2 shadow-md"
          />
        ))}
      </div>
      <br />
      <br />
    </div>
  );
}
