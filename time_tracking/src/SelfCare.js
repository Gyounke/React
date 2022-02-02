import React from 'react';
import SelfCareImg from './images/icon-self-care.svg' 

class SelfCare extends React.Component {

    render() {
    
        const customData = require('./data.json');

        return (
            <div id="selfCareCard" className="col-4">
                <div id="decoSelfCare">
                <img src={SelfCareImg} alt=""/>
                </div>
                <div className="fiche ">
                    <div className="title">
                        {customData[5].title}
                        <button type="">...</button>
                    </div>
                    <div className="time">
                        <p id= "mainTime">{customData[5].timeframes.daily.current}hrs</p> 
                        <br/>
                        <p> Last week :{customData[5].timeframes.daily.previous} hrs
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default SelfCare