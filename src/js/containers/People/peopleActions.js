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
export function editName(index, name, id) {
    return {
        type: 'EDIT_NAME',
        payload: { index, name, id }
    };
}
export function updateName(value) {
    return {
        type: 'UPDATE_NAME',//updates the editName in state
        payload: { value }
    };
}
export function newNickname(editName, editIndex) {
    return {
        type: 'NEW_NICKNAME',//saves the new nickname into state
        payload: { editName, editIndex }
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
