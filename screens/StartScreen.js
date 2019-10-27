import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';
const StartScreen = props => {
  return (
    <View style={styles.screen}>
      <View style={styles.title}>
        <Text style={styles.titleBold}>Cocktail</Text>
        <Text style={styles.titleLight}>Finder</Text>
      </View>
      <View style={styles.containerStyle}>
        <Button
          color={Colors.accentColor}
          title="Search your favourite cocktail!"
          onPress={() => {
            props.navigation.navigate({
              routeName: 'Drinks',
            });
          }}
        />
      </View>
    </View>
  );
};

StartScreen.navigationOptions = {
  headerStyle: {
    backgroundColor: Colors.primaryColor,
  },
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primaryColor,
  },
  containerStyle: {
    height: 45,
    width: '80%',
    overflow: 'hidden',
    borderRadius: 8,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: '800',
    flexDirection: 'row',
    margin: 15,
  },
  titleBold: {
    fontSize: 24,
    color: 'white',
    fontWeight: '800',
    flexDirection: 'row',
  },
  titleLight: {
    fontSize: 24,
    color: 'white',
    fontWeight: '400',
    flexDirection: 'row',
  },
});

export default StartScreen;
