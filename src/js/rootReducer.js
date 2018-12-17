import { combineReducers } from 'redux';
import peopleReducer from './containers/People/peopleReducer';
import intervalReducer from './containers/Interval/intervalReducer';

const rootReducer = combineReducers({
    people: peopleReducer,
    timer: intervalReducer
});

export default rootReducer;