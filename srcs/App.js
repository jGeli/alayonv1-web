import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/pages/Navbar';

function App() {
  return (
    <Router>
     <Navbar/>
     <Switch>
       <Route path="/"></Route>
     </Switch>
     </Router>
  );
}

export default App;
