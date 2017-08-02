import React, { Component, PropTypes } from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';

export default class Slide extends Component {
    static propTypes = {
        component: PropTypes.string.isRequired,
        transitionName: PropTypes.string.isRequired,
        enterDelay: PropTypes.number.isRequired,
        leaveDelay: PropTypes.number.isRequired,
        slideClassName: PropTypes.string.isRequired,
        imgSrc: PropTypes.array.isRequired,
        currentIndex: PropTypes.number.isRequired
    };
    render() {
        let { imgSrc, currentIndex, component, transitionName, enterDelay, leaveDelay, slideClassName } = this.props;

        return (
            <div>
                <CSSTransitionGroup
                    component={ component }
                    transitionName={ transitionName }
                    transitionEnterTimeout={ enterDelay }
                    transitionLeaveTimeout={ leaveDelay }
                    className={ slideClassName }
                >
                    <img src={ imgSrc[currentIndex] } key={ imgSrc[currentIndex] } />
                </CSSTransitionGroup>
            </div>
        );
    }
}