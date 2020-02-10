import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import { TodoAppState, Todo, StatusCount } from './../redux/Todo/todoReducer';

type ToDoStatisticsProps = {
    
}

const getTodos = (state: TodoAppState) => {
   return state.todos;
}

const groupBy = (todos: Todo[]): Array<StatusCount> => {
        const statusCounts = new Array<StatusCount>();
        todos.forEach( t => {
            const e = statusCounts.find(s => s.status == t.status)
            if(e){
                e.value = e.value + 1;
            }else {
                const s = new StatusCount();
                s.status = t.status;
                s.value = 1;
                statusCounts.push(s);
            }
        });  
    
        return statusCounts;
}


const ToDoStatistics : React.FC<ToDoStatisticsProps> = (props: ToDoStatisticsProps) => {
   const todos = useSelector(getTodos);
   const statusCounts  = groupBy(todos); 
    return (
    <div>
        <h3>Item count</h3>
        <ul className="list-group">
        { statusCounts.map(i  => 
                <li key={i.status} className="list-group-item d-flex justify-content-between align-items-center">{i.status}
                    <span className="badge badge-primary badge-pill">{i.value}</span>
                </li>
        )}
        </ul>
    </div>);
}

export default ToDoStatistics;