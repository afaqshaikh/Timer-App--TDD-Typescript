import React, { useState } from "react";
import TimerButton from "./TimerButton";
import './Timer.css'

function Timer() {
    const [time, setTime] = useState({
        seconds:0,
        minutes:25
    })
    const [timeInterval, setTimeInterval] = useState({})
    let [isOn, setIsOn] = useState(false)

    var updateSeconds = time.seconds
    var updateMinute = time.minutes

    const timer = () => {
        if(updateSeconds === 0){
            updateMinute--;
            updateSeconds = 60
        }
        updateSeconds--;
        return setTime({
            seconds: updateSeconds ,
             minutes  : updateMinute 
            })
    }

    // Start Timer Function
    const startTimer = () => {
        if(isOn !== true){
        timer()
        setIsOn(true)         
        setTimeInterval(setInterval(timer , 1000))
        console.log("Start timer")  
        }  
              
    }

    // Stop Timer Function
    const stopTimer = () => {
        console.log('Stopping timer.');
        clearInterval(Number(timeInterval));
        setIsOn(false)
    }

    // Reset Timer Function
    const resetTimer = () => {
        console.log('Resetting timer.');
        stopTimer()
        setTime({
            seconds:0,
            minutes:25
        })
    }

    return (
        <div>
            <div className="time-display">
                <p className="time">
                    {time.minutes} : {time.seconds < 10 ? `0${time.seconds}` : time.seconds}
                </p>
            </div>
            <div className="timer-button-container">
                <TimerButton buttonAction={startTimer} buttonValue={'Start'} />
                <TimerButton buttonAction={stopTimer} buttonValue={'Stop'} />
                <TimerButton buttonAction={resetTimer} buttonValue={'Reset'} />
            </div>
        </div>
    );
}

export default Timer;