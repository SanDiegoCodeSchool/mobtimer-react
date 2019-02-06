import { connect } from 'react-redux';
import People from './people';

function mapStoreToProps(store) {
    return {
        mobParticipants: store.people.mobParticipants,
        currentDriverIndex: store.people.currentDriverIndex,
        status: store.timer.status,
        apiData: store.people.apiData,
        selectedStudent: store.people.selectedStudent
    };
}

export default connect(mapStoreToProps)(People);
