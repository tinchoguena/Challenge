import {ADD_DRINKLIST} from '../actions/drinks';
import {DELETE_LIST} from '../actions/drinks';
const initialState = {
  drinks: [],
};

const drinksReducer = (state = initialState, action) => {
  if (action.type === ADD_DRINKLIST) {
    return {...state, drinks: action.drinkList};
  }
  if (action.type === DELETE_LIST) {
    return {...state, drinks: action.drinkList};
  } else {
    return state;
  }
};

export default drinksReducer;
