import React, {useState, useEffect} from 'react';
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

const DrinksScreen = props => {
  const drinkText = props.navigation.getParam('nameKey');
  const [drinks, setDrinks] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [dataStatus, setDataStatus] = useState(false);
  useEffect(() => {
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkText}`,
    )
      .then(response => response.json())
      .then(drinksObj => {
        setDrinks(drinksObj.drinks);
        //console.log(drinksObj.drinks[0]);
        setDataStatus(true);
      });
  }, [drinkText]);

  const drinksData = [];

  if (dataStatus) {
    const setListsItem = () => {
      Object.values(drinks).forEach(value => {
        drinksData.push({
          name: value.strDrink,
          img: value.strDrinkThumb,
          id: value.idDrink,
        });
      });
    };
    setListsItem();
  }

  const renderList = itemData => {
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
      {dataStatus ? (
        <FlatList data={drinksData} renderItem={renderList} />
      ) : (
        <View style={styles.Loading}>
          <Text>Loading...</Text>
        </View>
      )}
    </View>
  );
};
DrinksScreen.navigationOptions = {
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
    />
  ),
  headerStyle: {
    backgroundColor: Colors.primaryColor,
  },
};
const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.primaryColor,
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
  Loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primaryColor,
    color: 'white',
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
