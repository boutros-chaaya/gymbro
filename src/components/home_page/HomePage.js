import React from "react";
import WelcomeText from "./components/WelcomeText.js"
import BlueHomeButton from "./components/HomeButton.js";
import WhiteHomeButton from "./components/WhiteHomeButton.js";


//<img src="images/homepagebg.jpg" alt="bg_img" width="1920" height="1080"></img>

function HomePage() {
  return (
    <div className="HomePage">
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
