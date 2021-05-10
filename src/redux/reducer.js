import {ADD_TASK , DELETE_TASK , CHANGE_DONE} from './actions/actionsTypes'

const initialState = {

todos : []

}


const reducer = (state = initialState , action ) => {

const {type , payload} = action

switch(type) {

case ADD_TASK : return {...state , todos : [...state.todos , payload] }
case DELETE_TASK : return {...state , todos : state.todos.filter((el,i) => i !== payload)}
case CHANGE_DONE : return {...state , todos : state.todos.map((el ,i)=> i === payload  ? el = {...el , isDone :!el.isDone } : el)}
default: return state

}


}

export default reducer
