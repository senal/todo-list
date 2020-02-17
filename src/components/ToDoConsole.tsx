import React, { useState } from 'react';
import ToDoStatistics from './ToDoStatistics';
import ToDoCreator from './ToDoCreator';
import ToDoList from './ToDoList';

const ToDoConsole : React.FC<{}> = () => {
    return (<div className="row p-3">
    <div className="col-2">
        <ToDoStatistics id={"test"} ></ToDoStatistics>
    </div>
    <div className="col">
      <ToDoCreator></ToDoCreator>
      <ToDoList></ToDoList>
    </div>
  </div>);
}

export default ToDoConsole;