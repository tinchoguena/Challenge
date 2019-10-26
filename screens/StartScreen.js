import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const StartScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Buscar cocktail</Text>
      <Button
        title="Go to Drinks!"
        onPress={() => {
          props.navigation.navigate('Drinks');
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
  },
});
export default StartScreen;
