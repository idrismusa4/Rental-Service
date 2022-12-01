import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';


export default function WelcomeScreen({ navigation }) {
  const { theme, toggleTheme, themeStyles } = useContext(ThemeContext);

  return (
    <ScrollView contentContainerStyle={themeStyles.container}>
      {/* <Image source={{uri: 'https://picsum.photos/id/237/200/300'}} style={themeStyles.logo} alt='logo' /> */}
      <TouchableOpacity onPress={ () => { navigation.navigate('Register') } }>
        <Text style={themeStyles.title}>Welcome</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

