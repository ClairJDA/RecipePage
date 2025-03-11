import React from "react";

function Instruction() {
  return (
    <section className="mx-5 md:mx-0  mt-4 text-primary">
      <h2 className="mb-4 youngSerif text-2xl">Instructions</h2>
      <ul className="ml-4 list-decimal font-bold text-sm">
        <li className="mt-2">
          <span className="relative left-2 font-bold text-wenge-brown">Beat the eggs:</span>
          <span className="relative left-2 font-light text-wenge-brown">
            In a bowl, beat the eggs with a pinch of salt and pepper until they
            are well mixed. You can add a tablespoon of water or milk for a
            fluffier texture.
          </span>
        </li>

        <li className="mt-2">
          <span className="relative left-2 font-bold text-wenge-brown">Heat the pan: </span>
          <span className="relative left-2 font-light text-wenge-brown">
            Place a non-stick frying pan over medium heat and add butter or oil.
          </span>
        </li>

        <li className="mt-2">
          <span className="relative left-2 font-bold text-wenge-brown">
            Cook the omelette:{" "}
          </span>
          <span className="relative left-2 font-light text-wenge-brown">
            Once the butter is melted and bubbling, pour in the eggs. Tilt the
            pan to ensure the eggs evenly coat the surface.
          </span>
        </li>

        <li className="mt-2">
          <span className="relative left-2 font-bold text-wenge-brown">
            Add fillings (optional):{" "}
          </span>
          <span className="relative left-2 font-light text-wenge-brown">
            When the eggs begin to set at the edges but are still slightly runny
            in the middle, sprinkle your chosen fillings over one half of the
            omelette.
          </span>
        </li>

        <li className="mt-2">
          <span className="relative left-2 font-bold text-wenge-brown">Fold and serve: </span>
          <span className="relative left-2 font-light text-wenge-brown">
            As the omelette continues to cook, carefully lift one edge and fold
            it over the fillings.Let it cook for another minute, then slide it
            onto a plate.
          </span>
        </li>

        <li className="mt-2">
          <span className="relative left-2 font-bold text-wenge-brown">Enjoy:</span>
          <span className="relative left-2 font-light text-wenge-brown">
            Serve hot, with additional salt and pepper if needed.
          </span>
        </li>
      </ul>
      <hr className="my-4 text-light-grey" />
    </section>
  );
}

export default Instruction;
