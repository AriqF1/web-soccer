import { useEffect , useState} from "react";
import StandingHero from "../../components/tables/standing-hero";
import StandingTables from "../../components/tables/standing-tables";
import { getStandings } from "../../api/api";
import ( getStandings)

const Tables = () => {
  const [league, setLeague] = useState(null);
  const [standings, setStandings] = useState([]);

  useEffect(() => {
    getStandings().then((res) => {
      setLeague(res.league);
      setStandings(res.groups[0].standings);
    })
  }, [])
 
  return (
    <>
      <StandingHero />
      <StandingTables />
    </>
  );
};

export default Tables;
