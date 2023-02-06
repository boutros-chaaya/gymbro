import React from 'react'
import Stats from "./workoutstats.jpg"

const CloseStats = () => {
    const stats =  document.querySelector(".StatsImg");
    stats.style.display = "none";
}

function CompletedWorkoutModal() {
  return (
    <div className='StatsImg'>
        <button className="CloseButton" onClick={CloseStats}>
        X
      </button>
        
    </div>
  )
}

export default CompletedWorkoutModal