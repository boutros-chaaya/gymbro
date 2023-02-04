import React from "react";
import { useState } from "react";
import { CreateNewWorkout } from "./NewWorkout";
import {
  CreateNewWorkoutComponent,
  WorkoutComponent,
} from "./WorkoutComponents";

function WorkoutBox() {
  const [value, setValue] = useState(0); // integer state
  const [name, SetName] = useState("Push");
  const [desc, SetDesc] = useState("Medium Dificulity");
  const [exersices, SetExersices] = useState([
    {
      name: "Bench",
      weight: 5,
      reps: 10,
      sets: 3,
      rest: 60,
    },
  ]);

  const [AllWorkouts, SetAllWorkouts] = useState([
    { name: name, desc: desc, exersices: exersices },
  ]);

  const forceUpdate = () => {
    setValue(value + 1);
  };

  const updateWorkoutData = (exercises) => {
    let currentData = AllWorkouts;
    currentData.push({ name: name, desc: desc, exersices: exercises });
    SetAllWorkouts(currentData);
    console.log(AllWorkouts);
    forceUpdate();
  };

  const removeWorkout = (workout) => {
    let currentData = AllWorkouts;

    if (AllWorkouts.length > 0) {
      currentData.splice(AllWorkouts.indexOf(workout), 1);
      SetAllWorkouts(currentData);
    }
  };

  return (
    <div className="WorkoutBox">
      <CreateNewWorkoutComponent />
      <CreateNewWorkout
        addData={updateWorkoutData}
        SetName={SetName}
        SetDesc={SetDesc}
      />
      <div className="WorkoutsToDo">
        <WorkoutComponent data={AllWorkouts} />
      </div>
    </div>
  );
}

export default WorkoutBox;
