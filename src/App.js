import React from "react"
import './App.css';
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import FrontContent from "./components/FrontContent";
import AboutUs from "./components/AboutUs"
import OurVehicles from "./components/OurVehicles";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact>
          <FrontContent />
        </Route>
        <Route path='/AboutUs' exact>
          <AboutUs />  
        </Route>
        <Route path='/OurVehicles' exact>
          <OurVehicles />  
        </Route> 
        <Route path='/Contact' exact>
          <ContactUs />
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
