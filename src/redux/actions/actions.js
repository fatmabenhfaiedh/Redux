import {ADD_TASK, DELETE_TASK , CHANGE_DONE} from './actionsTypes';


export const addTask = (newTask) => {


return {type : ADD_TASK , payload : newTask}


}

export const deleteTask = (id) => {


    return {type : DELETE_TASK, payload : id}
    
    
    }

    export const changeDone = (id) => {


        return {type : CHANGE_DONE, payload : id}
        
        
        }