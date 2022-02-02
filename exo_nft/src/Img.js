import React from 'react';
import imgCard from './img/image-equilibrium.jpg'

class Img extends React.Component {
    render() {
        return (
            <div className="" >
                <img src={imgCard} alt="" id ="imgCard" className="img-fluid" />
            </div>
        )
    }
}

export default Img;