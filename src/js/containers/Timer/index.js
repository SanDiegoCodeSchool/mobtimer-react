import { connect } from 'react-redux';
import Timer from './timer';

function mapStoreToProps(store) {
    return {
        msLeft: store.timer.msLeft
    };
}

export default connect(mapStoreToProps)(Timer);
