import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Register from './components/Register';
import Add from './components/Add';
import StudentDetails from './components/StudentDetails';
import Login from './components/Login';
import Update from './components/Update';

function App() {
  return (
    <div>
    <Router>
      <Switch>
      <Route path='/' exact component={Register}></Route>
      <Route path="/add" component={Add}></Route>
      <Route path="/list" component={StudentDetails}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/update/:rollno" component={Update}></Route>
      </Switch>
    </Router>
      
    </div>
  );
}

export default App;
