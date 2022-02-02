import React from 'react';
import WorkImg from './images/icon-work.svg' 

class Work extends React.Component {

    render() {
    
        const customData = require('./data.json');

        return (
            <div id="workCard" className="col-4">
                <div id="decoWork">
                <img src={WorkImg} alt=""/>
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

// Exportation 
export default Work

