import logo from '../../logo.svg';
import React from 'react'
import Navigation from '../navigation/Navigation'

class Header extends React.Component {
    render() {
        let dateCourante = new Date();
        let tempsJavaScript = dateCourante.getTime(); 
        let tempsPHP = tempsJavaScript / 1000;

        return (
            <header className="App-header">
                <Navigation/>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Temps JavaScript: {tempsJavaScript} millisecondes
                </p>
                <p>
                    Temps PHP: {tempsPHP} secondes
                </p>
                <p>
                    Date pour humanoïdes: {dateCourante.getDate()}/{dateCourante.getMonth()}/{dateCourante.getFullYear()}
                </p>
            </header>
        )
    }
}

export default Header;