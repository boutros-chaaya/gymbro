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
        <p className="RestText">Rest (s)</p>
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

function SaveButton() {
  return (
    <div>
      <button className="SaveButton" onClick={CloseWorkouts}>Save</button>
    </div>
  );
}



function AddButton() {
  return (
    <div>
      <button className="AddButton">+</button>
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
      <div className="NewExercisesBox">
      <NewExercise />
      </div>
      <br />
      <div className="BottomButtons">
        <AddButton />
        <br/>
        <SaveButton />
      </div>
    </div>
  );
}

export default NewWorkout;
