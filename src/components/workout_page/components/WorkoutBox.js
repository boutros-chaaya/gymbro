import React from "react";
import { useState } from "react";
import EditWorkout from "./StartWorkout";
import { CreateNewWorkout } from "./NewWorkout";
import {
  CreateNewWorkoutComponent,
  OpenEditWorkout,
  WorkoutComponent,
  OpenWorkouts
} from "./WorkoutComponents";

function WorkoutBox() {
  const [value, setValue] = useState(0); // integer state
  const [name, SetName] = useState("Push");
  const [desc, SetDesc] = useState("Medium dificulity");
  const [exercises, Setexercises] = useState([
    {
      name: "Bench",
      weight: 5,
      reps: 10,
      sets: 3,
      rest: 60,
    },
  ]);
  const [workoutId, setWorkoutID] = useState(0);

  const [workoutInfo, setWorkoutInfo] = useState({
    id: workoutId,
    name: name,
    desc: desc,
    exercises: exercises,
  });
  const [AllWorkouts, SetAllWorkouts] = useState([workoutInfo]);

  const forceUpdate = () => {
    setValue(value + 1);
  };

  const updateexerciseData = (exercise) => {
    let currentData = workoutInfo[exercises];
    currentData.push(exercise);
    setWorkoutInfo({
      id: workoutId,
      name: name,
      desc: desc,
      exercises: currentData,
    });
  };

  const removeExercise = () => {
    let currentData = workoutInfo[exercises];

    if (workoutInfo[exercises].length > 1) {
      currentData.splice(workoutInfo[exercises].length - 1, 1);
      setWorkoutInfo({
        id: workoutId,
        name: name,
        desc: desc,
        exercises: currentData,
      });
    }
  };


  const updateWorkoutData = (exercises) => {
    let currentData = AllWorkouts;
    SetName(name);
    SetDesc(desc);
    setWorkoutID(workoutId + 1);
    setWorkoutInfo({
      id: workoutId,
      name: name,
      desc: desc,
      exercises: exercises,
    });
    currentData.push(workoutInfo);
    SetAllWorkouts(currentData);
    console.log(AllWorkouts);
    forceUpdate();
  };



  const removeWorkout = () => {
    let currentData = AllWorkouts;
    console.log(currentData);
    if (AllWorkouts.length > 0) {
      currentData.splice(currentData["id"], 1);
      SetAllWorkouts(currentData);
      forceUpdate();
    }
  };
  const editWorkout = () => {
    let currentData = AllWorkouts;
    console.log(currentData["id"]);
    OpenWorkouts();
  };

  return (
    <div className="WorkoutBox">
      <CreateNewWorkoutComponent />
      <CreateNewWorkout
        addData={updateWorkoutData}
        SetName={SetName}
        SetDesc={SetDesc}
        data = {exercises}
        setData = {setWorkoutInfo}
      />

      <div className="WorkoutsToDo">
        <WorkoutComponent
          data={AllWorkouts}
          modifyWorkout={editWorkout}
          deleteWorkout={removeWorkout}
        />
      </div>

    </div>
  );
}

export default WorkoutBox;
