import { connect } from 'react-redux';
import EndSession from './endsession';

function mapStoreToProps(store) {
    return {
        times: store.timer.times,
        startTime: store.timer.startTime,
        minutes: store.timer.minutes,
        mobTimeTotal: store.mobTimeTotal.mobTimeTotal,
        mobParticipants: store.people.mobParticipants
    };
}

export default connect(mapStoreToProps)(EndSession);
