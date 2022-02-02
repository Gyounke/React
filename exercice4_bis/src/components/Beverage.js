import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCoffee} from '@fortawesome/free-solid-svg-icons';

class Beverage extends Component {
    render() {
        return(
        <div>
            <FontAwesomeIcon icon="check-square" />Your
             <FontAwesomeIcon icon="coffee" /> is hot and ready!
          </div>);
    }

}

export default Beverage