import React from 'react'
import Photo from './images/image-jeremy.png'

class Person extends React.Component {
    render() {
        return (
            <div id="personCard">
                <div id="part1">
                    <img src={Photo} alt="" />
                    <p>Report for</p>
                    <h2>Jeremy Robson</h2>
                </div>
                <div id="part2">
                    <p>Daily</p>
                    <p>Weekly</p>
                    <p>Monthly</p>
                </div>
            </div>
        )
    }
}

export default Person