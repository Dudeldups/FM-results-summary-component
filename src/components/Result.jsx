import "./Result.scss";

export default function Result({ averageScore }) {
  const getExpression = () => {
    if (averageScore >= 95) {
      return "Excellent";
    } else if (averageScore >= 85) {
      return "Very good";
    } else if (averageScore >= 75) {
      return "Great";
    } else if (averageScore >= 65) {
      return "Fair";
    } else {
      return "Average";
    }
  };

  const scoreAsExpression = getExpression();

  return (
    <div className="result">
      <h2 className="result__title">Your Result</h2>
      <div className="result__circle">
        <p className="result__score">{averageScore}</p>
        <p className="result__score-max">of 100</p>
      </div>
      <p className="result__expression">{scoreAsExpression}</p>
      <p className="result__recap">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
}
