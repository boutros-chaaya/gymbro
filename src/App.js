import "./App.css";
import HomePage from "./components/home_page/HomePage";
import WorkoutPage from "./components/workout_page/WorkoutPage";
import HistoryPage from "./components/history_page/HistoryPage";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/workout" element={<WorkoutPage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
    </div>
  );
}

export default App;
