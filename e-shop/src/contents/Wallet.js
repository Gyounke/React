import React from 'react';

class Wallet extends React.Component {
    render() {
        let money = 20
        return(
            <p>Mon argent: {money}$</p>
        )
    }
}

export default Wallet