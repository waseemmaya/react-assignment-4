import React, { Component } from 'react';

import BulbOn from "./BulbOn";
import BulbOff from "./BulbOff";
import BulbBroken from "./BulbBroken";


import "./css.css"



import "./css.css"

class DefaultBulb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bulb : false,
            breakBulb: false
        }
    }
    render() {
        const { bulb, breakBulb,  } = this.state;
        return (
            <div className="container">
                {!bulb && !breakBulb && < BulbOff turnOn={this.turnOn} turnOff={this.turnOff} BulbBroken={this.BulbBroken} />}
                {bulb && !breakBulb && < BulbOn turnOn={this.turnOn} turnOff={this.turnOff} BulbBroken={this.BulbBroken} />}
                {breakBulb && < BulbBroken BulbBroken={this.BulbBroken} turnOn={this.turnOn} turnOff={this.turnOff} />}
            </div>
        );
    }

    turnOn = () => {
        this.setState({
            bulb: true,
            breakBulb: false
        })
    }

    turnOff = () => {
        this.setState({
            bulb: false,
            breakBulb: false
        })
    }

    BulbBroken = () => {
        this.setState({
            bulb : false,
            breakBulb: true,
            tordo: true
        })
        
    }


}

export default DefaultBulb;