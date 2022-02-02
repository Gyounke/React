import React from 'react';
import ExerciseImg from './images/icon-exercise.svg' 

class Exercise extends React.Component {

    render() {
    
        const customData = require('./data.json');

        return (
            <div id="exerciseCard" className="col-4">
                <div id="decoExercise">
                <img src={ExerciseImg} alt=""/>
                </div>
                <div className="fiche ">
                    <div className="title">
                        {customData[3].title}
                        <button type="">...</button>
                    </div>
                    <div className="time">
                        <p id= "mainTime">{customData[3].timeframes.daily.current}hrs</p> 
                        <br/>
                        <p> Last week :{customData[3].timeframes.daily.previous} hrs
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Exercise