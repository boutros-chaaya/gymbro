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


export default Workout;
