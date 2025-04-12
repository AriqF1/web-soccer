import { Trophy, Table, Play } from "lucide-react";
const StandingHero = () => {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-900 to-purple-900 text-white">
      <div className="py-12 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Left content */}
          <div className="max-w-screen-md">
            <div className="flex items-center gap-2 mb-4 bg-blue-800 rounded-full px-4 py-2 w-fit">
              <Trophy size={16} className="text-yellow-400" />
              <span className="text-sm font-semibold text-yellow-400">Premier League 2024/25</span>
            </div>
            
            <h2 className="mb-6 text-4xl md:text-5xl tracking-tight font-extrabold text-white">
              Live Premier League Standings
            </h2>
            
            <p className="mb-8 text-lg text-blue-100">
              Track your favorite club's performance in real-time. Stay updated with the latest standings, 
              points, goal differences, and match results throughout the season.
            </p>
            
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <a
                href="https://www.youtube.com/c/PremierLeague/videos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-center text-white border border-blue-300 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 transition-all duration-300"
              >
                <Play className="mr-2 -ml-1 w-5 h-5 text-red-500" fill="currentColor" />
                Watch Highlights
              </a>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <a 
                href="https://www.youtube.com/watch?v=GXN--Ef6Qkw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-blue-200 hover:text-white hover:underline transition-colors"
              >
                • Latest Match Day Highlights
              </a>
              <a 
                href="https://www.youtube.com/watch?v=qXhQYS8qkZ0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-blue-200 hover:text-white hover:underline transition-colors"
              >
                • Goals of the Week
              </a>
              <a 
                href="https://www.youtube.com/watch?v=ZTdCF8GkD7M" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-blue-200 hover:text-white hover:underline transition-colors"
              >
                • Top Player Performances
              </a>
            </div>
          </div>
          
          {/* Right side - Featured clubs */}
        </div>
      </div>
    </section>
    </>
  );
};

export default StandingHero;
