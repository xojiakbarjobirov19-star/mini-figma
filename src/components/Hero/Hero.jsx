import "./Hero.css";

function Hero({bt,tt, sb}) {
  return (
    <div>
      <section className='site-section'>
      <h1 className="big-text">{bt}</h1>
      <p className='text'>
     {tt}
      </p>
      <button className='site-btn'>
        {sb}
      </button>
      </section>
    </div>
  );
}

export default Hero;
