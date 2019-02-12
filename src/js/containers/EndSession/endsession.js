import React from 'react';
import { mobSummary, changeNames } from './endSessionAction';

class Interval extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        const { dispatch, startTime, mobParticipants } = this.props;
        dispatch(mobSummary(startTime));
        dispatch(changeNames(mobParticipants));
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
