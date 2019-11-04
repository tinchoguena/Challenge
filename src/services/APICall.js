import React from 'react';
import {useDispatch} from 'react-redux';
import {setLoading} from '../store/actions/drinks';
const dispatch = useDispatch();
const fetchDrinksFunc = text => {
  return fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${text}`,
  )
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
      return drinksArr;
      //dispatch(addDrinkList(drinksArr));
    })
    .catch(() => console.log('error'));
};
export default fetchDrinksFunc;
