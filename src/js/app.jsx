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
import EndSession from './containers/EndSession';
import SummaryPage from './containers/SummaryPage';
//import EditName from './containers/EditName';

export default class App extends Component {
  render() {
    return (

            <Router>
                <div>
                  <Route exact path = '/' component={()=> (<div><Message/> <Timer/> <Interval/> <People/> <AudioNotification/> <EndSession/></div>)} />
                  <Route path = '/mob-summary' component= { SummaryPage } />
                </div>
            </Router>
    )
  }
}