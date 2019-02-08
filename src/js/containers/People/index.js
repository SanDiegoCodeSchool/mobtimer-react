import { connect } from 'react-redux';
import People from './people';

function mapStoreToProps(store) {
    return {
        mobParticipants: store.people.mobParticipants,
        currentDriverIndex: store.people.currentDriverIndex,
        currentDriver: store.people.currentDriver,
        status: store.timer.status,
        apiData: store.people.apiData,
        selectedStudent: store.people.selectedStudent,
        msLeft: store.timer.msLeft
    };
}

export default connect(mapStoreToProps)(People);
