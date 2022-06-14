// import './App.css';
import React from 'react';
import {Route} from 'react-router-dom';
import LandingPage from './components/LandingPage.jsx';
import Home from './components/Home.jsx';
import Activities from './components/Activities.jsx';
// import Home from './components/home';


function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage}/>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/activities" component={Activities}/>
    </div>
  );
}

export default App;
