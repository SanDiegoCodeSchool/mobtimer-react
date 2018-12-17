import { connect } from 'react-redux';
import Message from './message';

function mapStoreToProps(store) {
  return {
    status: store.timer.status,
    currentDriverIndex: store.people.currentDriverIndex,
    people: store.people.people,
    currentDriver: store.people.currentDriver
  };
}

export default connect(mapStoreToProps)(Message);