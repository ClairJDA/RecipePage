import React from "react";

function Ingredients() {
  return (
    <section className="mx-5 md:mx-0 mt-4 text-primary">
      <h2 className="mb-4 youngSerif text-2xl"> Ingredients</h2>
      <ul className="ml-4 list-disc">
        <li className="mt-1">
          <span className="relative left-2 text-sm text-wenge-brown">2-3 large eggs</span>
        </li>
        <li className="mt-1">
          <span className="relative left-2 text-sm text-wenge-brown">Salt, to taste</span>
        </li>
        <li className="mt-1">
          <span className="relative left-2 text-sm text-wenge-brown">Pepper, to taste</span>
        </li>
        <li className="mt-1">
          <span className="relative left-2 text-sm text-wenge-brown">
            1 tablespoon of butter or oil
          </span>
        </li>
        <li className="mt-1">
          <span className="relative left-2 text-sm text-wenge-brown">
            Optional fillings: cheese, diced vegetables, cooked meats, herbs
          </span>
        </li>
      </ul>
      <hr className="my-4 text-light-grey" />
    </section>
  );
}

export default Ingredients;
