import React, { Component } from 'react';
import { render } from 'react-dom';
import Slide from '../components/Slide.js';
import '../css/style.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgSrc: [
                'https://s1.sonkwo.com/FhXx9C5gqykP4UUJHPKfpS1cexVP',
                'http://7fvk4m.com1.z0.glb.clouddn.com/Fjn9lT9RdzW1dpIJ_7vSrxB4UKNB',
                'http://7fvk4m.com1.z0.glb.clouddn.com/FsDTCVnB9DYkWF-m0p7zNdVfadTg'
            ],
            currentIndex: 0
        };
        this.timer = null;
    }
    componentDidMount() {
        this.timer = setInterval(() => {
            let currentIndex = this.state.currentIndex;
            currentIndex++;
            if (currentIndex > this.state.imgSrc.length - 1) {
                currentIndex = 0;
            }
            this.setState({
                currentIndex
            });
        }, 3000)
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    render() {
        let { currentIndex, imgSrc } = this.state;
        return (
            <div>
                <Slide
                    component='div'
                    transitionName="slide"
                    enterDelay={ 1000 }
                    leaveDelay={ 1000 }
                    imgSrc={ imgSrc }
                    currentIndex = { currentIndex }
                    slideClassName="slide-div" />
            </div>
        );
    }
}

render(<App />, document.getElementById('root'));