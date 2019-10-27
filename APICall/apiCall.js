const handleTextChange = text => {
  if (text.length < 3) {
    return;
  }
  setLoading(true);
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${text}`)
    .then(response => response.json())
    .then(drinksObj => {
      const drinksArr = drinksObj.drinks.map(drink => {
        return {
          id: drink.idDrink,
          name: drink.strDrink,
          img: drink.strDrinkThumb,
        };
      });
      setDrinks(drinksArr);
      setLoading(false);
    });
};

export default handleTextChange;
