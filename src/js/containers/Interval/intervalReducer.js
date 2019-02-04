import Moment from 'moment';
import _ from 'lodash';

const defaultState = {
    minutes: 0,
    msLeft: 0,
    end: 0,
    playNotification: false,
    status: 'idle',
    startTime: [],
    times: {}
};

export default function intervalReducer(state = defaultState, action) {
    const { type, payload } = action;
    switch (type) {
        case 'CHANGE_MINUTES': {
            return {
                ...state,
                minutes: payload.minutes
            };
        }
        case 'START_TIMER': {
            let userTotal = parseInt(
                _.get(state, `state.times${[payload.id]}.total`, 0),
                10
            );
            return {
                ...state,
                status: 'running',
                end:
                    state.status == 'idle'
                        ? Moment().add(state.minutes, 'minutes')
                        : Moment().add(state.msLeft, 'milliseconds'),
                playNotification: false,
                startTime: [...state.startTime, Date.now()],
                times: {
                    ...state.times,
                    [payload.id]: { total: userTotal }
                }
            };
        }
        case 'PAUSE_TIMER': {
            return {
                ...state,
                status: 'paused'
            };
        }
        case 'COUNTDOWN': {
            //let userTotal = parseInt(_.get(state, `state.times${[payload.id]}.total`, 0), 10);
            // let result = [];
            // result.push(userTotal);
            // console.log(userTotal,result);
            return {
                ...state,
                msLeft: state.end.diff(Moment(), 'milliseconds'),
                times: Object.assign(state.times, {
                    [payload.id]: { total: state.times[payload.id] + 500 }
                })
            };
        }
        case 'STOP_COUNTDOWN': {
            return {
                ...state
            };
        }
        case 'RESET_TIMER': {
            return {
                ...state,
                status: 'idle',
                end: Moment().add(state.minutes, 'minutes'),
                msLeft: state.minutes * 60 * 1000
            };
        }
        case 'PLAY_AUDIO': {
            return {
                ...state,
                playNotification: true
            };
        }
        default: {
            return state;
        }
    }
}
