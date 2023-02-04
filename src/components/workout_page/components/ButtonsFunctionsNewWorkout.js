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

function SaveButton(props) {
  const SaveWorkouts = () => {
    props.saveButtonCallback();
  };
  return (
    <div>
      <button className="SaveButton" onClick={SaveWorkouts}>
        Save
      </button>
    </div>
  );
}

function AddButton(props) {
  const addNewExercise = () => {
    props.addButtonCallback();
  };

  return (
    <div>
      <button className="AddButton" onClick={addNewExercise}>
        +
      </button>
    </div>
  );
}

function CloseWorkouts() {
  const CreateWorkoutModal = document.querySelector(".NewWorkout");
  CreateWorkoutModal.style.display = "none";
}

function NewWorkoutInput(props) {
  return (
    <div className="NewWorkoutInputs">
      <div>
        <span>Workout Name: </span>
        <input
          className="NewWorkoutInput"
          type="text"
          required="required"
          value={props.workoutName}
          readOnly={false}
          onChange={(e) => {
            props.setWorkoutName(e.target.value);
          }}
        />
      </div>
      <div>
        <span> Description: </span>
        <input
          className="NewWorkoutInput"
          type="text"
          required="required"
          value={props.workoutDesc}
          readOnly={false}
          onChange={(e) => {
            props.setWorkoutDesc(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export { CloseButton, CloseWorkouts, Categories, AddButton, SaveButton, NewWorkoutInput };
