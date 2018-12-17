import { connect } from 'react-redux';
import Person from './person';

function mapStoreToProps(store) {
  return {
   people: store.people.people
  };
}

export default connect(mapStoreToProps)(Person);