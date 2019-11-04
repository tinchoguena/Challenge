export const ADD_DRINKLIST = 'ADD_DRINKLIST';
export const DELETE_LIST = 'DELETE_LIST';
export const ADD_TEXTKEY = 'ADD_TEXTKEY';
export const SET_LOADING = 'SET_LOADING';

export const addDrinkList = drinkList => {
  return {type: ADD_DRINKLIST, drinkList: drinkList};
};

export const deleteDrinkList = drinkList => {
  return {type: DELETE_LIST, drinkList: drinkList};
};

export const addTextKey = text => {
  return {type: ADD_TEXTKEY, text};
};
export const setLoading = bool => {
  return {type: SET_LOADING, bool};
};

///ACTION CREATOR

export const fetchDrinks = text => {
  return dispatch => {
    dispatch(setLoading(true));

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${text}`)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(setLoading(false));
        return response;
      })
      .then(response => response.json())
      .then(drinksObj => {
        const drinksArr = drinksObj.drinks.map(drink => {
          return {
            id: drink.idDrink,
            name: drink.strDrink,
            img: drink.strDrinkThumb,
          };
        });
        dispatch(addDrinkList(drinksArr));
      })
      .catch(() => console.log('error'));
  };
};
