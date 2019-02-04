import { connect } from 'react-redux';
import EndSession from './endsession';

function mapStoreToProps(store) {
  return {
    startTime: store.timer.startTime,
    mobTimeTotal: store.mobTimeTotal.mobTimeTotal
  };
}

export default connect(mapStoreToProps)(EndSession);