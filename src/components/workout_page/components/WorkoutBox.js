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
  const [desc, SetDesc] = useState("Medium dificulity");
  const [exersices, SetExersices] = useState([
    {
      name: "Bench",
      weight: 5,
      reps: 10,
      sets: 3,
      rest: 60,
    },
  ]);
  const [workoutId, setWorkoutID] = useState(0)

  const [AllWorkouts, SetAllWorkouts] = useState([
    { id:workoutId, name: "Workout 1", desc: "Core strength", exersices: exersices },
  ]);

  const forceUpdate = () => {
    setValue(value + 1);
  };

  const updateWorkoutData = (exercises) => {
    let currentData = AllWorkouts;
    SetName(name)
    SetDesc(desc)
    setWorkoutID(workoutId + 1)
    currentData.push({ id:workoutId, name: name, desc: desc, exersices: exercises });
    SetAllWorkouts(currentData);
    console.log(AllWorkouts);
    forceUpdate();
  };

  const removeWorkout = () => {
    let currentData = AllWorkouts;
    console.log(currentData)
    if (AllWorkouts.length > 0) {
      currentData.splice(currentData['id'], 1);
      SetAllWorkouts(currentData);
      forceUpdate()
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
        <WorkoutComponent data={AllWorkouts} deleteWorkout={removeWorkout} />
      </div>
    </div>
  );
}

export default WorkoutBox;
