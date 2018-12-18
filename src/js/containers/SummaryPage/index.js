import { connect } from 'react-redux';
import SummaryPage from './summaryPage';

function mapStoreToProps(store) {
  return {
    mobTimeTotal: store.mobTimeTotal.mobTimeTotal
  };
}

export default connect(mapStoreToProps)(SummaryPage);