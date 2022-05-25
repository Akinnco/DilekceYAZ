import React, {Component, useState} from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';
const Input = ({
  value,
  placeholder,
  onSubmitEditing,
  secureTextEntry,
  onChangeText,
  title,
}) => {
  return (
    <View style={styles.area}>
      <View style={styles.textArea}>
        <Text style={styles.text}>{title}</Text>
      </View>
      <View style={styles.inputArea}>
        <TextInput
          secureTextEntry={secureTextEntry}
          style={styles.input}
          returnKeyType="next"
          placeholderTextColor="#3E5C76"
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value}
        />
      </View>
    </View>
  );
};
export default Input;
const styles = StyleSheet.create({
  input: {
    width: '95%',
    borderRadius: 5,
    borderBottomWidth: 2,
  },
  area: {
    width: '100%',
  },
  textArea: {
    flex: 1,
    marginLeft: 12,
    height: 20,
  },
  text: {
    color: 'black',
    fontSize: 16,
    fontWeight: '700',
    top: 10,
  },
  inputArea: {
    flex: 1.5,
    alignItems: 'center',
    marginTop: '2%',
  },
});
