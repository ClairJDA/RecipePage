import Ingredients from "@/components/ingredients";
import Instruction from "@/components/instruction";
import Nutrition from "@/components/nutrition";
import Preparation from "@/components/preparation";
import RecipeIntro from "@/components/recipeIntro";

export default function Home() {
  return (
    <div className="flex-col justify-items-center items-center h-full md:p-4 bg-eggshell">
      <div className="flex-col w-full md:w-[600px] md:my-8 md:p-5 md:rounded-2xl bg-white">
        <RecipeIntro />
        <Preparation />
        <Ingredients />
        <Instruction />
        <Nutrition />
      </div>
      
      <div className="hidden md:block attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">ClairJDA</a>.
      </div>
    </div>
  );
}
