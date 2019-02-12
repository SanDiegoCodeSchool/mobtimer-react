import { connect } from 'react-redux';
import Person from './person';

function mapStoreToProps(store) {
    return {
        mobParticipants: store.people.mobParticipants,
        editStatus: store.people.editStatus,
        editName: store.people.editName,
        editIndex: store.people.editIndex
    };
}

export default connect(mapStoreToProps)(Person);
