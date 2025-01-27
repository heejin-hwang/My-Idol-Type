import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import Result from './routes/Result';
import './App.css';
import Test from './routes/Test';

function App() {
  return (
    <HashRouter>
      <Route exact={true} path="/" component={Home} />
      <Route path="/test" component={Test} />
      <Route path="/result/:type" component={Result} />
    </HashRouter>
  );
}

export default App;
