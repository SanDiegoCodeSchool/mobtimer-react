export function updatePeople(name) {
    return {
      type: 'UPDATE_PEOPLE',
      payload: { name },
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
  