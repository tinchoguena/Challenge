import ADD_DRINKLIST from '../actions/drinks';
const initialState = {
  drinks: [],
};

const drinksReducer = (state = initialState, action) => {
  if (action == ADD_DRINKLIST) {
    return {...state, drinks: action.drinkList};
  }
  return state;
};

export default drinksReducer;
