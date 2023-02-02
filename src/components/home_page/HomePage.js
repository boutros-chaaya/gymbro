import React from "react";
import WelcomeText from "./components/WelcomeText.js"
import BlueHomeButton from "./components/HomeButton.js";
import WhiteHomeButton from "./components/WhiteHomeButton.js";

function HomePage() {
  return (
    <div>
      <div>
        <WelcomeText />
      </div>
      <div className="HomePageBox">
        <BlueHomeButton btn_name="Workout" link="/workout" />
        <WhiteHomeButton btn_name="History" link="/history" />
      </div>
    </div>
  );
}

export default HomePage;
