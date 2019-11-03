import axios from 'axios';
const fetchDrinks = text => {
  return axios
    .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${text}`)
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
    })
    .catch(function(error) {
      console.log(error);
    });
};

// const fetchDrinks = text => {
//   return fetch(
//     `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${text}`,
//   )
//     .then(response => response.json())
//     .then(drinksObj => {
//       const drinksArr = drinksObj.drinks.map(drink => {
//         return {
//           id: drink.idDrink,
//           name: drink.strDrink,
//           img: drink.strDrinkThumb,
//         };
//       });
//       return drinksArr;
//     });
// };

export default fetchDrinks;
