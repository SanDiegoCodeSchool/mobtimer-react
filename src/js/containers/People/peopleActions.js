import axios from 'axios';

export function updatePeople(selectedStudent, msLeft) {
    return {
        type: 'UPDATE_PEOPLE',
        payload: { selectedStudent, msLeft }
    };
}
export function updateSelected(value) {
    return {
        type: 'UPDATE_SELECTED',
        payload: { value }
    };
}
export function removePeople(index) {
    return {
        type: 'REMOVE_PEOPLE',
        payload: { index }
    };
}
export function shuffle(previousPeople, currentDriverIndex) {
    return {
        type: 'SHUFFLE_PEOPLE',
        payload: { previousPeople, currentDriverIndex }
    };
}
export function skipDriver(currentDriverIndex, mobParticipants) {
    let nextDriverIndex = currentDriverIndex + 1;
    let mobSize = mobParticipants.length;

    if (nextDriverIndex >= mobSize) {
        nextDriverIndex = 0;
    }
    return {
        type: 'SKIP_PEOPLE',
        payload: { nextDriverIndex }
    };
}
export function getStudents() {
    return {
        type: 'GET_STUDENTS',
        payload: axios.get('/students').then(response => response.data)
    };
}
