import React from "react";
import CompletedWokout from "./components/CompletedWokout";
import CompletedWorkoutModal from "./components/CompletedWorkoutModal";


//<button className="BackButton" onClick="window.location.href='/home">{"<"}</button>

function HistoryPage() {
  return (
    <div className="HistoryPage">

      

      <h2>Completed Workouts:</h2>
      <div className="CompletedWokoutsBox">
        <div className="WorkoutBoxRow">
          <CompletedWokout/>
          <CompletedWorkoutModal/>
        </div>
      </div>
    </div>
  );
}

export default HistoryPage;
