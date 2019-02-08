import Moment from 'moment';

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
