import { useEffect, useState } from "react";
import data from "./data/data.json";
import Result from "./components/Result";
import Summary from "./components/Summary";

export default function App() {
  const [skillSummary, setSkillSummary] = useState(data);
  const [averageScore, setAverageScore] = useState(0);

  useEffect(() => {
    setAverageScore(() => {
      const sumOfScores = skillSummary.reduce(
        (sum, skill) => sum + skill.score,
        0
      );
      return Math.round(sumOfScores / skillSummary.length);
    });
  }, skillSummary);

  const handleClick = () => {
    setSkillSummary(oldData =>
      oldData.map(skill => ({
        ...skill,
        score: Math.round(Math.random() * 50 + 50),
      }))
    );
  };

  return (
    <>
      <header>
        <h1 className="sr-only">
          This is a component from a Frontend Mentor challenge
        </h1>
      </header>
      <main className="card">
        <Result averageScore={averageScore} />
        <Summary skillSummary={skillSummary} handleClick={handleClick} />
      </main>
    </>
  );
}
