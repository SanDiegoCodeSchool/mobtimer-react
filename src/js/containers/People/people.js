import React from 'react';
import PersonForm from './person_form';
import Person from '../Person/person';
import {shuffle, skipDriver} from './peopleActions';
import {reset, pause} from '../Interval/intervalActions';

class People extends React.Component {
  componentDidUpdate(){
    const { dispatch, status } = this.props;
    if(status == 'paused') {
      clearInterval(window.timer);
      if(window.timer) clearInterval(window.timer);
    }
  }

  handleClick() {
    const { dispatch, people} = this.props;
    var previousPeople = [...people];
      previousPeople.sort(function(a, b) {
        return 0.5 - Math.random();
      });
      dispatch(shuffle(previousPeople));
    }

  handleSkip() {
    const { currentDriverIndex,people, dispatch } = this.props
    dispatch(reset());
    dispatch(pause());
    dispatch(skipDriver(currentDriverIndex, people))
  }

  shuffleButton() {
    return <button onClick={this.handleClick.bind(this)}>Shuffle</button>;
  }

  skipButton() {
    return <button onClick={this.handleSkip.bind(this)}>Skip</button>;
  }
  
  render() {
    const { people, dispatch, currentDriverIndex, studentList} = this.props;
    var peopleList = [];
    var shuffleButton = '';
    var skipButton = '';

  people.map(function(people, index) {
   var isCurrent = index == this.props.currentDriverIndex;
      peopleList.push(<Person key={index} index={index} name={people} dispatch={dispatch} isCurrent={isCurrent}/>);}
      .bind(this));

    if (people.length > 1) {
      shuffleButton = this.shuffleButton();
      skipButton = this.skipButton();
    }

    return (
      <div>
        <h2>People!</h2>
        <ul className="people">
          {peopleList}
        </ul>
        <div className="people-buttons">
          {shuffleButton} {skipButton}
        </div>
        <PersonForm
        dispatch = {dispatch} 
        studentList = {studentList}
        />
      </div>
    );
  }
};

export default People;