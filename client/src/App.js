import './App.css';
import React from 'react';
import {Route} from 'react-router-dom';
import LandingPage from './components/LandingPage.jsx';
import Home from './components/Home.jsx';
import NewActivity from './components/NewActivity';
import CountryDetail from './components/CountryDetail';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage}/>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/activities" component={NewActivity}/>
      <Route path='/home/:id' component={CountryDetail}/>
    </div>
  );
}

export default App;
