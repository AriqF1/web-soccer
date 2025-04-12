import { Calendar, Play, Trophy, ArrowRight, Bell, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  const goToFixtures = () => {
    navigate("/fixtures");
  };
  const handleWatchHighlights = () => {
    window.open("https://youtu.be/mPlidKw4svs", "_blank");
  };
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: "url('https://via.placeholder.com/100')",
          backgroundSize: "150px",
          backgroundRepeat: "repeat",
          filter: "blur(1px)"
        }}></div>
      </div>
      
      {/* Main content */}
      <div className="relative py-12 px-4 mx-auto max-w-screen-xl text-center lg:py-20 lg:px-12 z-10">
        {/* Alert banner */}
        <a
          href="#"
          className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-8 text-sm text-white bg-blue-700/80 backdrop-blur-sm rounded-full hover:bg-blue-600 transition-all duration-300 border border-blue-600"
          role="alert"
        >
          <span className="text-xs bg-red-600 rounded-full text-white px-4 py-1.5 mr-3 animate-pulse">
            LIVE
          </span>{" "}
          <span className="text-sm font-medium">
            2024/25 Premier League season is underway!
          </span>
          <ArrowRight className="ml-2 w-5 h-5" />
        </a>
        
        {/* Main heading */}
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          Experience the Thrill of <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Premier League Football
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="mb-8 text-lg font-normal text-blue-100 lg:text-xl sm:px-16 xl:px-48">
          Get live scores, match highlights, team stats, and the latest news
          from your favorite Premier League clubs – all in one place.
        </p>
        
        {/* CTAs */}
        <div className="flex flex-col mb-8 lg:mb-12 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <button
            onClick={goToFixtures}
            className="cursor-pointer inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 shadow-lg shadow-blue-900/30 transition-all duration-300"
          >
            <Calendar className="mr-2 -ml-1 w-5 h-5" />
            View Fixtures
          </button>
          <a
            href="https://youtu.be/mPlidKw4svs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 shadow-lg shadow-blue-900/30 transition-all duration-300"
          >
            <Play className="mr-2 -ml-1 w-5 h-5" />
            Watch Highlights
          </a>
        </div>
        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 text-center">
          <div className="bg-blue-800/30 backdrop-blur-sm p-4 rounded-lg">
            <div className="text-3xl font-bold text-white mb-1">20</div>
            <div className="text-sm text-blue-200">Teams</div>
          </div>
          <div className="bg-blue-800/30 backdrop-blur-sm p-4 rounded-lg">
            <div className="text-3xl font-bold text-white mb-1">380</div>
            <div className="text-sm text-blue-200">Matches</div>
          </div>
          <div className="bg-blue-800/30 backdrop-blur-sm p-4 rounded-lg">
            <div className="text-3xl font-bold text-white mb-1">1000+</div>
            <div className="text-sm text-blue-200">Goals Expected</div>
          </div>
          <div className="bg-blue-800/30 backdrop-blur-sm p-4 rounded-lg">
            <div className="text-3xl font-bold text-white mb-1">£5B+</div>
            <div className="text-sm text-blue-200">Market Value</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;