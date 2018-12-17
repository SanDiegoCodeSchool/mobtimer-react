import React from 'react';
import TimerControl from './timer_control';
import {minutesChanged} from './intervalActions';

class Interval extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange= this.handleChange.bind(this);
  }
  handleChange(event) {
    const {dispatch} = this.props;
    dispatch(minutesChanged(event.target.value));
  }

  render() {
    return (
      <div>
        <input type="number" className="minutes" defaultValue={this.props.minutes} onChange={this.handleChange} />
        <TimerControl dispatch={this.props.dispatch} status={this.props.status} msLeft ={this.props.msLeft} currentDriverIndex={this.props.currentDriverIndex} people={this.props.people} />
      </div>
    );
  }
};

export default Interval;