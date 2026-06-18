// import "./Footer.css";

// function Footer(speed) {
//   return (
//     <div>
//       <h2 className='footer-text'>Take control of your <br /> health.</h2>
//       <p className='footer-big-text'>
//         With built-in GPS and altimeter, Apple Watch Nike+ has all the features
//         to help you take your run to the next level. You can even pair your
//         watch wirelessly with compatible gym equipment. And it’s swimproof, so
//         you can take a post-run dip in the pool.
//       </p>
//       <button className='footer-btn'>
//         EXPLORE FEATURES
//       </button>
//       <img className='speed' src={speed} alt="" />
//     </div>
//   );
// }

// export default Footer;





import "./Footer.css";

function Footer({ spd, ft, fbt, btn }) {
  return (
    <div className="footer-container" style={{ backgroundImage: `url(${spd})` }}>
      <div className="footer-content">
        <h2 className='footer-text'>{ft}</h2>
        <p className='footer-big-text'>{fbt}</p>
        <button className='footer-btn'>{btn}</button>
      </div>
    </div>
  );
}

export default Footer;