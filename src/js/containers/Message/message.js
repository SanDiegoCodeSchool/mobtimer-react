import React from 'react';

class Message extends React.Component {
    getMessageForState(status, currentDriver) {
        var message = 'Get ready for some mob programming!';

        if (currentDriver) {
            switch (status) {
                case 'idle':
                    message =
                        'Grab the keyboard ' +
                        currentDriver.name +
                        ". Don't forget to change the keyboard language.";
                    break;
                case 'running':
                    message =
                        'Time to write some code ' +
                        currentDriver.name +
                        '! Try not to think too much.';
                    break;
                case 'paused':
                    message = 'You deserve a break!';
                    break;
            }
        }
        return message;
    }
    render() {
        const { status, currentDriver } = this.props;
        var message = this.getMessageForState(status, currentDriver);
        return <p>{message}</p>;
    }
}

export default Message;
