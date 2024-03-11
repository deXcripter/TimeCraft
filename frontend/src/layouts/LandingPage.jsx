import Benefits from "../components/Benefits";
import Brand from "../components/Brand";
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
      </main>
    </div>
  );
}

export default LandingPage;
