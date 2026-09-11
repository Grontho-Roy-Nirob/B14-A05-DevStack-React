import { FaTimes } from "react-icons/fa";
import type { ITechnology } from "../../types/technology";
import type { Dispatch, SetStateAction } from "react";

interface IStackItemProps {
  technology: ITechnology;
  selectedTechnologies: ITechnology[];
  setSelectedTechnologies: Dispatch<SetStateAction<ITechnology[]>>;
}

const StackItem = ({
  technology,
  selectedTechnologies,
  setSelectedTechnologies,
}: IStackItemProps) => {
  const handleRemove = () => {
    const remainingTechnologies = selectedTechnologies.filter(
      (item) => item.id !== technology.id,
    );

    setSelectedTechnologies(remainingTechnologies);
  };

  return (
    <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-3 py-2">
      <div className="flex items-center gap-3">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-8 w-8 object-contain"
        />

        <div>
          <h3 className="text-sm font-semibold text-slate-700">
            {technology.name}
          </h3>

          <p className="text-xs text-slate-400">{technology.category}</p>
        </div>
      </div>

      <button
        onClick={handleRemove}
        className="text-gray-400 transition hover:text-red-500"
      >
        <FaTimes />
      </button>
    </div>
  );
};

export default StackItem;
