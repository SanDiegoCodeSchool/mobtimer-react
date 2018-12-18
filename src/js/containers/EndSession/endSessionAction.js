import Moment from 'moment';

export function mobSummary(minutes) {
    const mobTimeMs = Date.now() - Math.min(...minutes);
    console.log(Date.now(), Math.min(...minutes));
    const mobTimeTotal = Moment(mobTimeMs).format('mm:ss');
    console.log(mobTimeTotal);
    return {

      type: 'CALCULATE_MOB_TOTAL',
      payload: { mobTimeTotal }
    };
  }