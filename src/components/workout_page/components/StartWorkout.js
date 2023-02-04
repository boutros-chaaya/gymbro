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

function StartWorkout(props) {
  

  return (
    <div className="EditWorkout">
      <CloseButton />

      <Categories />
      
    </div>
  );
}

export default StartWorkout;
