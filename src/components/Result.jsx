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
      <h2 className="title">Your Result</h2>
      <div className="circle">
        <p className="score">
          {averageScore}
          <span className="score-max">of 100</span>
        </p>
      </div>
      <p className="expression">{scoreAsExpression}</p>
      <p className="recap">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
}
