import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Constants from 'expo-constants';
import Tabs from "@/navigators/Tabs";

export default function App() {
  return (
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>

  );
}


