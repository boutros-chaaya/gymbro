import React from "react";

function NewExercise(props) {
  const saveButtonPressed = () => {
    props.saveExerciseParams({
      name: props.name,
      weight: props.weight,
      reps: props.reps,
      sets: props.sets,
      rest: props.restTime,
    });
  };

  const removeButtonPressed = () => {
    props.removeExerciseParams({
      name: props.name,
      weight: props.weight,
      reps: props.reps,
      sets: props.sets,
      rest: props.restTime,
    });
  };

  return (
    <div>
      {props.data.map(() => {
        return (
          <div className="NewExercise">
            <button
              type="button"
              className="ExerciseDeleteButton"
              onClick={removeButtonPressed}
            >
              -
            </button>
            <div className="NewExerciseBox">
              <div>
                <select
                  className="SelectExerciseName"
                  onChange={(e) => {
                    props.SetName(e.target.value);
                  }}
                >
                  <option value={props.ExercisesNames[0]} selected>
                    {props.ExercisesNames[0]}
                  </option>
                  <option value={props.ExercisesNames[1]}>
                    {props.ExercisesNames[1]}
                  </option>
                  <option value={props.ExercisesNames[2]}>
                    {props.ExercisesNames[2]}
                  </option>
                </select>
              </div>
              <div className="NewExerciseTextBox">
                <input
                  className="NewExerciseText"
                  type="number"
                  required="required"
                  value={props.weight}
                  readOnly={false}
                  onChange={(e) => {
                    props.SetWeight(e.target.value);
                  }}
                />
                <input
                  className="NewExerciseText"
                  required="required"
                  type="number"
                  value={props.reps}
                  readOnly={false}
                  onChange={(e) => {
                    props.SetReps(e.target.value);
                  }}
                />
                <input
                  className="NewExerciseText"
                  required="required"
                  type="number"
                  value={props.sets}
                  readOnly={false}
                  onChange={(e) => {
                    props.SetSets(e.target.value);
                  }}
                />
                <input
                  className="NewExerciseText"
                  required="required"
                  value={props.restTime}
                  type="number"
                  readOnly={false}
                  step="5"
                  onChange={(e) => {
                    props.SetRest(e.target.value);
                  }}
                />
              </div>
            </div>
            <button
              type="button"
              className="ExerciseSaveButton"
              onClick={saveButtonPressed}
            >
              Save
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default NewExercise;
