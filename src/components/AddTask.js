import React from 'react'
import {useState} from 'react'
import './AddTask.css'


const AddTask = ({addTask}) => {

    const [inputValue, setInput] = useState('')





    return (
        <div>
            <form id= "myDiv"    onSubmit={(e)=>{


                e.preventDefault();

                addTask(inputValue);

                setInput('')


            }}>

                <input id= "put" type="text"  value={inputValue}  onChange={(e)=> setInput(e.target.value)}/>

                <button type="submit" className= "addBtn">Add</button>

            </form>






        </div>
    )
}

export default AddTask
