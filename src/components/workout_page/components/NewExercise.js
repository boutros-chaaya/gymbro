import React from "react";
import { useState } from "react";

function NewExercise() {
  let workoutNames = ["Bench Press", "Squats", "Deadlift"];
  let idx = 0;

  const [weight, SetWeight] = useState(10);
  const [name, SetName] = useState(workoutNames[idx]);
  const [reps, SetReps] = useState(10);
  const [sets, SetSets] = useState(10);
  const [restTime, SetRest] = useState(60); // in seconds

  return (
    <div className="NewExercise">
      <div className="NewExerciseBox">
        <div>
          <input
            className="ExerciseName"
            required="required"
            defaultValue={name}
            readOnly={true}
          />
        </div>
        <div className="NewExerciseTextBox">
          <input
            className="NewExerciseText"
            required="required"
            defaultValue={weight}
            readOnly={true}
          />
          <input
            className="NewExerciseText"
            required="required"
            defaultValue={reps}
            readOnly={true}
          />
          <input
            className="NewExerciseText"
            required="required"
            defaultValue={sets}
            readOnly={true}
          />
          <input
            className="NewExerciseText"
            required="required"
            defaultValue={restTime}
            readOnly={true}
          />
        </div>
      </div>
      <button className="EditButton">Edit</button>
    </div>
  );
}

export default NewExercise;
