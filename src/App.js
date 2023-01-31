import "./App.css";
import Header from "./components/page_1/Header.js";
import WelcomeText from "./components/page_1/Welcome.js";
import HomeButton from "./components/page_1/HomeButton.js";

// main components
function HomePage() {
  return (
    <div className="HomePageBox">
      <HomeButton btn_name="Workout" />
      <HomeButton btn_name="History" />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <WelcomeText />
      <HomePage />
    </div>
  );
}

export default App;
