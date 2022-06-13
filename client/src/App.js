import './App.css';
import {Route} from 'react-router-dom';
import index from './components/index.jsx';
import detiles from './components/detiles.jsx';


function App() {
  return (
    <div className="App">
      <Route exact path="/" component={index}/>
      <Route exact path="/" component={detiles}/>
    </div>
  );
}

export default App;
