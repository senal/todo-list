import React from 'react';
import './App.css';
import ToDoStatistics from './components/ToDoStatistics';
import ToDoCreator from './components/ToDoCreator';
import ToDoList from './components/ToDoList';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
    <div className="container">
        <div className="row p-3">
          <div className="col-2">
              <ToDoStatistics></ToDoStatistics>
          </div>
          <div className="col">
            <ToDoCreator></ToDoCreator>
            <ToDoList></ToDoList>
          </div>

        </div>
    </div>
    </Provider>
  );
}

export default App;
