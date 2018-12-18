import { combineReducers } from 'redux';
import peopleReducer from './containers/People/peopleReducer';
import intervalReducer from './containers/Interval/intervalReducer';
import endSessionReducer from './containers/EndSession/endSessionReducer';


const rootReducer = combineReducers({
    people: peopleReducer,
    timer: intervalReducer,
    mobTimeTotal: endSessionReducer
});

export default rootReducer;