import { motion } from "framer-motion";

const FixturesHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-purple-800 via-indigo-900 to-blue-900 text-white overflow-hidden">
    {/* Background logo PL sebagai watermark */}
    <div
      className="absolute inset-0 opacity-10 bg-center bg-no-repeat bg-contain"
      style={{
        backgroundImage: "url('/pl-logo-white.png')", // letakkan logo di public/
      }}
    ></div>

    <div className="relative z-10 py-20 px-4 mx-auto max-w-screen-xl sm:py-28 lg:px-8">
      <div className="max-w-3xl">
        <h2 className="mb-6 text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight text-white drop-shadow-md">
          Stay Ahead with Weekly Fixtures
        </h2>
        <p className="mb-10 text-lg sm:text-xl font-light text-gray-200">
          Follow your favorite Premier League club throughout the season. From
          intense title races to dramatic relegation battles, stay updated
          with every scheduled match. Know when, where, and who your team plays
          — all in one place.
        </p>
      </div>
    </div>
  </section>
  );
};

export default FixturesHero;
