import React from 'react'

const OpenStats = () => {
    const stats =  document.querySelector(".StatsImg");
    stats.style.display = "block";
}

function CompletedWokout() {
  return (
    <div>
        <button className='CompletedWorkout1' onClick={OpenStats}>Bench</button>
        <button className='CompletedWorkout2' onClick={OpenStats}>Squats</button>
        <button className='CompletedWorkout3' onClick={OpenStats}>Push</button>
        <button className='CompletedWorkout4' onClick={OpenStats}>Deadlift</button>
        <button className='CompletedWorkout5' onClick={OpenStats}>Pull</button>
        <button className='CompletedWorkout6' onClick={OpenStats}>Bench</button>
    </div>
  )
}

export default CompletedWokout