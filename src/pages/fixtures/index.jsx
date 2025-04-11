import FixturesHero from "../../components/fixtures/fixtures-hero";
import MatchSchedule from "../../components/fixtures/match-date";
import MatchDay from "../../components/fixtures/match-day";

const exampleFixtures = [
  {
    date: "Saturday, April 6, 2025",
    matches: [
      {
        home: {
          name: "Manchester City",
          logo: "https://ssl.gstatic.com/onebox/media/sports/logos/UDYY4FSlty6fXFBzvFfcyw_48x48.png",
        },
        away: {
          name: "Liverpool",
          logo: "https://ssl.gstatic.com/onebox/media/sports/logos/UDYY4FSlty6fXFBzvFfcyw_48x48.png",
        },
        time: "18:30",
      },
      {
        home: {
          name: "Chelsea",
          logo: "https://ssl.gstatic.com/onebox/media/sports/logos/UDYY4FSlty6fXFBzvFfcyw_48x48.png",
        },
        away: {
          name: "Arsenal",
          logo: "https://ssl.gstatic.com/onebox/media/sports/logos/UDYY4FSlty6fXFBzvFfcyw_48x48.png",
        },
        time: "21:00",
      },
    ],
  },
];

const Fixtures = () => {
  return (
    <>
      <FixturesHero />

      <MatchSchedule />
      {exampleFixtures.map((fixture, i) => (
        <MatchDay key={i} date={fixture.date} matches={fixture.matches} />
      ))}
    </>
  );
};

export default Fixtures;
