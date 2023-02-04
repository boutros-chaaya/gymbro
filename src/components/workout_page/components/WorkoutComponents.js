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
    <div>
      {props.data.map((item) => {
        return(
        <div className="Workout">
          <h3>{item.name}</h3>
          <p>{item.desc}</p>
          <button className="Button">Start</button>
          <button className="Button">Modify</button>
          <button className="TransparentButton">Delete</button>
        </div>
        )
      })}
    </div>
  );
}

export { CreateNewWorkoutComponent, OpenWorkouts, WorkoutComponent };
