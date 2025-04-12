import { useState } from "react";
import { Calendar, Clock, MapPin, Star, ChevronRight, Bell } from "lucide-react";

const MatchDay = ({ data, date }) => {
  const [expandedMatch, setExpandedMatch] = useState(null);

  const formatDate = (inputDate) => {
    const date = new Date(inputDate);
    return new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Jakarta",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(date);
  };

  const formatTime = (inputDate) => {
    const date = new Date(inputDate);
    return new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Jakarta",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(date);
  };

  const toggleExpand = (idx) => {
    if (expandedMatch === idx) {
      setExpandedMatch(null);
    } else {
      setExpandedMatch(idx);
    }
  };

  // Function to determine match status
  const getMatchStatus = (matchDate) => {
    const now = new Date();
    const matchTime = new Date(matchDate);
    
    // If match is in the past
    if (matchTime < now) {
      return "completed";
    }
    
    // If match is within 2 hours from now
    const twoHoursFromNow = new Date();
    twoHoursFromNow.setHours(now.getHours() + 2);
    if (matchTime < twoHoursFromNow) {
      return "upcoming";
    }
    
    return "scheduled";
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-8">
      <div className="max-w-5xl mx-auto px-4 pt-4 pb-10">
        {/* Header with date and filtering options */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              {date}
            </h2>
          </div>
        </div>
        
        {/* Premier League branding bar */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-t-lg p-3 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-3">
              <span className="text-blue-700 font-bold text-xs">PL</span>
            </div>
            <span className="text-white font-medium">Premier League</span>
          </div>
        </div>
        
        {/* Match listing */}
        <div className="space-y-3 bg-white dark:bg-gray-800 rounded-b-lg shadow-lg p-4 border border-gray-100 dark:border-gray-700">
          {data && data.map((match, idx) => {
            const matchStatus = getMatchStatus(match.date);
            
            return (
              <div
                key={idx}
                className={`${
                  idx !== data.length - 1 ? "border-b border-gray-100 dark:border-gray-700 pb-3" : ""
                }`}
              >
                <div 
                  className={`rounded-lg p-4 flex flex-col sm:flex-row sm:items-center justify-between cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors
                    ${matchStatus === "upcoming" ? "bg-blue-50 dark:bg-blue-900/20" : ""}
                  `}
                  onClick={() => toggleExpand(idx)}
                >
                  {/* Match time / status */}
                  <div className="text-center sm:text-left sm:w-1/6 flex flex-col items-center sm:items-start">
                    <div className={`text-sm font-medium 
                      ${matchStatus === "completed" ? "text-gray-500 dark:text-gray-400" : ""}
                      ${matchStatus === "upcoming" ? "text-blue-600 dark:text-blue-400 animate-pulse" : ""}
                      ${matchStatus === "scheduled" ? "text-gray-700 dark:text-gray-300" : ""}
                    `}>
                      {matchStatus === "upcoming" && "Starting Soon"}
                      {matchStatus === "completed" && "Completed"}
                      {matchStatus === "scheduled" && formatTime(match.date)}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {matchStatus === "upcoming" && formatTime(match.date)}
                    </div>
                  </div>
                  
                  {/* Teams */}
                  <div className="flex flex-1 items-center justify-between sm:justify-center my-3 sm:my-0">
                    {/* Home team */}
                    <div className="flex flex-col items-center sm:items-end sm:w-2/5 text-right">
                      <div className="flex items-center sm:flex-row-reverse">
                        <img
                          src={match.homeTeam.logo}
                          alt={match.homeTeam.name}
                          className="w-8 h-8 sm:ml-3 sm:mr-0 mr-3"
                        />
                        <span className="text-gray-800 dark:text-white font-medium hidden sm:block">
                          {match.homeTeam.name}
                        </span>
                        <span className="text-gray-800 dark:text-white font-medium sm:hidden">
                          {match.homeTeam.name.split(' ')[0]}
                        </span>
                      </div>
                    </div>
                    
                    {/* Score */}
                    <div className="flex items-center justify-center mx-4 sm:mx-6">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-gray-800 dark:text-white">
                          {matchStatus === "completed" ? Math.floor(Math.random() * 4) : "-"}
                        </span>
                        <span className="text-lg text-gray-400">:</span>
                        <span className="text-xl font-bold text-gray-800 dark:text-white">
                          {matchStatus === "completed" ? Math.floor(Math.random() * 3) : "-"}
                        </span>
                      </div>
                    </div>
                    
                    {/* Away team */}
                    <div className="flex flex-col items-center sm:items-start sm:w-2/5 text-left">
                      <div className="flex items-center">
                        <img
                          src={match.awayTeam.logo}
                          alt={match.awayTeam.name}
                          className="w-8 h-8 sm:mr-3 sm:ml-0 ml-3"
                        />
                        <span className="text-gray-800 dark:text-white font-medium hidden sm:block">
                          {match.awayTeam.name}
                        </span>
                        <span className="text-gray-800 dark:text-white font-medium sm:hidden">
                          {match.awayTeam.name.split(' ')[0]}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Action */}
                  <div className="text-center sm:text-right sm:w-1/6 flex justify-center sm:justify-end">
                    <ChevronRight 
                      className={`w-5 h-5 text-gray-400 transition-transform duration-200 
                      ${expandedMatch === idx ? 'transform rotate-90' : ''}`} 
                    />
                  </div>
                </div>
                
                {/* Expanded match details */}
                {expandedMatch === idx && (
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-4 mt-2 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          {match.homeTeam.name} Stadium
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          {formatDate(match.date)}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <TV className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          {idx % 2 === 0 ? "Sky Sports" : "BT Sport"} 
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between mt-4">
                      <button className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline">
                        <Bell className="w-4 h-4 mr-1" />
                        Remind Me
                      </button>
                      <button className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline">
                        <Star className="w-4 h-4 mr-1" />
                        Add to Calendar
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MatchDay;