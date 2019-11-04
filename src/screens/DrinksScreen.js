/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
  Button,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import {deleteDrinkList} from '../store/actions/drinks';
import {addTextKey} from '../store/actions/drinks';
import {fetchDrinks} from '../store/actions/drinks';

const DrinksScreen = props => {
  const storeDrinks = useSelector(state => state.drinks);
  const dispatch = useDispatch();
  const searchText = useSelector(state => state.text);
  const loading = useSelector(state => state.loading);

  const handleTextChange = text => {
    dispatch(addTextKey(text));
    if (text.length < 3) {
      return;
    }
    dispatch(fetchDrinks(text));
  };

  const deleteDrinkListAction = () => {
    dispatch(deleteDrinkList([]));
  };

  const addTextKeyAction = text => {
    dispatch(addTextKey(text));
  };

  useEffect(() => {
    props.navigation.setParams({
      handleTextChange,
      deleteDrinkListAction,
      addTextKeyAction,
      searchText,
    });
  }, []);

  useEffect(() => {
    props.navigation.setParams({searchText});
  }, [searchText]);

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
    <LinearGradient
      colors={['#C81691', '#E33D32']}
      start={{x: 1, y: 0}}
      end={{x: 0, y: 1}}
      style={styles.linearGradient}>
      <View style={styles.screen}>
        {loading ? (
          <View style={styles.loadingIcon}>
            <Icon name="spinner" size={70} color="white" />
          </View>
        ) : (
          <FlatList data={storeDrinks} renderItem={renderList} />
        )}
      </View>
    </LinearGradient>
  );
};
DrinksScreen.propTypes = {
  searchText: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  addDrinkList: PropTypes.func.isRequired,
  deleteDrinkList: PropTypes.func.isRequired,
  addTextKey: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
};
DrinksScreen.navigationOptions = ({navigation}) => ({
  headerTitle: (
    <TextInput
      placeholder="Search"
      value={navigation.getParam('searchText')}
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
  headerRight: () => (
    <Button
      onPress={() => {
        navigation.getParam('deleteDrinkListAction')();
        navigation.getParam('addTextKeyAction')('');
      }}
      title="Cancel"
      color="white"
    />
  ),
  headerStyle: {
    backgroundColor: '#CC1D80',
  },
});

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  linearGradient: {
    flex: 1,
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
  loadingIcon: {
    color: 'black',
    fontSize: 24,
    alignSelf: 'center',
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
