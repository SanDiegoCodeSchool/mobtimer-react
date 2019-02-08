import React from 'react';
class SummaryPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { mobParticipants, mobTimeTotal, times } = this.props;

        function millisToMinutesAndSeconds(millis) {
            var minutes = Math.floor(millis / 60000);
            var seconds = ((millis % 60000) / 1000).toFixed(0);
            return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
        }

        return (
            <div>
                <h1>Your Total Mob Coding Session lasted {mobTimeTotal}!</h1>
                <div>
                    {mobParticipants.map(mobParticipant => (
                        <p value={mobParticipant.id} key={mobParticipant.id}>
                            {mobParticipant.name} spent{' '}
                            {millisToMinutesAndSeconds(
                                times[mobParticipant.id].total
                            )}{' '}
                            coding!
                        </p>
                    ))}
                </div>
            </div>
        );
    }
}

export default SummaryPage;
