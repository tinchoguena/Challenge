import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const StartScreen = props => {
  return (
    <LinearGradient
      colors={['#C81691', '#E33D32']}
      start={{x: 1, y: 0}}
      end={{x: 0, y: 1}}
      style={styles.linearGradient}>
      <View style={styles.screen}>
        <Icon name="glass" size={40} color="white" />
        <View style={styles.title}>
          <Text style={styles.titleBold}>Cocktail</Text>
          <Text style={styles.titleLight}>Finder</Text>
        </View>
        <View style={styles.containerStyle}>
          <View style={{marginLeft: 12}}>
            <Icon name="search" size={25} color="#C81691" />
          </View>
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
    </LinearGradient>
  );
};

StartScreen.navigationOptions = {
  header: null,
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linearGradient: {
    flex: 1,
  },
  containerStyle: {
    height: 45,
    width: '90%',
    overflow: 'hidden',
    borderRadius: 8,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
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
    marginLeft: 4,
  },
  titleLight: {
    fontSize: 24,
    color: 'white',
    fontWeight: '400',
    flexDirection: 'row',
  },
});

export default StartScreen;
