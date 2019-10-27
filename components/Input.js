import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const Input = props => {
  return <TextInput {...props} style={{...styles.input, ...props.style}} />;
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '80%',
    borderColor: 'grey',
    marginVertical: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
});

export default Input;
