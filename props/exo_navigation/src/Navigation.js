import React from 'react';
import './navigation.sass'

class Navigation extends React.component {

    navigation = (destination) => {
       this.props.onNavigation(destination);
    }

    render() {
        return (
            <nav>
                <button onClick = {() => this.navigation('accueil')}>Accueil
                </button>
                <button onClick = {() => this.navigation('heure')}>Heure
                </button>
                <button onClick = {() => this.navigation('configuration')}>Configuration
                </button>
            </nav>
        )
    }
}

export default Navigation