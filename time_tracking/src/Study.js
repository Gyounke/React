import React from 'react';
import StudyImg from './images/icon-study.svg' 

class Study extends React.Component {

    render() {
    
        const customData = require('./data.json');

        return (
            <div id="studyCard" className="col-4">
                <div id="decoStudy">
                <img src={StudyImg} alt=""/>
                </div>
                <div className="fiche ">
                    <div className="title">
                        {customData[2].title}
                        <button type="">...</button>
                    </div>
                    <div className="time">
                        <p id= "mainTime">{customData[2].timeframes.daily.current}hrs</p> 
                        <br/>
                        <p> Last week :{customData[2].timeframes.daily.previous} hrs
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Study