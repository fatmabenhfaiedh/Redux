import React, {useState} from 'react';
import AddTask from './AddTask';

const ListTask = () => {

    const [tasks, setTasks] = useState([]);

    const addTask =(newTask) => setTasks([ newTask , ...tasks]);

    // const [isDone, setIsDone] = useState(false);


    return (
        <div>
            <AddTask addTask={addTask} />

            <ul>
                { tasks.map ((task, i) => (
                    <li key={i} >{task} <button  onClick={()=> {
                    
                 let newValue = prompt('Set a new task'); 

                 setTasks(tasks.map((el, index) => index === i ? el = newValue : el ))
                    
                    
                }} >Edit</button>
                
                {/* <button  onClick={() => {let newColor = style={{color:"red"}};  */}

                {/* setIsDone(tasks.filter((el,index) =>index === i ? el = newColor : el )) } >{isDone} Is Done</button>  */}
                 

                 <button  onClick={() => setTasks(tasks.filter((el,index) =>index !== i )) }   >X</button></li>
                ))}

            </ul>


        </div>
    )
}

export default ListTask
