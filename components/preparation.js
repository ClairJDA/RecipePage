import React from "react";

function Preparation() {
  return (
    <section className="mx-5 md:mx-0 mt-5 p-4 bg-accent/5 rounded-xl">
      <h3 className="mb-2 outfit font-bold text-lg text-accent">Preparation time</h3>

      <ul className="ml-4 list-disc outfit text-sm text-accent">
        <li className="mt-1">
          <span className="relative left-2 font-bold text-wenge-brown">Total:</span>
          <span className="relative left-2 text-wenge-brown">Approximately 10 minutes</span>
        </li>
        <li className="mt-1">
          <span className="relative left-2 font-bold text-wenge-brown">Preparation:</span>
          <span className="relative left-2 text-wenge-brown">5 minutes</span>
        </li>
        <li className="mt-1">
          <span className="relative left-2 font-bold text-wenge-brown">Cooking:</span>{" "}
          <span className="relative left-2 text-wenge-brown">5 minutes</span>
        </li>
      </ul>
    </section>
  );
}

export default Preparation;
