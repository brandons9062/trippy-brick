import React, { Component } from 'react';
import './App.css';
import Ball from './components/Ball';
import Brick from './components/Brick';

const KEY = {
    LEFT: 37,
    RIGHT: 39,
    SPACE: 32
}

class App extends Component {

    constructor(){
        super();
        this.state = {
            screen: {
                width: window.innerWidth,
                height: window.innerHeight,
                ratio: window.devicePixelRatio || 1
            },
            context: null,
            keys: {
                left: 0,
                right: 0,
                space: 0
            },
            level: 1,
            ballCount: 1,
            ballIncrease: 0
        }
        this.bricks = []
        this.balls = []
    }
    
    handleKeys(value, e){
        let keys = this.state.keys
        if(e.keyCode === KEY.LEFT) {keys.left = value}
        if(e.keyCode === KEY.RIGHT) {keys.right = value}
        if(e.keyCode === KEY.SPACE) {keys.space = value}
        this.setState({
            keys: keys
        })
    }
    
    handleResize(value, e){
        this.setState({
            screen: {
                width: window.innerWidth,
                height: window.innerHeight,
                ratio: window.devicePixelRatio || 1,
            }
        })
    }
    
    componentDidMount(){
        window.addEventListener('keyup', this.handleKeys.bind(this, false))
        window.addEventListener('keydown', this.handleKeys.bind(this, true))
        window.addEventListener('resize', this.handleResize.bind(this, false))
        
        const context = this.refs.canvas.getContext('2d');
        this.setState({context: context})
        
        
        
    }
    
    render() {
        return (
            <div>
                Game here
            </div>
        );
    }
}

export default App;
