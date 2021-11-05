import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Appointments from "./components/Appointments/Appointments/Appointments";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/appointments">
            <Appointments></Appointments>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
