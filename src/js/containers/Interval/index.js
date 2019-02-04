import { connect } from 'react-redux';
import Interval from './interval';

function mapStoreToProps(store) {
  return {
    minutes: store.timer.minutes,
    msLeft: store.timer.msLeft,
    end: store.timer.end,
    playNotification: store.timer.playNotification,
    status: store.timer.status,
    currentDriverIndex: store.people.currentDriverIndex,
    currentDriver: store.people.currentDriver,
    people: store.people.people,
    playNotification: store.timer.playNotification,
    times: store.timer.times
  };
}

export default connect(mapStoreToProps)(Interval);