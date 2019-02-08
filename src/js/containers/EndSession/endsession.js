import React from 'react';
import { mobSummary, sendTimes } from './endSessionAction';

class Interval extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event) {
        const { dispatch, startTime, times } = this.props;
        dispatch(mobSummary(startTime));
        dispatch(sendTimes(times));
    }

    render() {
        return (
            <div>
                <a href={'/#/mob-summary'}>
                    <button onClick={this.handleClick}>End Mob Session</button>
                </a>
            </div>
        );
    }
}

export default Interval;
