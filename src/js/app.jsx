import React, { Component } from 'react';
import { 
  HashRouter as Router, 
  Route 
} from 'react-router-dom';

import People from './containers/People';
import Timer from './containers/Timer';
import Interval from './containers/Interval';
import Message from './containers/Message';
import AudioNotification from './containers/Audio';

export default class App extends Component {
  render() {
    return (
        <div>
            <h1>Mob Timer</h1>
            <Message />
            <Timer />
            <Interval />
            <People />
            <AudioNotification />
        </div>
    )
  }
}