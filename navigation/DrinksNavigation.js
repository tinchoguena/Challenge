import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import StartScreen from '../screens/StartScreen';
import DrinksScreen from '../screens/DrinksScreen';

const DrinksNavigator = createStackNavigator({
  Start: StartScreen,
  Drinks: DrinksScreen,
});

export default createAppContainer(DrinksNavigator);
