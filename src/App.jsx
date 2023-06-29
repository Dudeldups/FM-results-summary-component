import { useEffect, useState } from "react";
import data from "./data/data.json";

export default function App() {
  const [summary, setSummary] = useState(data);
  const [averageScore, setAverageScore] = useState(0);

  useEffect(() => {
    const average = summary.reduce((total, skill) => {
      return total + skill.score;
    });
    setAverageScore(average);
  }, summary);

  const test = data.map(item => {
    return item.category;
  });

  return (
    <div>
      <div>{test}</div>
      <div>{averageScore}</div>
    </div>
  );
}
