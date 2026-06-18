import "./About.css";

function About({ at, bt2 }) {
  return (
    <main>
      <div>
        <h4 className="about-text">{at}</h4>
        <p className="big-text-2">{bt2}</p>
      </div>
      <div>
        <h4 className="about-text">Know your runs. In and out.</h4>
        <p className="big-text-2">{bt2}</p>
      </div>
      <div>
        <h4 className="about-text">Know your runs. In and out.</h4>
        <p className="big-text-2">{bt2}</p>
      </div>
    </main>
  );
}

export default About;
