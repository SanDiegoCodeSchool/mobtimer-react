export function minutesChanged(minutes) {
  return {
    type: 'CHANGE_MINUTES',
    payload: { minutes }
  };
}
export function start(id, times) {
    
    return {
      type: 'START_TIMER',
      payload: { id }
     };
  }
export function pause() {
  return {
    type: 'PAUSE_TIMER',
  };
}
export function countdown(id, times) {
  return {
    type: 'COUNTDOWN',
    payload: { id }
  };
}
export function end() {
  return {
    type: 'STOP_COUNTDOWN',
  };
}
export function reset() {
  return {
    type: 'RESET_TIMER',
  };
}

export function playAudio() {
  return {
    type: 'PLAY_AUDIO'
  };
}