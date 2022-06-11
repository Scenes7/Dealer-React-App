
import './App.css';
import Commands from './React-Components/All_Commands'
import Home from './React-Components/Home'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import API from './React-Components/API'
import Updates from './React-Components/Updates'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Commands">
          <Commands />
        </Route>
        <Route path="/API">
          <API />
        </Route>
        <Route path="/Updates">
          <Updates />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <div className="">



      </div>
    </Router>
  )
}
export default App;


//Invite Link:
//https://discord.com/api/oauth2/authorize?client_id=866733937115922443&permissions=0&scope=bot