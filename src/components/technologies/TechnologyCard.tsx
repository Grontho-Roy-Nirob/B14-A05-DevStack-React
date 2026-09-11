import { FaStar } from "react-icons/fa";
import type { ITechnology } from "../../types/technology";
import type { SetStateAction } from "react";
import type { Dispatch } from "react";
import { Bounce, toast } from "react-toastify";

interface ITechnologyCardProps {
  technology: ITechnology;
  selectedTechnologies: ITechnology[];
  setSelectedTechnologies: Dispatch<SetStateAction<ITechnology[]>>;
}

const TechnologyCard = ({
  technology,
  selectedTechnologies,
  setSelectedTechnologies,
}: ITechnologyCardProps) => {
  const selectedTechnology = selectedTechnologies.find(
    (tech) => tech.id === technology.id,
  );

  const isSelected = selectedTechnology ? true : false;

  const handleAddToStack = () => {
    setSelectedTechnologies([...selectedTechnologies, technology]);

    toast.success(`${technology.name} added to your stack`, {
      position: "bottom-right",
      autoClose: 3000,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <div className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Icon & Badge Design*/}
      <div className="flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-50 p-2">
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-8 w-8 object-contain"
          />
        </div>

        <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-semibold text-pink-500">
          {technology.badge}
        </span>
      </div>

      <h2 className="mt-5 text-xl font-bold text-slate-800">
        {technology.name}
      </h2>

      <p className="mt-2 min-h-[72px] text-sm leading-6 text-slate-400">
        {technology.description}
      </p>

      <div className="mt-4 flex items-center justify-between text-xs">
        <span className="rounded-md bg-slate-50 px-2 py-1 font-medium text-slate-500">
          {technology.category}
        </span>

        <span className="text-slate-400">{technology.difficulty}</span>

        <span className="flex items-center gap-1 font-semibold text-slate-600">
          <FaStar className="text-yellow-400" />
          {technology.rating}
        </span>
      </div>

      {/* Button */}
      <button
        onClick={handleAddToStack}
        disabled={isSelected}
        className={`mt-5 w-full rounded-lg py-3 text-sm font-semibold transition ${
          isSelected
            ? "cursor-not-allowed border border-pink-100 bg-gradient-to-r from-pink-100 to-pink-100 text-pink-700"
            : "bg-slate-900 text-white hover:bg-slate-800"
        }`}
      >
        {isSelected ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechnologyCard;
