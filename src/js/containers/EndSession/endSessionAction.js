import Moment from 'moment';
import axios from 'axios';

export function mobSummary(minutes) {
    const mobTimeMs = Date.now() - Math.min(...minutes);
    const mobTimeTotal = Moment(mobTimeMs).format('mm:ss');
    return {
        type: 'CALCULATE_MOB_TOTAL',
        payload: { mobTimeTotal }
    };
}

export function sendTimes(times) {
    return {
        type: 'SEND_TIMES',
        payload: { times }
    };
}
export function postResults(times, mobParticipants) {
    return {
        type: 'POST_RESULTS',
        payload: axios.post('/postResults', {
            times,
            mobParticipants,
            mobTimeTotal
        })
        .then(response => response.data)
    };
}

//axios.post('/mob-summary').then(response => response.data)