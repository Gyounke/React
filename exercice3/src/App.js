import React, {Component} from "react"

let dateCourante = new Date();
// let millisecondes = dateCourante.getTime();

class App extends Component {
  render() {
    return (
      <p> Date courante : {dateCourante.getDate()} {dateCourante.getMonth()+1} {dateCourante.getFullYear()}  Heure actuelle : {dateCourante.getHours()}:{dateCourante.getMinutes()}:{dateCourante.getSeconds()}</p>
    )
  }
}

export default App;
