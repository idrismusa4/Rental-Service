import React from 'react';
import { Text, ScrollView } from 'react-native';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function HomeScreen() {
    const { themeStyles, user } = useContext(ThemeContext);
  return (
    <ScrollView contentContainerStyle={themeStyles.container}>
        <Text style={themeStyles.title}>Welcome, {user.name}</Text>
    </ScrollView>
  )
}

export default HomeScreen;
