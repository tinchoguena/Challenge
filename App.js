import React from 'react';
import DrinksNavigator from './src/navigation/DrinksNavigation';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import drinksReducer from './src/store/reducers/drinks';
import thunk from 'redux-thunk';

const store = createStore(drinksReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <DrinksNavigator />
    </Provider>
  );
};
export default App;
