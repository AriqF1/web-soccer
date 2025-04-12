import { useState } from "react";
import { Trophy, Medal, ArrowUpDown } from "lucide-react";

const StandingTables = ({league,standings}) => {
  const [sortOrder, setSortOrder] = useState("asc");

  const toggleSortOrder = () => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  }
 
  const sortedStandings = [...(standings || [])].sort((a, b) => {
    return sortOrder === "asc"
      ? a.position - b.position
      : b.position - a.position;
  });
 
  const renderPositionIndicator = (position) => {
    if (position === 1) {
      return <Trophy className="text-yellow-500 inline-block mr-1" size={14} />;
    } else if (position === 2) {
      return <Medal className="text-gray-400 inline-block mr-1" size={14} />;
    } else if (position === 3) {
      return <Medal className="text-amber-600 inline-block mr-1" size={14} />;
    } else {
      return null;
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen bg-gradient-to-b from-green-50 to-green-100 dark:from-gray-900 dark:to-gray-800 pt-6 pb-10">
        {/* Header dengan gaya sepak bola */}
        <div className="bg-green-600 dark:bg-green-800 rounded-t-lg p-4 shadow-lg w-full max-w-6xl">
          <div className="flex justify-between items-center">
            <h1 className="text-xl text-white font-bold flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6 mr-2 fill-white">
                <path d="M177.1 228.6L207.9 320h96.5l29.62-91.38L256 172.1L177.1 228.6zM255.1 0C114.6 0 .0001 114.6 .0001 256S114.6 512 256 512s255.1-114.6 255.1-255.1S397.4 0 255.1 0zM416.6 360.9l-85.4-1.297l-25.15 81.59C290.1 445.5 273.4 448 256 448s-34.09-2.523-50.09-6.859l-25.15-81.59l-85.4 1.297c-18.12-27.66-29.15-60.27-30.88-95.31L137.8 247.1L112.1 168.1c21.16-26.21 49.09-46.61 81.06-58.84L256 164.2l62.04-54.04c31.97 12.23 59.9 32.64 81.06 58.84L374.2 247.1l73.41 18.05C445.8 300.6 434.8 333.3 416.6 360.9z" />
              </svg>
              {league ? `${league.name} - ${league.season}` : ""}
            </h1>
            <button
              onClick={toggleSortOrder}
              type="button" 
              className="flex items-center text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-500 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-700 cursor-pointer"
            >
              <ArrowUpDown size={16} className="mr-1" />
              {sortOrder === "asc" ? "Normal Sort" : "Reverse Sort"}
            </button>
          </div>
        </div>
        
        <div className="flex flex-col w-full max-w-6xl">
          <div className="overflow-x-auto">
            <div className="py-2 align-middle inline-block min-w-full">
              <div className="shadow overflow-hidden rounded-b-lg">
                <table className="min-w-full text-sm text-gray-900 dark:text-white">
                  <thead className="bg-gray-100 dark:bg-gray-700 text-xs uppercase font-medium border-b-2 border-gray-200 dark:border-gray-600">
                    <tr>
                      <th scope="col" className="px-4 py-3 text-center tracking-wider w-12">
                        #
                      </th>
                      <th
                        scope="col"
                        className="px-3 md:px-6 py-3 text-left tracking-wider"
                      >
                        Tim
                      </th>
                      <th
                        scope="col"
                        className="px-3 md:px-6 py-3 text-center tracking-wider"
                        title="Matches Played"
                      >
                        MP
                      </th>
                      <th
                        scope="col"
                        className="px-3 md:px-6 py-3 text-center tracking-wider"
                        title="Wins"
                      >
                        W
                      </th>
                      <th
                        scope="col"
                        className="px-3 md:px-6 py-3 text-center tracking-wider"
                        title="Draws"
                      >
                        D
                      </th>
                      <th
                        scope="col"
                        className="px-3 md:px-6 py-3 text-center tracking-wider"
                        title="Loses"
                      >
                        L
                      </th>
                      <th
                        scope="col"
                        className="px-3 md:px-6 py-3 text-center tracking-wider"
                        title="Goals For"
                      >
                        GF
                      </th>
                      <th
                        scope="col"
                        className="px-3 md:px-6 py-3 text-center tracking-wider hidden md:table-cell"
                        title="Goals Against"
                      >
                        GA
                      </th>
                      <th
                        scope="col"
                        className="px-3 md:px-6 py-3 text-center tracking-wider hidden md:table-cell"
                        title="Goal Difference"
                      >
                        GD
                      </th>
                      <th
                        scope="col"
                        className="px-3 md:px-6 py-3 text-center tracking-wider font-bold"
                      >
                        Pts
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-700">
                    {standings &&
                      sortedStandings.map((item, index) => (
                        <tr
                          key={index}
                          className={`hover:bg-green-50 dark:hover:bg-gray-600 transition-colors duration-150 ${
                            item.position % 2 === 1
                              ? "bg-gray-100 dark:bg-gray-800 bg-opacity-60"
                              : ""
                          }`}
                        >
                          <td className={`px-4 text-center ${item.position <= 4 ? 'border-l-4 border-l-blue-600' : item.position >= (standings.length - 2) ? 'border-l-4 border-l-red-600' : ''}`}>
                            <div className="flex items-center justify-center">
                              {renderPositionIndicator(item.position)}
                              <span className="font-medium">{item.position}</span>
                            </div>
                          </td>
                          <td className="flex items-center px-3 md:px-6 py-4 whitespace-nowrap">
                            <div className="flex-shrink-0 h-7 w-7 bg-gray-50 dark:bg-gray-600 rounded-full flex items-center justify-center overflow-hidden">
                              <img
                                className="w-5 h-5 object-contain"
                                src={item.team.logo}
                                alt=""
                              />
                            </div>
                            <span className="ml-2 font-medium hidden md:block">
                              {item.team.name}
                            </span>
                            <span className="ml-2 font-medium md:hidden text-xs">
                              {item.team.name?.substring(0, 3).toUpperCase()}
                            </span>
                          </td>
                          <td className="px-3 md:px-6 py-4 whitespace-nowrap text-center">
                            {item.total.games}
                          </td>
                          <td className="px-3 md:px-6 py-4 whitespace-nowrap text-center font-medium text-green-600 dark:text-green-400">
                            {item.total.wins}
                          </td>
                          <td className="px-3 md:px-6 py-4 whitespace-nowrap text-center text-gray-500 dark:text-gray-400">
                            {item.total.draws}
                          </td>
                          <td className="px-3 md:px-6 py-4 whitespace-nowrap text-center font-medium text-red-500">
                            {item.total.loses}
                          </td>
                          <td className="px-3 md:px-6 py-4 whitespace-nowrap text-center">
                            {item.total.scoredGoals}
                          </td>
                          <td className="px-3 md:px-6 py-4 whitespace-nowrap text-center hidden md:table-cell">
                            {item.total.receivedGoals}
                          </td>
                          <td className="px-3 md:px-6 py-4 whitespace-nowrap text-center hidden md:table-cell">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              item.total.scoredGoals - item.total.receivedGoals > 0 
                                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                                : item.total.scoredGoals - item.total.receivedGoals < 0 
                                  ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' 
                                  : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                            }`}>
                              {item.total.scoredGoals - item.total.receivedGoals > 0 ? '+' : ''}
                              {item.total.scoredGoals - item.total.receivedGoals}
                            </span>
                          </td>
                          <td className="px-3 md:px-6 py-4 whitespace-nowrap text-center">
                            <span className="bg-gray-800 dark:bg-gray-900 text-white font-bold py-1 px-3 rounded-full">
                              {item.points}
                            </span>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        
        {/* Legenda */}
        <div className="p-3 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-md text-xs text-gray-600 dark:text-gray-300 w-full max-w-6xl">
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-600 mr-1"></div>
              <span>Champions League</span>
            </div>
            <div className="flex items-center">
              <Trophy className="text-yellow-500 mr-1" size={14} />
              <span>Winner</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-red-600 mr-1"></div>
              <span>Degradation</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StandingTables;
