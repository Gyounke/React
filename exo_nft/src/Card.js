import React from 'react';
import Img from './Img';
import Text from './Text';


class Card extends React.Component {
    render() {
        return (
            <section className="row justify-content-center align-items-center" >
                <div className="col-3 mt-2 p-4 " id="card">
                    <Img />
                    <Text />
                </div>

            </section>

        )
    }
}

export default Card;