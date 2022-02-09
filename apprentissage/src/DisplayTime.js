// import React from 'react'
import React, {useState, useEffect} from 'react'

// class DisplayTime extends React.Component {

//     state = {
//         dateCourante : new Date()
//     };

//     componentDidMount() {
//         setInterval(() => {
//             this.setState({
//                 dateCourante : new Date()
//             })
//         }, 1000)
//     }

//     render() {
//         let dateCourante = new Date();
//         let tempsJavaScript = this.state.dateCourante.getTime();
//         let tempsPHP = tempsJavaScript / 1000;

//         return (
//             <div>
//                 { this.props.format === 'jsTime' &&
//                 <p>
//                     Temps JavaScript: {tempsJavaScript} millisecondes
//                 </p>
//                 }
//                 { this.props.format === 'phpTime' &&
//                 <p>
//                     Temps PHP: {tempsPHP} secondes
//                 </p>
//                 }
//                 { this.props.format === 'humanTime' &&
//                 <p>
//                     Date pour humanoïdes: {dateCourante.getDate()}/{dateCourante.getMonth()}/{dateCourante.getFullYear()}
//                 </p>
//                 }
//             </div>
//         )
//     }
// }

function DisplayTime () {
    let [tempsJavaScript, setTempsJavaScript] = useState(new Date().getTime());

    setInterval(() => {
        setTempsJavaScript(new Date().getTime());
    }, 1000);

    useEffect(() => {
        document.title = tempsJavaScript;
    });

    return(
        <div>
            <p>
                Temps Javascript: {tempsJavaScript} millisecondes
            </p>
            <button onClick={() => setTempsJavaScript(new Date().getTime())}>Mettre à jour</button>
        </div>
    );
}

export default DisplayTime