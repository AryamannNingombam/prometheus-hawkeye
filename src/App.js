
import {Asia} from './continents/Asia';
import {Australia} from './continents/Australia';
import {Europe} from './continents/Europe';
import {America} from './continents/America';
import {Africa} from './continents/Africa';
import './App.css';



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
            <div className="countdown">
                120312093102312
            </div>
        </div>
     
  );
}

export default App;
