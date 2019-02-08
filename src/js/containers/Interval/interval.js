import React from 'react';
import TimerControl from './timer_control';
import { minutesChanged } from './intervalActions';

class Interval extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        const { dispatch } = this.props;
        dispatch(minutesChanged(event.target.value));
    }

    render() {
        const {
            dispatch,
            minutes,
            status,
            msLeft,
            currentDriver,
            currentDriverIndex,
            mobParticipants,
            times
        } = this.props;

        return (
            <div>
                <input
                    type="number"
                    className="minutes"
                    defaultValue={minutes}
                    onChange={this.handleChange}
                />
                <TimerControl
                    dispatch={dispatch}
                    status={status}
                    msLeft={msLeft}
                    currentDriver={currentDriver}
                    currentDriverIndex={currentDriverIndex}
                    mobParticipants={mobParticipants}
                    times={times}
                />
            </div>
        );
    }
}

export default Interval;
