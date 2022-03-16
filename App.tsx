
import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import { Home } from './src/components/Home';
import { TaskProvider } from './src/contexts/TaskContext';

const App = () => {

  return (
    <TaskProvider>
      <Home/>
    </TaskProvider>
  );
};




export default App;
