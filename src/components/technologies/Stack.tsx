import type { Dispatch, SetStateAction } from "react";
import type { ITechnology } from "../../types/technology";
import { toast } from "react-toastify";
import StackItem from "./StackItem";

interface IStackProps {
  selectedTechnologies: ITechnology[];
  setSelectedTechnologies: Dispatch<SetStateAction<ITechnology[]>>;
}

const Stack = ({
  selectedTechnologies,
  setSelectedTechnologies,
}: IStackProps) => {
  const handleRemoveAll = () => {
    if (selectedTechnologies.length === 0) {
      return;
    }

    setSelectedTechnologies([]);
    toast.success("All technologies removed successfully");
  };

  return (
    <div className="h-fit rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      {/* Heading */}
      <h2 className="text-lg font-bold text-slate-800">Your Stack</h2>

      <p className="mt-1 text-xs text-slate-400">
        {selectedTechnologies.length} Technology Selected
      </p>

      {/* Stack Items */}
      <div className="mt-5 space-y-3">
        {selectedTechnologies.length === 0 ? (
          <div className="rounded-xl border border-dashed border-gray-200 py-6 text-center">
            <p className="text-sm text-slate-400">Your stack is empty.</p>
          </div>
        ) : (
          selectedTechnologies.map((technology) => (
            <StackItem
              key={technology.id}
              technology={technology}
              selectedTechnologies={selectedTechnologies}
              setSelectedTechnologies={setSelectedTechnologies}
            />
          ))
        )}
      </div>

      {/* Remove All */}
      {selectedTechnologies.length > 0 && (
        <button
          onClick={handleRemoveAll}
          className="mt-5 w-full rounded-lg border border-pink-200 py-2.5 text-sm font-semibold text-red-500 transition hover:bg-red-50"
        >
          Remove All
        </button>
      )}
    </div>
  );
};

export default Stack;
