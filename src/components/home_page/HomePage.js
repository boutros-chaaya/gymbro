import React from "react";
import Header from "./components/Header.js"
import WelcomeText from "./components/WelcomeText.js"
import HomeButton from "./components/HomeButton.js";

function HomePage() {
  return (
    <div>
      <div>
        <Header />
        <WelcomeText />
      </div>
      <div className="HomePageBox">
        <HomeButton btn_name="Workout" link="/workout" />
        <HomeButton btn_name="History" link="/history" />
      </div>
    </div>
  );
}

export default HomePage;
