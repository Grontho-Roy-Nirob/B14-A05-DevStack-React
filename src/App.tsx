import { Suspense, use, useState } from "react";

import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Technologies from "./components/technologies/Technologies";

import type { ITechnology } from "./types/technology";

const technologiesFetch = async (): Promise<ITechnology[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

const TechnologiesData = ({
  technologiesPromise,
}: {
  technologiesPromise: Promise<ITechnology[]>;
}) => {
  const technologies = use(technologiesPromise);
  return <Technologies technologies={technologies} />;
};

function App() {
  const [technologiesPromise] = useState(() => technologiesFetch());

  return (
    <>
      <Nav />
      <Banner />

      <Suspense
        fallback={
          <div className="flex min-h-[300px] items-center justify-center">
            <h2 className="text-lg font-semibold text-slate-500">Loading...</h2>
          </div>
        }
      >
        <TechnologiesData technologiesPromise={technologiesPromise} />
      </Suspense>

      <Footer />
    </>
  );
}

export default App;
