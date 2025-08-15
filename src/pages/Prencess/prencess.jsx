// File: prences.jsx

import React from "react";

export default function Prences() {
  return (
    <section className=" py-12 px-4 flex flex-col items-center bg-[#f3f8ed]">
      <h2 className="text-3xl font-bold text-[#6D4C41] mb-4 text-center">
        Our Presence Across India
      </h2>
      <p className="text-lg text-black mb-8 text-center max-w-2xl">
        We are present in key regions across India. States below are highlighted to showcase our active presence.
      </p>
      <div className="max-w-3xl w-full flex justify-center">
        <img
          src="/map.jpg"
          alt="India Map"
          className="mx-auto w-full h-full max-w-xl rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}
