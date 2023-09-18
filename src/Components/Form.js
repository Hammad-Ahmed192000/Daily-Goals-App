import React, {useState} from 'react'
import Header from './Header';
import AddedGoals from './AddedGoals';


function Form() {
    // make useSate for input and textarea
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');
    const [description, setDescription] = useState('');

    // Add Button Task 
    const submitHandler = (e) => {
        e.preventDefault();
        setTasks([...tasks, {
            input,
            description
        }])
    };

    // Delete button task
    const deleteTask = (index)=> {
        const filteredArray = tasks.filter((val, i) => {
            return i !== index;
        });
        console.log(filteredArray);
        setTasks(filteredArray); // Remaining tasks are in filteredArray
    }    
    // console.log(input, description);
  return (
    <div className='form-div'>
        <Header />
        <form className='form' onSubmit={submitHandler}>
            <h1>Daily Goals</h1>
            <input 
                className='form-items-styles'
                type='text'
                placeholder='Enter your goal here' 
                value={input}
                onChange = {
                    (e) => setInput(e.target.value)
            }/>

            <textarea 
                className='form-items-styles' 
                placeholder='Description' 
                value={description} 
                onChange = {
                    (e) => setDescription(e.target.value)
            }></textarea>

            <button className='form-items-styles'> Add </button>
        </form>
        {tasks.map((item, index) => ( 
            <AddedGoals 
                key={index} 
                title={item.input} 
                description={item.description} 
                deleteTask={deleteTask} 
                index={index}
                />
        ))}

            {/* or another type of map() for returning an array */}
        {/* {tasks.map(() =>  {
            return <AddedGoals />
        })} */}
    </div>
  )
}

export default Form;