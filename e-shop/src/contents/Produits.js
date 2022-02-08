import React from 'react';
import salameche from "../images/salameche.png"

class Produits extends React.Component {
    render() {
        return(
            <div>
                <div>
                    <img src={salameche} alt="" />
                    <p>Prix:</p>
                    <p>Stock</p>
                    <button>Buy</button>
                </div>
            </div>
        )
    }
}

export default Produits;