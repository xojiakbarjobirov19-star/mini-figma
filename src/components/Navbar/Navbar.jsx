import "./Navbar.css";

function Navbar({l1,l2,l3,l4,apl,wtch}) {
  return (
    <header>
     <img className='apl' src={apl} alt="" />
    <nav className='nav'>
     
      <ul className='ul'>
        <li>{l1}</li> 
        <li>{l2}</li>
        <li>{l3}</li>
        <li>{l4}</li>
      </ul>

      <p>How can we help you?</p>

    </nav>
    <img className='wtch' src={wtch} alt="" />
    </header>

  );
}

export default Navbar;