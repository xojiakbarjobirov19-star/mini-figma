import "../Section-two/Section-two.css";

function SectionTwo({ nk, brt, sbt2}) {
  return (
    <div>
      <section className="section-2">
        <h2 className="nike">{nk}</h2>
        <p className="bigger-text">{brt}</p>
        <button className="site-btn-2">{sbt2}</button>
      </section>
    </div>
  );
}

export default SectionTwo;
