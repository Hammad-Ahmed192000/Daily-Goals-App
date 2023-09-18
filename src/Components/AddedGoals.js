import React from 'react'

function AddedGoals({title, description, deleteTask, index}) {
  return (
    <div className='tasks'>
        
        <div>
            <p>{title}</p>
            <span> {description} </span>
        </div>
        <button onClick={() => deleteTask(index)}> - </button>

    </div>
  )
}

export default AddedGoals