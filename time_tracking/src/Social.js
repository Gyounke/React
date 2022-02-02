import React from 'react';
import SocialImg from './images/icon-social.svg' 

class Social extends React.Component {

    render() {
    
        const customData = require('./data.json');

        return (
            <div id="socialCard" className="col-4">
                <div id="decoSocial">
                <img src={SocialImg} alt=""/>
                </div>
                <div className="fiche ">
                    <div className="title">
                        {customData[4].title}
                        <button type="">...</button>
                    </div>
                    <div className="time">
                        <p id= "mainTime">{customData[4].timeframes.daily.current}hrs</p> 
                        <br/>
                        <p> Last week :{customData[4].timeframes.daily.previous} hrs
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Social