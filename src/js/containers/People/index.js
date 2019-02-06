import { connect } from 'react-redux';
import People from './people';

function mapStoreToProps(store) {
    return {
        people: store.people.people,
        currentDriverIndex: store.people.currentDriverIndex,
        status: store.timer.status,
        studentList: store.people.studentList,
        selectedStudent: store.people.selectedStudent
    };
}

export default connect(mapStoreToProps)(People);
