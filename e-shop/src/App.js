import React from 'react';
import Wallet from './contents/Wallet'
import Boutique from './contents/Boutique'
import Basket from './contents/Basket'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Wallet />
          <Boutique />
          <Basket />
        </header>
      </div>
    )
  }
}

export default App;
