export const ADD_DRINKLIST = 'ADD_DRINKLIST';
export const DELETE_LIST = 'DELETE_LIST';
export const ADD_TEXTKEY = 'ADD_TEXTKEY';

export const addDrinkList = drinkList => {
  return {type: ADD_DRINKLIST, drinkList: drinkList};
};

export const deleteDrinkList = drinkList => {
  return {type: DELETE_LIST, drinkList: drinkList};
};

export const addTextKey = key => {
  return {type: ADD_TEXTKEY, textKey: key};
};
