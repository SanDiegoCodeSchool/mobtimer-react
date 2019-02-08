import { connect } from 'react-redux';
import Person from './person';

function mapStoreToProps(store) {
    return {
        mobParticipants: store.people.mobParticipants
    };
}

export default connect(mapStoreToProps)(Person);
