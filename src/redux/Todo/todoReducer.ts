
import {ADD_TODO} from './todoActionTypes';

export interface Statistics {
    status: string;
    value: number;
}

export class StatusCount implements Statistics {
    status: string = "";    
    value: number = 0 ;
}

export class Todo  {
    id: number = 0;
    date: string = "";
    title: string = "";
    description: string ="";
    status: string = "";
}

export class TodoAppState  {
    statistics: Array<Statistics> = new Array<Statistics>(); 
    todos: Array<Todo> = new Array<Todo>();
    currentTodo:  Todo = new Todo()
}

export class IntitialState extends TodoAppState {
     
}

const initialState = new IntitialState();

const todoReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case ADD_TODO : return {
            ... state,
            todos: [... state.todos, action.todo]
        }

        default: return state;    
    }

}

export  default todoReducer;