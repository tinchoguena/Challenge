import React, {useState, useEffect} from 'react';
import {View, Text, Button, Image, StyleSheet, ScrollView} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Colors from '../constants/Colors';
const DrinksScreen = props => {
  const [drinks, setDrinks] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [dataStatus, setDataStatus] = useState(false);
  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=vodka')
      .then(response => response.json())
      .then(drinksObj => {
        setDrinks(drinksObj.drinks);
        //console.log(drinksObj.drinks[0]);
        setDataStatus(true);
      });
  }, []);

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
        <View style={styles.gridItem}>
          <Text key={itemData.item.name}>{itemData.item.name}</Text>
          <Image
            key={itemData.item.id}
            style={styles.imges}
            source={{uri: itemData.item.img}}
          />
        </View>
      </ScrollView>
    );
  };
  return (
    <View style={styles.screen}>
      {dataStatus ? (
        <FlatList data={drinksData} renderItem={renderList} />
      ) : (
        <Text>Cargando Datos...</Text>
      )}
    </View>
  );
};
DrinksScreen.navigationOptions = {
  headerTitle: 'Drinks List',
  headerStyle: {
    backgroundColor: Colors.primaryColor,
  },
};
const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.primaryColor,
  },
  gridItem: {
    flex: 1,
    margin: 5,
    padding: 25,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  imges: {
    width: 120,
    height: 120,
    borderRadius: 100,
    alignItems: 'flex-start',
  },
});
export default DrinksScreen;
