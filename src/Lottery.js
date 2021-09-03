import React, { Component } from 'react'
import LotteryBall from './LotteryBall';
import './Lottery.css';

class Lottery extends Component {
    static defaultProps = {
        title: 'Mega-Sena',
        maxBalls: 6,
        maxNum: 60
    }
    constructor(props) {
        super(props);
        this.state = { 
            nums: Array.from({length: this.props.maxBalls}) // create an array based on how many itens maxBalls have
         };
         this.generateNums = this.generateNums.bind(this);
    }
    generateNums(){
        this.setState((curState) => ({
            nums: curState.nums.map(n => Math.floor(Math.random() * this.props.maxNum) + 1) // using callback to define state
        }));       
    }
    render() { 
        return ( 
            <section className="Lottery">
                <h1>{this.props.title}</h1>
                <div>
                    {this.state.nums.map(n => <LotteryBall num={n}/>)}
                </div>
                <button onClick={this.generateNums}>Sortear números</button>
            </section>
         );
    }
}
 
export default Lottery;