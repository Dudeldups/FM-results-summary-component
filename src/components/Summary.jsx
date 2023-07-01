import "./Summary.scss";

export default function Summary({ skillSummary }) {
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
      <article className={"skill " + color} key={skill.category}>
        <img src={skill.icon} alt="" />
        <p className="category">{skill.category}</p>
        <p className="score">
          {skill.score} <span className="score-max">/ 100</span>
        </p>
      </article>
    );
  });

  return (
    <div className="summary">
      <h2 className="title">Summary</h2>
      <div className="skills">{skills}</div>
      <button>Continue</button>
    </div>
  );
}
