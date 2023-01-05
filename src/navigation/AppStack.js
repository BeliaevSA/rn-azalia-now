import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoaderScreen} from '../screens/LoaderScreen';
import {HomeScreen} from '../screens/HomeScreen';
import {AddTodoScreen} from '../screens/AddTodoScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View} from 'react-native';

const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Loader"
      screenOptions={{gestureEnabled: true}}>
      <Stack.Screen
        name="Loader"
        component={LoaderScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddTodo"
        component={AddTodoScreen}
        options={{
          title: 'Вернуться назад',
          headerTitleStyle: {
            color: '#999999',
            fontSize: 28,
            fontFamily: 'Roboto-Medium',
          },
          headerStyle: {backgroundColor: '#FAFAFE', elevation: 0},
          headerBackImage: () => (
            <Ionicons name="arrow-back-outline" size={33} color="#222F3E" />
          ),
        }}
      />
    </Stack.Navigator>
  );
};
