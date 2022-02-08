import React from 'react';

class App extends React.Component {
  render() {
    console.log(this.props);

    let dateCourante = new Date();
    let tempsJavaScript = dateCourante.getTime();
    let tempsPHP = tempsJavaScript / 1000;
    return (
      <div>
        {this.props.format === "jsTime" &&
          <p>
            Temps Javascript: {tempsJavaScript} millisecondes
          </p>
        }
        {this.props.format === "phpTime" &&
          <p>
            Temps PHP {tempsPHP} secondes
          </p>
        }
        {this.props.format === "humanTime" &&
          <p>
            Date pour humain: {dateCourante.getDate()}/{dateCourante.getMonth() + 1}/{dateCourante.getFullYear()}
          </p>
        }
      </div>
    )
  }
}

export default App;
