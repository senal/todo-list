import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import addTodo from '../redux/Todo/todoAction';
import { Todo } from '../redux/Todo/todoReducer';

const ToDoCreator : React.FC<{}> = () => {

    const dispatch = useDispatch();
    const todo = new Todo();
    const [currentTodo, setCurrentTodo] = useState(todo);
    const now = new Date();

    const handleAddTodo = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const id = Math.floor(Math.random() * Math.floor(999))
        currentTodo.date = now.toISOString();
        currentTodo.id = id;
        console.log('current todo', currentTodo);
        dispatch(addTodo(currentTodo));
        setCurrentTodo(new Todo());
    }
   

    return (
            <form className="form-inline">
                <input type="text" className="form-control mb-2 mr-sm-2" placeholder="Title" value={currentTodo.title} onChange= {e => 
                        setCurrentTodo({...currentTodo, title: e.target.value})}></input>   
                <input type="text" className="form-control mb-2 mr-sm-2" placeholder="Description" value={currentTodo.description} onChange={ e => setCurrentTodo({...currentTodo, description: e.target.value})}></input>   
                <select className="form-control mb-2 mr-sm-2" placeholder="Status" onChange={e => setCurrentTodo({...currentTodo, status : e.target.value})}>
                    <option>New</option>
                    <option>In Progress</option>
                    <option>Completed</option>
                </select>
                <button className="btn btn-primary mb-2" onClick={e => handleAddTodo(e)} >Add</button>
            </form>
    );
}

export default ToDoCreator;