import React from 'react';
import AddTask from './AddTask';
import {useSelector, useDispatch} from 'react-redux'
import { changeDone, deleteTask } from '../redux/actions/actions';
const ListTask = () => {

    
const todos = useSelector(state => state.todos)

const dispatch = useDispatch()



    return (
        <div>
    
            <AddTask />

            <ul>
                { todos.map ((task, i) => (
                <li key={i} > <span style={{textDecoration : task.isDone ? "line-through"  : "none"}}>{task.text}</span>
                    
                <button onClick={()=> dispatch(changeDone(i))}>{task.isDone ? "undo" : "done" }</button>            

                 <button  onClick ={() => dispatch(deleteTask(i)) } >X</button></li>
                ))}

            </ul>


        </div>
    )
}

export default ListTask
