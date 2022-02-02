import React from 'react';
import Ethereum from './img/icon-ethereum.svg'
import Clock from './img/icon-clock.svg'
import Avatar from './img/image-avatar.png'

class Text extends React.Component {
    render() {
        return (
            <div >
                <h2>Equilibrium # 3429</h2>
                <p className="text-secondary">Our Equilibrium collection promotes balance and calm</p>
                <div className="d-flex justify-content-between mb-3 border-bottom">
                    <div className="d-flex align-items-center" id= "eth">
                        <img src={Ethereum} alt="" className="m-0 me-2"/>
                        <p className="m-0">0.041 ETH</p>
                    </div>
                    <div className="d-flex align-items-center" id="time">
                    <img src={Clock} alt="" className="m-2" />
                    <p className="m-0">3 days left</p>
                    </div>    
                </div>
                <div className="author d-flex align-items-center">
                    <img src={Avatar} alt="" id="authorImg" />
                    <p><span className="text-secondary">Creation of </span>Jules Wyvern</p>
                </div>
            </div>
        )
    }
}

export default Text;