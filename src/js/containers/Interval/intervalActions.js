export function minutesChanged(minutes) {
    return {
        type: 'CHANGE_MINUTES',
        payload: { minutes }
    };
}
export function start() {
    return {
        type: 'START_TIMER',
        payload: {}
    };
}
export function pause() {
    return {
        type: 'PAUSE_TIMER'
    };
}
export function countdown(currentDriver) {
    return {
        type: 'COUNTDOWN',
        payload: { currentDriver }
    };
}
export function end() {
    return {
        type: 'STOP_COUNTDOWN'
    };
}
export function reset() {
    return {
        type: 'RESET_TIMER'
    };
}

export function playAudio() {
    return {
        type: 'PLAY_AUDIO'
    };
}
