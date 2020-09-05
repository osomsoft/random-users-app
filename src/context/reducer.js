export function UserReducer (state, action) {
  switch(action.type) {
    case 'ADD_USERS':
      return [...state, action.users];

    default:
      return state;
  } 
}
