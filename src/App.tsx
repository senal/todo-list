import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import ToDoConsole from './components/ToDoConsole';
import { render } from '@testing-library/react';

const App = () => {
  return (
    <Provider store={store}>
    <div className="container">
      <Router>
        <Route exact path="/" component={ToDoConsole}></Route>
        <Route exact path="/rp" component={() => <div>Risk party component</div>}></Route>
        <Route exact path="/op" component={() => <div>opportunity component</div>}></Route>
        <Route exact path="/ecm" component={() => <div>ECM component</div>}></Route>
      </Router>
    </div>
    </Provider>
  );
}

export default App;
