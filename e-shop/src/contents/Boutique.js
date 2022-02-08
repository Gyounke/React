import React from 'react';
import Produits from './Produits'

class Boutique extends React.Component {
    render() {
        return(
            <div className="shop">
                <Produits />
                <Produits />
                <Produits />                
            </div>
        )
    }
}

export default Boutique