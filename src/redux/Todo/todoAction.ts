import React from 'react';
import { ADD_TODO } from './todoActionTypes';
import { Todo } from './todoReducer';


const addTodo = (todo: Todo): any =>  {
    return {
        type: ADD_TODO,
        todo: todo   
    }
}

export default addTodo ;