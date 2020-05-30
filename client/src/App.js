import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import Register from './components/home/register';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Router>
      <Route exact path="/" component={Register} />
      </Router>
    </div>
    </Provider>
  );
}

export default App;
