import React, { Component } from 'react';
import './ScrollerSection.css'
import Scroller from '../../component/Scroller/Scroller';

class ScrollerSection extends Component {
    render() {
        return (
            <div className='scroller-section-master'>
                <Scroller {...{reversed : true}} />
                <Scroller  />
                <Scroller {...{reversed : true}} />
            </div>
        );
    }
}

export default ScrollerSection;