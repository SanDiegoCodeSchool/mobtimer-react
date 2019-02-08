import { connect } from 'react-redux';
import SummaryPage from './summaryPage';

function mapStoreToProps(store) {
    return {
        mobTimeTotal: store.mobTimeTotal.mobTimeTotal,
        mobParticipants: store.people.mobParticipants,
        times: store.timer.times
    };
}

export default connect(mapStoreToProps)(SummaryPage);
