const MatchDay = ({ date, matches }) => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 pt-6 pb-10">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
          {date}
        </h2>
        <div className="space-y-4">
          {matches.map((match, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 flex flex-col sm:flex-row sm:items-center justify-between"
            >
              {/* Left side - Team 1 */}
              <div className="flex items-center space-x-2 sm:w-1/3">
                <img
                  src={match.home.logo}
                  alt={match.home.name}
                  className="w-6 h-6"
                />
                <span className="text-gray-800 dark:text-white font-medium">
                  {match.home.name}
                </span>
              </div>

              {/* Center - Time */}
              <div className="my-2 sm:my-0 text-center sm:w-1/3 text-sm text-gray-500 dark:text-gray-300">
                {match.time}
              </div>

              {/* Right side - Team 2 */}
              <div className="flex items-center space-x-2 justify-end sm:w-1/3">
                <span className="text-gray-800 dark:text-white font-medium">
                  {match.away.name}
                </span>
                <img
                  src={match.away.logo}
                  alt={match.away.name}
                  className="w-6 h-6"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MatchDay;
