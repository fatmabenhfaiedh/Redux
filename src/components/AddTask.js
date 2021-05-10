import React from 'react'
import {useState} from 'react'
import './AddTask.css'
import {useDispatch} from 'react-redux'
import { addTask } from '../redux/actions/actions'


const AddTask = () => {

    const [inputValue, setInput] = useState({
    text : "" ,
    isDone : false})


const dispatch = useDispatch()


    return (
        <div>
            <form id= "myDiv"    onSubmit={(e)=>{


                e.preventDefault();

                dispatch(addTask(inputValue))

                setInput({...inputValue , text :""})


            }}>

                <input id= "put" type="text"  value={inputValue.text}  onChange={(e)=> setInput({...inputValue , text:e.target.value})}/>

                <button type="submit" className= "addBtn">Add</button>

            </form>






        </div>
    )
}

export default AddTask
