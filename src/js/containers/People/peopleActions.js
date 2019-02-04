import axios from 'axios';

export function updatePeople(id) {
    return {
      type: 'UPDATE_PEOPLE',
      payload: { id },
    };
  }
export function removePeople(index) {
  return {
    type: 'REMOVE_PEOPLE',
    payload: { index },
  };
}
export function shuffle(previousPeople) {
  return {
    type: 'SHUFFLE_PEOPLE',
    payload:{ previousPeople }
  };
}
export function skipDriver(currentDriverIndex, people) {
  
  let nextDriverIndex = currentDriverIndex + 1;
  if (nextDriverIndex >= people.length) {
    nextDriverIndex = 0;
  }
  return {
    type: 'SKIP_PEOPLE',
    payload:{ nextDriverIndex }
  };
}
export function getStudents() {
  return {
    type: 'GET_STUDENTS',
    payload: axios
    .get('/students')
    .then(response => response.data)
  };
}
//   export function selectStudent(name) {
//     return {
//       type: 'SELECT_STUDENT',
//       payload: { name }
//     };
// }
