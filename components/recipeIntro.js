import Image from "next/image";

function RecipeIntro() {
  return (
    <>
      <div className="relative w-full h-[200px] md:h-[300px] md:rounded-2xl overflow-hidden">
        <Image
          src="/images/image-omelette.jpeg"
          alt="recipe"
          fill
          className="object-cover"
        />
      </div>

      <h1 className="my-4 px-5 md:px-0 youngSerif text-3xl text-dark-charcoal">
        Simple Omelette Recipe
      </h1>
      <p className="px-5 md:px-0 outfit text-sm text-wenge-brown">
        An easy and quick dish, perfect for any meal. This classic omelette
        combines beaten eggs cooked to perfection, optionally filled with your
        choice of cheese, vegetables, or meats.
      </p>
    </>
  );
}

export default RecipeIntro;
