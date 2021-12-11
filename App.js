import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './Todo/styles';
import TodoHeader from './Todo/TodoHeader';
import TodoList from './Todo/TodoList';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator();

export default function App() {
  const [todos, setTodos] = useState([]);
  const handleAddTodo = (todo) => {
    setTodos([...todos, todo]);
  }
  return (
    <>
      <View style={{ height: '100%' }}>
        <Text style={styles.title}>TodoListApp</Text>
        <TodoHeader onAdd={handleAddTodo} />
        <TodoList todos={todos} />
      </View>
      {/*
        <Stack.Navigator>
          <Stack.Screen>
          name="Todo Task"
          component={TodoList}
        </Stack.Screen>
        /</Stack.Navigator> */}
    </>
  );
}
