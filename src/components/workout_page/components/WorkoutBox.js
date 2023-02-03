import React from "react";


class Workout {
  constructor(name, desc) {
    this.name = name;
    this.desc = desc;
    this.exercises = [];
    this.isIsFinished = false;
  }
  getName(){
    return(this.name)
  }
  AddExercise(exercise){
    this.exercises.push(exercise)
  }
  getExercises(){
    return this.exercises
  }
}

let workout1 = new Workout("Bench", "Medium dificulity") ;
let workout2 = new Workout("Push", "Core strength") ;
let workout3 = new Workout("Pull", "Back training");

let allWorkouts = [workout1, workout2, workout3];

function CreateNewWorkoutComponent() {
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

function WorkoutComponent(props) {
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
      <CreateNewWorkoutComponent />
      <div className="WorkoutsToDo">
        <WorkoutComponent name={allWorkouts[0].getName()} desc={allWorkouts[0].desc} />
        <WorkoutComponent name={allWorkouts[1].getName()} desc={allWorkouts[1].desc} />
        <WorkoutComponent name={allWorkouts[2].getName()} desc={allWorkouts[2].desc} />
        
      </div>
    </div>
  );
}

export default WorkoutBox;
