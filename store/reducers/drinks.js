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
      return {...state, text: action.text};
    default:
      return state;
  }
};

export default drinksReducer;
