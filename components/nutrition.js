import React from "react";

function Nutrition() {
  return (
    <section className="mx-5 md:mx-0 pb-4">
      <h2 className="youngSerif text-2xl text-primary">Nutrition</h2>
      <p className="mt-4 outfit text-sm text-wenge-brown">
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <table className="w-full my-4 outfit text-sm">
        <tbody>
          <tr className=" border-b border-light-grey">
            <td className="py-2 text-wenge-brown ">Calories</td>
            <td className="text-primary font-bold">277kcal</td>
          </tr>
          <tr className=" border-b border-light-grey">
            <td className="py-2 text-wenge-brown ">Carbs</td>
            <td className="text-primary  font-bold">0g</td>
          </tr>
          <tr className="border-b border-light-grey">
            <td className="py-2 text-wenge-brown ">Protein</td>
            <td className="text-primary  font-bold">20g</td>
          </tr>
          <tr>
            <td className="py-2 text-wenge-brown ">Fat</td>
            <td className="text-primary  font-bold">22g</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Nutrition;
