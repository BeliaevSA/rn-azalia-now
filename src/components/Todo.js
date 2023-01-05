import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const Todo = ({text}) => {
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.todo}>
      <TouchableOpacity onPress={() => setChecked(!checked)}>
        {checked ? (
          <Ionicons name="checkbox" size={24} color="#222F3E" />
        ) : (
          <View style={styles.checked} />
        )}
      </TouchableOpacity>
      <Text style={[styles.text, checked ? styles.textChecked : null]}>
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    borderWidth: 2,
    borderRadius: 8,
    borderColor: 'rgba(34, 47, 62, 0.1)',
    elevation: 1,
    backgroundColor: '#FAFAFE',
    marginBottom: 16,
    paddingHorizontal: 9,
    paddingVertical: 8,
    width: '100%',
    alignItems: 'center',
  },
  checked: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderRadius: 5,
    color: '#222F3E',
  },
  text: {
    marginLeft: 16,
    marginRight: 9,
    color: '#222F3E',
    fontSize: 24,
    fontFamily: 'Roboto-Regular',
  },
  textChecked: {
    marginLeft: 12,
    textDecorationLine: 'line-through',
    color: 'rgba(34, 47, 62, 0.5)',
  },
});
