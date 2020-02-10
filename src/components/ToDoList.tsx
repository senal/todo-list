import React from 'react'
import { useSelector } from 'react-redux';
import { IntitialState } from '../redux/Todo/todoReducer';


const getTodos = (state: IntitialState) => {
    return (
         state.todos
    );
}

const ToDoList : React.FC<{}> = () => {
    const todos = useSelector(getTodos);
    return (
        <div>
            <table className="table table-sm">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Date</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                {todos.map(i => 
                    <tr key={i.id}>
                        <td>{i.id}</td>
                        <td>{i.date}</td>
                        <td>{i.title}</td>
                        <td>{i.description}</td>
                        <td>{i.status}</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
}

export default ToDoList;