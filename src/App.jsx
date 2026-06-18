import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About.jsx";
import logo from "./assets/Vector (1).png";
import logo2 from "./assets/intro-bg.png";
import SectionTwo from "./components/section-two/section-two.jsx";
import Footer from "./components/Footer/Footer.jsx";
import logo3 from "./assets/runners 1.png";

function App() {
  return (
    <div className="container">
      <Navbar
        apl={logo}
        l1="Home"
        l2="About"
        l3="Offers"
        l4="Services"
        wtch={logo2}
      />
      <Hero
      bt="Freedom calls."
      tt="Answer a call from your surfboard. Ask Siri to send a message.  Stream
        your favorite songs on your run. And do it all while leaving your phone
        behind. Introducing Apple Watch Series 3  with cellular. Now you have the
        freedom to go with just your watch." 
        sb="WATCh THE KEYNOTE"/>
      <About
        at=" Know your runs. In and out."
        bt2="Train smarter with more in-run stats. Want to compare a run to your last five? Just swipe left. Mark splits by selecting pause or using gestures, like tapping the screen or double-clicking the side button. And get a full post-run report, including elevation."
      />
      <SectionTwo
        nk="Nike Sport Band. Light. Flexible. Breathable."
        brt="        Made from the same durable, lightweight fluoroelastomer as the original
        Apple Watch Sport Band, the Nike Sport Band reduces weight and improves
        ventilation via row after row of compression-molded perforations."
      sbt2='BUY NOW '/>
      <Footer
        spd={logo3}
        ft="Take control of your health."
        fbt="With built-in GPS and altimeter, Apple Watch Nike+ has all the features to help you take your run to the next level. You can even pair your watch wirelessly with compatible gym equipment. And it's swimproof, so you can take a post-run dip in the pool."
        btn="EXPLORE FEATURES"
      />
    </div>
  );
}

export default App;
