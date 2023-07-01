import "./Result.scss";
import { names } from "../data/names";

export default function Result({ averageScore }) {
  const getExpression = () => {
    if (averageScore > 90) {
      return "Excellent";
    } else if (averageScore >= 80) {
      return "Very good";
    } else if (averageScore >= 70) {
      return "Great";
    } else if (averageScore >= 60) {
      return "Fair";
    } else {
      return "Average";
    }
  };

  const getPercent = () => {
    return Math.round(Math.random() * -7) + averageScore;
  };

  const getName = () => {
    const randomIndex = Math.round(Math.random() * names.length);
    return names[randomIndex];
  };

  const scoreAsExpression = getExpression();

  const comparedPercent = getPercent();

  const randomName = getName();

  return (
    <div className="result">
      <h2 className="result__title">{randomName}'s Result</h2>
      <div className="result__circle">
        <p className="result__score">{averageScore}</p>
        <p className="result__score-max">of 100</p>
      </div>
      <p className="result__expression">{scoreAsExpression}</p>
      <p className="result__recap">
        {randomName} scored higher than {comparedPercent}% of the people who
        have taken these tests.
      </p>
    </div>
  );
}
