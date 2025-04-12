import { useEffect, useState } from "react";
import FixturesHero from "../../components/fixtures/fixtures-hero";
import MatchSchedule from "../../components/fixtures/match-date";
import MatchDay from "../../components/fixtures/match-day";
import { getMatch } from "../../api/api";


const Fixtures = () => {
 const today = new Date().toISOString().split("T")[0]; // format: YYYY-MM-DD
 const [selectedDate, setSelectedDate] = useState(today);


 const [fixtures, setFixtures] = useState([]);


 useEffect(() => {
   getMatch(selectedDate).then((res) => {
     setFixtures(res.data);
   });
 }, [selectedDate]);


 return (
   <>
     <FixturesHero />


     <MatchSchedule
       selectedDate={selectedDate}
       setSelectedDate={setSelectedDate}
     />
     {fixtures && fixtures.length > 0 ? (
       <MatchDay data={fixtures} date={selectedDate} />
     ) : (
       <div className="bg-white dark:bg-gray-900">
         <div className="max-w-4xl mx-auto px-4 pt-6 pb-6">
           <p className="text-center text-black dark:text-white text-2xl">
             No Match
           </p>
         </div>
       </div>
     )}
   </>
 );
};


export default Fixtures;
