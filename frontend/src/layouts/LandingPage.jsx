import Benefits from "../components/Benefits";
import Brand from "../components/Brand";
import Extra from "../components/Extra";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Intro from "../components/Intro";

function LandingPage() {
  return (
    <div>
      <Header />
      <main>
        <Intro />
        <Brand />
        <Benefits />
        <Extra />
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;
