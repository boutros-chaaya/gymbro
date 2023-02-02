import React from "react";
import NewExercise from "./NewExercise";

function Categories() {
  return (
    <div className="Categories">
      <div>
        <p className="ExercisesTitleText">Exercises</p>
      </div>
      <div className="CategoriesTextBox">
        <p className="CategoriesText">Weight</p>
        <p className="CategoriesText">Reps</p>
        <p className="CategoriesText">Sets</p>
        <p className="CategoriesText">Rest</p>
      </div>
    </div>
  );
}

function CloseButton() {
  return (
    <div>
      <button className="CloseButton" onClick={CloseWorkouts}>
        X
      </button>
    </div>
  );
}

function CloseWorkouts() {
  const CreateWorkoutModal = document.querySelector(".NewWorkout");
  CreateWorkoutModal.style.display = "none";
}

function NewWorkout() {
  return (
    <div className="NewWorkout">
      <CloseButton />
      <Categories />
      <NewExercise/>
      <NewExercise/>
      <NewExercise/>
    </div>
  );
}

export default NewWorkout;
