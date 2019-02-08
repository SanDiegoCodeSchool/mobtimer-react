import React from 'react';
import Moment from 'moment';

class Timer extends React.Component {
    formatTime() {
        const { msLeft } = this.props;
        return Moment(msLeft).format('mm:ss');
    }

    render() {
        return <div className="timer">{this.formatTime()}</div>;
    }
}

export default Timer;
