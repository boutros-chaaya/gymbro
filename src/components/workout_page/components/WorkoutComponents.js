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

function OpenEditWorkout() {
  const CreateWorkoutModal = document.querySelector(".NewWorkout");
  CreateWorkoutModal.style.display = "block";
}

function WorkoutComponent(props) {

  const startButtonPressed = () => {
    props.startWorkout({
      workoutName: props.workoutName,
      workoutDesc: props.workoutDesc,
      exercises: props.exersices,
    });
  };

  const modifyButtonPressed = () => {
    props.modifyWorkout({
      workoutName: props.workoutName,
      workoutDesc: props.workoutDesc,
      exercises: props.exersices,
    });
  };

  const deleteButtonPressed = () => {
    props.deleteWorkout({
      id: props.workoutId,
      workoutName: props.workoutName,
      workoutDesc: props.workoutDesc,
      exercises: props.exersices,
    });
  };

  return (
    <div>
      {props.data.map((item) => {
        return(
        <div className="Workout">
          <h3>{item.name}</h3>
          <p>{item.desc}</p>
          <button className="Button" onClick={startButtonPressed}>Start</button>
          <button className="Button"onClick={OpenWorkouts}>Modify</button>
          <button className="TransparentButton" onClick={deleteButtonPressed}>Delete</button>
        </div>
        )
      })}
    </div>
  );
}

export { CreateNewWorkoutComponent, OpenWorkouts, WorkoutComponent, OpenEditWorkout };
