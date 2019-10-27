import React from 'react';
import DrinksNavigator from './navigation/DrinksNavigation';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import drinksReducer from './store/reducers/drinks';

const store = createStore(drinksReducer);

const App = () => {
  return (
    <Provider store={store}>
      <DrinksNavigator />
    </Provider>
  );
};
export default App;
