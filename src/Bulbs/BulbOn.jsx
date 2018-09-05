import React, { Component } from 'react';
import onImg from './onBulb.jpg';
import "./css.css"

class BulbOn extends Component {
    constructor(props) {
        super(props);
        this.state ={

        }
    }
    render() { 
        return ( 
            <div className="container">
            <div>
               <img src={onImg} className="img" alt="onBulb" />
            </div>
            <div className="text-center">
            <button className="btn btn-success btn-lg mr-3" onClick={this.props.turnOn}>
                    Turn On
                </button>
                <button className="btn btn-info btn-lg mr-3" onClick={this.props.turnOff}>
                    Turn Off
                </button>
                <div className="text-center">
            <button className="btn btn-warning btn-lg mt-3" onClick={this.props.BulbBroken}>
                    Break Bulb
                </button>
            </div>
            </div>
            </div>
         );
    }
}
 
export default BulbOn;