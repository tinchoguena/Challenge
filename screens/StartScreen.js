import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';
import Input from '../components/Input';
const StartScreen = props => {
  const [drinkText, setDrinkTest] = useState('');
  return (
    <View style={styles.screen}>
      <View style={styles.title}>
        <Text style={styles.title}>Cocktail</Text>
        <Text style={styles.title2}>Finder</Text>
      </View>

      <Input
        style={styles.input}
        blurOnSubmit
        placeholder="Search your favourite cocktail!"
        onChangeText={text => setDrinkTest(text)}
        value={drinkText}
      />
      <Button
        color={'white'}
        title="Get them!"
        onPress={() => {
          props.navigation.navigate({
            routeName: 'Drinks',
            params: {nameKey: drinkText},
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primaryColor,
  },
  input: {
    width: '80%',
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: '800',
    flexDirection: 'row',
  },
  title2: {
    fontSize: 24,
    color: 'white',
    fontWeight: '400',
    flexDirection: 'row',
  },
});

export default StartScreen;
