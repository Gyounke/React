import React, { Component } from 'react'


export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expend navbar-dark bg-danger mb-3 y-0">
                    <div className="container">
                        <a href="/" className="navbar-brand">Liste de contact</a>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item"><a href="/" className="nav-linlk">Accueil</a></li>
                            <i className="fab fa-accessible-icon bg-primary"></i>

                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}


