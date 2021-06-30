
import './App.scss';
import Menu from './Components/Menu/Menu';
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Menu />
        </Route>
      </Router>
      
    </div>
  );
}

export default App;
