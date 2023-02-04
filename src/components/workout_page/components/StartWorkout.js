import React from "react";
import { useState } from "react";
import NewExercise from "./NewExercise";
import {
  CloseButton,
  CloseWorkouts,
  Categories,
  AddButton,
  SaveButton,
  NewWorkoutInput,
} from "./ButtonsFunctionsNewWorkout";

function EditWorkout(props) {
  let ExercisesNames = ["Bench", "Squats", "Deadlift"];
  let idx = 0;

  const [workoutName, setWorkoutName] = useState("Workout");
  const [workoutDesc, setWorkoutDesc] = useState("Description");
  const [weight, SetWeight] = useState(10);
  const [name, SetName] = useState(ExercisesNames[idx]);
  const [reps, SetReps] = useState(10);
  const [sets, SetSets] = useState(3);
  const [restTime, SetRest] = useState(60); // in seconds
  const [isSaved, SetSave] = useState(false);
  const [isCheat, setCheat] = useState(1);

  const [exerciseId, setExersiceId] = useState([1]);
  const [exerciseData, SetexerciseData] = useState([]);

  const updateexerciseData = (exercise) => {
    let currentData = exerciseData;
    currentData.push(exercise);
    SetexerciseData(currentData);
    console.log(exerciseData);
  };

  const addExercise = () => {
    let currentData = exerciseId;

    if (exerciseId.length < 4) {
      currentData.push(exerciseId.length);
      setExersiceId(currentData);
      setCheat(exerciseId.length);
      console.log(isSaved);
    }
  };

  const removeExercise = () => {
    let currentData = exerciseId;

    if (exerciseId.length > 1) {
      currentData.splice(exerciseId.length - 1, 1);
      setExersiceId(currentData);
      setCheat(exerciseId.length);
      console.log(isSaved);
    }
  };

  return (
    <div className="EditWorkout">
      <CloseButton />
      <NewWorkoutInput
        workoutName={workoutName}
        setWorkoutName={setWorkoutName}
        setWorkoutDesc={setWorkoutDesc}
        workoutDesc={workoutDesc}
      />
      <Categories />
      
    </div>
  );
}

export default EditWorkout;
