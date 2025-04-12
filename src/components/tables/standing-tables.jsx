const StandingTables = ({league,standings}) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen bg-white dark:bg-gray-900 pt-3 pb-10">
        <h1 className="text-lg text-gray-900 dark:text-white font-medium">
            {league ? `${league.name} - ${league.season}` : ""}
        </h1>
        <div className="flex flex-col mt-6">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden rounded-lg">
                <table className="min-w-full text-sm text-gray-900 dark:text-white">
                  <thead className="bg-white dark:bg-gray-700 text-xs uppercase font-medium">
                    <tr>
                      <th></th>
                      <th
                        scope="col"
                        className="px-3 md:px-6 py-3 text-left tracking-wider"
                      >
                        Club
                      </th>
                      <th
                        scope="col"
                        className="px-3 md:px-6 py-3 text-left tracking-wider"
                      >
                        MP
                      </th>
                      <th
                        scope="col"
                        className="px-3 md:px-6 py-3 text-left tracking-wider"
                      >
                        W
                      </th>
                      <th
                        scope="col"
                        className="px-3 md:px-6 py-3 text-left tracking-wider"
                      >
                        D
                      </th>
                      <th
                        scope="col"
                        className="px-3 md:px-6 py-3 text-left tracking-wider"
                      >
                        L
                      </th>
                      <th
                        scope="col"
                        className="px-3 md:px-6 py-3 text-left tracking-wider"
                      >
                        GF
                      </th>
                      <th
                        scope="col"
                        className="px-3 md:px-6 py-3 text-left tracking-wider hidden md:table-cell"
                      >
                        GA
                      </th>
                      <th
                        scope="col"
                        className="px-3 md:px-6 py-3 text-left tracking-wider hidden md:table-cell"
                      >
                        GD
                      </th>
                      <th
                        scope="col"
                        className="px-3 md:px-6 py-3 text-left tracking-wider"
                      >
                        Pts
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-700">
                   {standings &&
                     standings.map((item, index) => (
                       <tr
                         key={index}
                         className={
                           item.position % 2 === 1
                             ? "bg-gray-200 dark:bg-black bg-opacity-20"
                             : ""
                         }
                       >
                      <td className="pl-4"> {item.position} </td>
                      <td className="flex px-3 md:px-6 py-4 whitespace-nowrap">
                        <img
                          className="w-5"
                          src="{item.team.logo}"
                          alt=""
                        />
                        <span className="ml-2 font-medium hidden md:block">
                          {item.team.name}
                        </span>
                      </td>
                      <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                        {item.total.games}
                      </td>
                      <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                        {item.total.wins} 
                      </td>
                      <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                        {item.total.draws}
                      </td>
                      <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                        {item.total.loses}
                      </td>
                      <td className="px-3 md:px-6 py-4 whitespace-nowrap hidden md:table-cell">
                        {item.total.scoredGoals}
                      </td>
                      <td className="px-3 md:px-6 py-4 whitespace-nowrap hidden md:table-cell">
                        {item.total.receivedGoals}
                      </td>
                      <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                        {item.total.scoredGoals - item.total.reciviedGoals}
                      </td>
                      <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                        {item.points}
                      </td>
                      <td className="px-3 md:px-6 py-4 whitespace-nowrap hidden md:flex">
                        <svg
                          className="w-4 fill-current text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <svg
                          className="w-4 fill-current text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <svg
                          className="w-4 fill-current text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <svg
                          className="w-4 fill-current text-gray-900 dark:text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <svg
                          className="w-4 fill-current text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </td>
                    </tr>
                     ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StandingTables;
