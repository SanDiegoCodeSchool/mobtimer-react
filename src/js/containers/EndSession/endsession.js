import React from 'react';
import {mobSummary} from './endSessionAction';

class Interval extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick= this.handleClick.bind(this);
      }
      handleClick(event) {
        const {dispatch, startTime} = this.props;
        dispatch(mobSummary(startTime));
      }
    
      render() {
          const { mobTimeTotal } = this.props;
        return (
          <div>
              <h1>{mobTimeTotal}</h1>
              <a href={"/#/mob-summary"}><button onClick = {this.handleClick}>End Mob Session</button></a>
          </div>
        );
      }
    };
    
    export default Interval;