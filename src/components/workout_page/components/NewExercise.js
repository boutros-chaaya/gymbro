import React from "react";
import { useState } from "react";



function NewExercise() {
  const allInputBoxes = document.getElementsByClassName("NewExerciseText");
  let ExercisesNames = ["Bench", "Squats", "Deadlift"];
  let idx = 0;

  const [weight, SetWeight] = useState(10);
  const [name, SetName] = useState(ExercisesNames[idx]);
  const [reps, SetReps] = useState(10);
  const [sets, SetSets] = useState(3);
  const [restTime, SetRest] = useState(60); // in seconds



  return (
    <div className="NewExercise">
      <div className="NewExerciseBox">
        <div>
          <input
            className="ExerciseName"
            required="required"
            type="text"
            value={name}
            readOnly={false}
            onChange={(e) => {SetName(e.target.value)}}
          />
        </div>
        <div className="NewExerciseTextBox">
          <input
            className="NewExerciseText"
            type="number"
            required="required"
            value={weight}
            readOnly={false}
            onChange={(e) => {SetWeight(e.target.value)}}
          />
          <input
            className="NewExerciseText"
            required="required"
            type="number"
            value={reps}
            readOnly={false}
            onChange={(e) => {SetReps(e.target.value)}}
          />
          <input
            className="NewExerciseText"
            required="required"
            type="number"
            value={sets}
            readOnly={false}
            onChange={(e) => {SetSets(e.target.value)}}
          />
          <input
            className="NewExerciseText"
            required="required"
            value={restTime}
            type="number"
            readOnly={false}
            step="5"
            onChange={(e) => {SetRest(e.target.value)}}
          />
        </div>
      </div>
      <button type="button" className="EditButton">
        Edit
      </button>
    </div>
  );
}

export default NewExercise;
