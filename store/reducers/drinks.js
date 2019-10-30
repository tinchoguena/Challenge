import {ADD_DRINKLIST} from '../actions/drinks';
import {DELETE_LIST} from '../actions/drinks';
import {ADD_TEXTKEY} from '../actions/drinks';

const initialState = {
  drinks: [],
  textKey: '',
};

const drinksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DRINKLIST:
      return {...state, drinks: action.drinkList};
    case DELETE_LIST:
      return {...state, drinks: action.drinkList};
    case ADD_TEXTKEY:
      if (action.key.length >= 3) {
        return {...state, textKey: action.key};
      }
      if (action.key === '') {
        return {...state, textKey: action.key};
      } else {
        null;
      }
    default:
      return state;
  }
};

export default drinksReducer;

// if (action.type === ADD_DRINKLIST) {
//   return {...state, drinks: action.drinkList};
// }
// if (action.type === DELETE_LIST) {
//   return {...state, drinks: action.drinkList};
// } else {
//   return state;
// }
