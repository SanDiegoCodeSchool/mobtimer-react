import { connect } from 'react-redux';
import EditName from './editName';

function mapStoreToProps(store) {
    return {
        mobParticipants: store.people.mobParticipants,
        editStatus: store.people.editStatus,
        editName: store.people.editName,
        editIndex: store.people.editIndex,
        editObject: store.people.editObject
    };
}

export default connect(mapStoreToProps)(EditName);