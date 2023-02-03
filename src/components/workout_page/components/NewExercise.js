import React from "react";
import { useState } from "react";


function setEdit(){
  alert("hello")
}

function NewExercise() {
  const allInputBoxes = document.getElementsByClassName("NewExerciseText");
  let workoutNames = ["Bench Press", "Squats", "Deadlift"];
  let idx = 0;

  const [weight, SetWeight] = useState(10);
  const [name, SetName] = useState(workoutNames[idx]);
  const [reps, SetReps] = useState(10);
  const [sets, SetSets] = useState(10);
  const [restTime, SetRest] = useState(60); // in seconds

  function handelEdit(){
    for (let index = 0; index < allInputBoxes.length; index++) {
      let inputs = allInputBoxes[index].children;
      inputs.readOnly = false;
    }
  }

  return (
    <div className="NewExercise">
      <div className="NewExerciseBox">
        <div>
          <input
            className="ExerciseName"
            required="required"
            defaultValue={name}
            readOnly={false}
          />
        </div>
        <div className="NewExerciseTextBox">
          <input
            className="NewExerciseText"
            required="required"
            defaultValue={weight}
            readOnly={false}
          />
          <input
            className="NewExerciseText"
            required="required"
            defaultValue={reps}
            readOnly={false}
          />
          <input
            className="NewExerciseText"
            required="required"
            defaultValue={sets}
            readOnly={false}
          />
          <input
            className="NewExerciseText"
            required="required"
            defaultValue={restTime}
            readOnly={false}
          />
        </div>
      </div>
      <button type="button" className="EditButton" onClick={handelEdit}>
        Edit
      </button>
    </div>
  );
}

export default NewExercise;
