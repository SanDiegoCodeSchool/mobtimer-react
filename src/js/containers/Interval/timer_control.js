import React from 'react';
import {
    start,
    pause,
    reset,
    end,
    countdown,
    playAudio
} from './intervalActions';
import { skipDriver } from '../People/peopleActions';

class TimerControl extends React.Component {
    componentDidUpdate() {
        const {
            msLeft,
            dispatch,
            status,
            currentDriverIndex,
            mobParticipants
        } = this.props;
        if (msLeft < 0) {
            dispatch(reset());
            dispatch(skipDriver(currentDriverIndex, mobParticipants));
            dispatch(playAudio());
            if (window.timer) clearInterval(window.timer);
        }
        if (status == 'paused') {
            if (window.timer) clearInterval(window.timer);
        }
    }

    handleStart() {
        const { dispatch, currentDriver, times } = this.props;
        dispatch(start(currentDriver, times));
        window.timer = setInterval(myTimer, 500);
        function myTimer() {
            dispatch(countdown(currentDriver, times));
        }
    }

    handlePause() {
        const { dispatch } = this.props;
        dispatch(pause());
    }

    handleReset() {
        const { dispatch } = this.props;
        dispatch(reset());
    }

    playButton() {
        return <button onClick={this.handleStart.bind(this)}>Start</button>;
    }

    pauseButton() {
        return <button onClick={this.handlePause.bind(this)}>Pause</button>;
    }

    resetButton() {
        return <button onClick={this.handleReset.bind(this)}>Reset</button>;
    }

    render() {
        const { status } = this.props;
        var mainButton = '';
        var resetButton = '';

        if (status == 'idle' || status == 'paused') {
            mainButton = this.playButton();
        } else if (status == 'running') {
            mainButton = this.pauseButton();
        }

        if (status == 'paused') {
            resetButton = this.resetButton();
        }

        return (
            <span>
                {mainButton}
                {resetButton}
            </span>
        );
    }
}

export default TimerControl;
