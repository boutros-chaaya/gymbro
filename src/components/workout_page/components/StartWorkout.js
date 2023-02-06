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

const CloseWorkout = () => {
  const StartWorkoutModal = document.querySelector(".StartWorkout");
  StartWorkoutModal.style.display = "none";
};

function ExerciseToDo(props) {
  return (
    <div>
      {props.data.map(() => {
        return (
          <div className="ExerciseToDo">
            <p className="ExerciseToDoName">{props.exercises[0]}</p>
            <div className="ExerciseToDoProps">
            <p>{props.exercises[0][0]} | {props.exercises[0][1]} | {props.exercises[0][2]}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function StartWorkout(props) {
  return (
    <div className="StartWorkout">
      <button className="CloseButton" onClick={CloseWorkout}>
        X
      </button>

      <div className="StartWorkoutHeader">
        <p className="StartWorkoutTitle">{props.workoutName}</p>
        <p className="cats">Weight | Reps | Sets</p>
        <button className="StartWorkoutButton">Start</button>
      </div>      
      <button className="FinishWorkoutButton" onClick={CloseWorkout}>Finish</button>
    </div>
  );
}

export default StartWorkout;
