import logo from '../../logo.svg';
import React from 'react'
import Navigation from '../navigation/Navigation'
import DisplayTime from '../../DisplayTime'

class Header extends React.Component {

    currentPage = "heure"

    state = {
        formatTime: "phpTime"
    }

    onNavigationParent = (destination) => {
        this.currentPage = destination;
    }
    handleClick = (format) => {
        console.log(format);
        this.setState({
            formatTime: format
        })
    }

    render() {

        return (
            <header className="App-header">
                <Navigation onNavigation={this.onNavigationParent} />
                <img src={logo} className="App-logo" alt="logo" />
                {this.currentPage}
                {this.currentPage == "accueil" &&
                    <p>Coucou</p>
                }
                {this.currentPage == "heure" &&
                    <div>
                        <DisplayTime format={this.state.formatTime} />
                        <button onClick={() => this.handleClick('jsTime')}>JavaScript</button>
                        <button onClick={() => this.handleClick('phpTime')}>PHP</button>
                        <button onClick={() => this.handleClick('humanTime')}>Humain</button>
                    </div>
                }
            </header>
        )
    }
}

export default Header;