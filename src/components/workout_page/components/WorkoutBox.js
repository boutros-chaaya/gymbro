import React from "react";

function CreateNewWorkout() {
  return (
    <div>
      <button className="CreateNewWorkout" onClick={OpenWorkouts}>
        <span className="PlusIcon">+</span>
        Create New Workout
      </button>
    </div>
  );
}

function OpenWorkouts() {
  const CreateWorkoutModal = document.querySelector(".NewWorkout");
  CreateWorkoutModal.style.display = "block";
}

function Workout(props) {
  return (
    <div className="Workout">
      <h3>{props.name}</h3>
      <p>{props.desc}</p>
      <button className="Button">Start</button>
      <button className="Button">Modify</button>
      <button className="TransparentButton">Delete</button>
    </div>
  );
}

function WorkoutBox() {
  return (
    <div className="WorkoutBox">
      <CreateNewWorkout />
      <div className="WorkoutsToDo">
        <Workout name="Push" desc="Workout Description" />
        <Workout name="Push" desc="Easy chill workout" />
        <Workout name="Push" desc="some random text" />
      </div>
    </div>
  );
}

export default WorkoutBox;
