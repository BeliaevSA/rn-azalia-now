import {
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  Text,
  TouchableHighlight,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {TodosContext} from '../provaiders/TodosProvaider';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SwipeListView} from 'react-native-swipe-list-view';
import {Todo} from '../components/Todo';

export const HomeScreen = ({navigation}) => {
  const {todos, deleteTodo} = useContext(TodosContext);

  const renderItem = data => (
    <TouchableHighlight>
      <Todo text={data.item.text} />
    </TouchableHighlight>
  );

  const deleteRow = rowKey => {
    deleteTodo(rowKey);
  };

  const renderHiddenItem = data => {
    return (
      <View style={styles.rowBack}>
        <TouchableOpacity
          style={[styles.backRightBtn]}
          onPress={() => deleteRow(data.item.key)}>
          <Text style={styles.backText}>Удалить</Text>
          <Ionicons name="trash-outline" size={25} color="#FAFAFE" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/Azalia.png')} />
      <View style={styles.wrapperTodos}>
        {!todos ? (
          <Text style={styles.noTodo}>Список дел пуст</Text>
        ) : (
          <SwipeListView
            data={todos}
            renderItem={renderItem}
            renderHiddenItem={renderHiddenItem}
            rightOpenValue={-75}
            disableRightSwipe
            rightActivationValue={-200}
            rightActionValue={-500}
            onRightAction={rowKey => {
              deleteRow(rowKey);
            }}
          />
        )}
      </View>
      <View style={styles.btnAddTodo}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('AddTodo')}>
          <Ionicons name="add-circle" size={56} color="#222F3E" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 90,
    paddingHorizontal: 20,
    paddingBottom: 100,
    backgroundColor: '#FAFAFE',
    position: 'relative',
  },
  noTodo: {fontSize: 24},
  wrapperTodos: {marginTop: 19, width: '100%', flex: 1},
  btnAddTodo: {
    position: 'absolute',
    right: 36,
    bottom: 31,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#FAFAFE',
    flex: 1,
    marginBottom: 19,
    marginTop: 2,
    marginRight: 2,
    marginLeft: 2,
    borderRadius: 8,
  },
  backText: {color: '#FAFAFE', marginRight: 50, fontSize: 20},
  backRightBtn: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    paddingRight: 25,
    paddingLeft: 25,
    borderRadius: 8,
    position: 'absolute',
    bottom: 0,
    right: 0,
    top: 0,
    width: '100%',
    backgroundColor: 'red',
  },
});
