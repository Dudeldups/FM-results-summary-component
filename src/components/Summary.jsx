import "./Summary.scss";

export default function Summary({ skillSummary, handleClick }) {
  const skills = skillSummary.map(skill => {
    let color;
    switch (skill.category) {
      case "Reaction":
        color = "red";
        break;
      case "Memory":
        color = "yellow";
        break;
      case "Verbal":
        color = "green";
        break;
      case "Visual":
        color = "blue";
        break;
      default:
        break;
    }

    return (
      <article className={`summary__skill ${color}`} key={skill.category}>
        <img src={skill.icon} alt="" />
        <p className="summary__category">{skill.category}</p>
        <p className="summary__score">
          <span className="summary__score-achieved">{skill.score}</span> / 100
        </p>
      </article>
    );
  });

  return (
    <div className="summary">
      <h2 className="summary__title">Summary</h2>
      <div className="summary__skills">{skills}</div>
      <button className="summary__button" onClick={handleClick}>
        Continue
      </button>
    </div>
  );
}
