import { connect } from 'react-redux';
import AudioNotification from './audio_notification';

function mapStoreToProps(store) {
  return {
    playNotification: store.timer.playNotification
  };
}

export default connect(mapStoreToProps)(AudioNotification);