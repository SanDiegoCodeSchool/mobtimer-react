import React from 'react';
import PersonForm from './person_form';
import Person from '../Person/person';
import EditName from '../EditName';
import { shuffle, skipDriver } from './peopleActions';
import { reset, pause } from '../Interval/intervalActions';

class People extends React.Component {
    componentDidUpdate() {
        const { status } = this.props;
        if (status == 'paused') {
            clearInterval(window.timer);
            if (window.timer) clearInterval(window.timer);
        }
    }

    handleClick() {
        const { dispatch, mobParticipants, currentDriverIndex } = this.props;
        var previousPeople = [...mobParticipants];
        previousPeople.sort(function(a, b) {
            return 0.5 - Math.random();
        });
        dispatch(shuffle(previousPeople, currentDriverIndex));
    }

    handleSkip() {
        const { currentDriverIndex, mobParticipants, dispatch } = this.props;
        dispatch(reset());
        dispatch(pause());
        dispatch(skipDriver(currentDriverIndex, mobParticipants));
    }

    shuffleButton() {
        return <button onClick={this.handleClick.bind(this)}>Shuffle</button>;
    }

    skipButton() {
        return <button onClick={this.handleSkip.bind(this)}>Skip</button>;
    }

    render() {
        const { mobParticipants, dispatch, apiData } = this.props;
        var peopleList = [];
        var shuffleButton = '';
        var skipButton = '';

        const list = mobParticipants.map(mobParticipant => mobParticipant.name);

        list.map(
            function(name, index, id) {
                var isCurrent = index == this.props.currentDriverIndex;
                peopleList.push(
                    <Person
                        key={index}
                        index={index}
                        //id={id}
                        name={name}
                        dispatch={dispatch}
                        isCurrent={isCurrent}
                    />
                );
            }.bind(this)
        );

        if (mobParticipants.length > 1) {
            shuffleButton = this.shuffleButton();
            skipButton = this.skipButton();
        }

        return (
            <div>
                <h2>Participants!</h2>
                <EditName />
                <ul className="people">{peopleList}</ul>
                <div className="people-buttons">
                    {shuffleButton} {skipButton}
                </div>
                <PersonForm dispatch={dispatch} apiData={apiData} />
            </div>
        );
    }
}

export default People;
