import { useEffect, useState } from "react";
import data from "./data/data.json";
import Result from "./components/Result";
import Summary from "./components/Summary";

export default function App() {
  const [skillSummary, setSkillSummary] = useState(data);
  const [averageScore, setAverageScore] = useState(0);

  useEffect(() => {
    setAverageScore(() => {
      const sumOfScores = data.reduce((sum, skill) => sum + skill.score, 0);
      return Math.round(sumOfScores / skillSummary.length);
    });
  }, skillSummary);

  const test = data.map(item => {
    return item.category;
  });

  return (
    <div className="card">
      <Result averageScore={averageScore} />
      <Summary skillSummary={skillSummary} />
    </div>
  );
}
