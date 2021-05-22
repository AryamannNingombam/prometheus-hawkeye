
import {Asia} from './continents/Asia';
import {Australia} from './continents/Australia';
import {Europe} from './continents/Europe';
import {America} from './continents/America';
import {Africa} from './continents/Africa';
import './App.css';
import { Countdown } from './countdown/Countdown';



function App() {
  return (
  
        <div className="maincontainer">
            <div className="continents">
           <Asia/>
           <Australia/>
           <Europe/>
         <America/>
          <Africa/>
            </div>
            <span id="hawkeye-main-logo">HAWKEYE</span>
            <div id="hawkeye-countdown-div">
            <span id="hawkeye-main-subheading">THE HAWK LANDS IN</span>
            <Countdown/>
            </div>
            
       
        </div>
     
  );
}

export default App;
