/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Colors from '../constants/Colors';
import addDrinkList from '../store/actions/drinks';

const DrinksScreen = props => {
  const [drinks, setDrinks] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const storeDrinks = useSelector(state => state.drinks);
  const dispatch = useDispatch();
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
        dispatch(addDrinkList(drinksArr));
        //setDrinks(drinksArr);
        setLoading(false);
      });
  };

  useEffect(() => {
    props.navigation.setParams({handleTextChange});
  }, []);

  const renderList = itemData => {
    console.log(storeDrinks);
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.gridItem}>
            <Image
              key={itemData.item.id}
              style={styles.imges}
              source={{uri: itemData.item.img}}
            />
            <Text style={styles.imgTitle} key={itemData.item.name}>
              {itemData.item.name}
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  };
  return (
    <View style={styles.screen}>
      {loading ? (
        <Text style={styles.loadingText}>Loading...</Text>
      ) : (
        <FlatList data={storeDrinks} renderItem={renderList} />
      )}
    </View>
  );
};

DrinksScreen.navigationOptions = ({navigation}) => ({
  headerTitle: (
    <TextInput
      placeholder="Search"
      style={{
        height: 40,
        borderColor: 'white',
        borderWidth: 1,
        width: '90%',
        borderRadius: 4,
        backgroundColor: 'white',
      }}
      onChangeText={navigation.getParam('handleTextChange')}
    />
  ),
  headerStyle: {
    backgroundColor: Colors.primaryColor,
  },
});

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.primaryColor,
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  gridItem: {
    flex: 1,
    margin: 5,
    padding: 25,
    alignSelf: 'flex-start',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    flexDirection: 'row',
  },
  imges: {
    width: 100,
    height: 100,
    borderRadius: 100,
    alignItems: 'flex-start',
  },
  loadingText: {
    color: 'black',
    fontSize: 24,
  },
  imgTitle: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    fontSize: 22,
    fontWeight: '600',
    color: '#323030',
    marginTop: 40,
    marginLeft: 20,
  },
  input: {
    width: '80%',
    textAlign: 'center',
  },
});
export default DrinksScreen;
