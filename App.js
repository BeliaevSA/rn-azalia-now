import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppStack} from './src/navigation/AppStack';
import {TodosProvider} from './src/provaiders/TodosProvaider';

export default function App() {
  return (
    <TodosProvider>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </TodosProvider>
  );
}
