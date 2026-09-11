import BannerStack from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="grid min-h-[500px] items-center gap-10 py-16 md:grid-cols-2">
        {/* Left Side*/}
        <div>
          <h1 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl">
            Build Your Ideal
            <br />
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-500 md:text-lg">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button className="rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:scale-105">
              Explore Technologies
            </button>

            <button className="rounded-lg border border-gray-200 bg-white px-7 py-3 text-sm font-medium text-slate-600 transition hover:border-pink-300 hover:text-pink-600">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side*/}
        <div className="flex justify-center">
          <img
            src={BannerStack}
            alt="Development Stack"
            className="w-[280px] md:w-[390px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
