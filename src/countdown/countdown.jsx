import React,{useState,useEffect} from 'react'
import './Countdown.css';



export const Countdown = () => {
    const calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        const difference = +new Date(`2021-5-23`) - +new Date();
        let timeLeft = {};
    
        if (difference >= 0) {
          timeLeft = {
            
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24) +Math.floor(difference / (1000 * 60 * 60)),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
          };
        }
    
        return timeLeft;
      };
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
      const [year] = useState(new Date().getFullYear());
    
      useEffect(() => {
        setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
      });
    
      const timerComponents = [];
    
      Object.keys(timeLeft).forEach((interval) => {
            console.log(timeLeft[interval])
        if (!timeLeft[interval]) {
          return;
        }

        if (interval == 'seconds'){
            console.log(timeLeft[interval]);
            timerComponents.push(
                <span>{timeLeft[interval]}</span>
                );
        }else{
            timerComponents.push(
                <span>{timeLeft[interval]} : </span>
            )
        }
        
      });
      return (
        <div id="countdown-timer-main-div">
          {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div>
      );
}
