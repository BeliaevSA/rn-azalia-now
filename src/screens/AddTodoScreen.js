import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {TodosContext} from '../provaiders/TodosProvaider';

export const AddTodoScreen = () => {
  const {addTodo} = useContext(TodosContext);
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} value={text} onChangeText={setText} />
      <TouchableOpacity
        activeOpacity={text ? 0.7 : 1}
        style={[styles.btn, !text && styles.btnDisabled]}
        onPress={
          !text
            ? null
            : () => {
                addTodo(text);
                setText(null);
                Alert.alert('Дело успешно добавлено!');
              }
        }>
        <Text style={styles.btnText}>Добавить</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAFAFE',
    paddingHorizontal: 20,
  },
  textInput: {
    width: '100%',
    borderWidth: 2,
    borderColor: 'rgba(34, 47, 62, 0.1)',
    borderRadius: 8,
    fontSize: 24,
    color: '#222F3E',
    paddingVertical: 8,
    paddingHorizontal: 13,
    marginBottom: 16,
  },
  btn: {
    backgroundColor: '#222F3E',
    width: '100%',
    alignItems: 'center',
    paddingVertical: 8,
    borderRadius: 8,
  },
  btnDisabled: {
    backgroundColor: 'rgba(34, 47, 62, 0.5)',
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontFamily: 'Roboto-Medium',
  },
});
