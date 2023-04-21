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

    const substractTodo = (todo) =>{
        const action = {
            type: types.DELETE_TODO,
            payload: todo
        }
        dispatch(action)
    }

    return {
        handleNewTodo,
        substractTodo,
        todo
    }
}