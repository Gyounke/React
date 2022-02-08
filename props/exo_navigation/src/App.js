import React from 'react';
import Navigation from './Navigation.js'

class App extends React.Component {

  currentPage = "heure"

  onNavigationParent = (destination) => {
    this.currentPage = destination;
    console.log(this.currentPage);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navigation onNavigation={this.onNavigationParent} />
          {this.currentPage}
          {this.currentPage == "accueil" &&
            <DemoComponent />
          }
          {this.currentPage == "heure" &&
            <div>
              <DisplayTime format="phpTime" />
            </div>
          }
        </header>
      </div>
    )
  }
}

export default App;
