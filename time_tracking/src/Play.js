import React from 'react';
import PlayImg from './images/icon-play.svg' 

class Play extends React.Component {

    render() {
    
        const customData = require('./data.json');

        return (
            <div id="playCard" className="col-4">
                <div id="decoPlay">
                <img src={PlayImg} alt=""/>
                </div>
                <div className="fiche ">
                    <div className="title">
                        {customData[1].title}
                        <button type="">...</button>
                    </div>
                    <div className="time">
                        <p id= "mainTime">{customData[1].timeframes.daily.current}hrs</p> 
                        <br/>
                        <p> Last week :{customData[1].timeframes.daily.previous} hrs
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Play