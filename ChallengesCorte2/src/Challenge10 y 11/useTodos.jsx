import { useEffect, useReducer } from 'react';
import * as types from '../components/types';
import { TodoReducer } from './TodoReducer';



const initialState = []

const init = () =>{
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const useTodos = () =>{
    const [todos,dispatch] = useReducer(TodoReducer,initialState,init);

    useEffect (() => {
        localStorage.setItem('todos',JSON.stringify(todos))
    },[todos])

    const handleNewTodo = (todo) =>{
        const action = {
            type: types.CREATE_TODO,
            payload: todo
        }
        dispatch(action)
    }

    const substractTodo = (id) =>{
        const action = {
            type: types.DELETE_TODO,
            payload: id
        }
        dispatch(action)
    }

    const toggleTodo = (id) =>{
        const action = {
            type: types.TOGGLE_TODO,
            payload: id
        }
        dispatch(action)
    }

    return {
        handleNewTodo,
        substractTodo,
        toggleTodo,
        todos
    }
}