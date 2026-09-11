import { useState } from "react";
import type { ITechnology } from "../../types/technology";
import TechnologyCard from "./TechnologyCard";
import Stack from "./Stack";

interface ITechnologiesProps {
  technologies: ITechnology[];
}

const Technologies = ({ technologies }: ITechnologiesProps) => {
  const [selectedTechnologies, setSelectedTechnologies] = useState<
    ITechnology[]
  >([]);

  return (
    <section className="container mx-auto px-4 pb-24">
      {/* Section Heading */}
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold text-slate-900">
          Explore the <span className="text-pink-500">Technologies</span>
        </h2>

        <p className="mt-2 text-sm text-slate-400">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* Main Layout */}
      <div className="grid gap-6 lg:grid-cols-4">
        {/* Technology Cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:col-span-3 xl:grid-cols-3">
          {technologies.map((technology) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
              selectedTechnologies={selectedTechnologies}
              setSelectedTechnologies={setSelectedTechnologies}
            />
          ))}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Stack
            selectedTechnologies={selectedTechnologies}
            setSelectedTechnologies={setSelectedTechnologies}
          />
        </div>
      </div>
    </section>
  );
};

export default Technologies;
