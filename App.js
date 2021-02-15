import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import mainView from "./components/MainView";
import posting from "./components/Posting";

const Stack = createStackNavigator();

export default function App() {
  let output;

  output=(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="mainView" component={mainView} options={{ //headerTransparent: true,
                                                                        title: ''}} />
          <Stack.Screen name="posting" component={posting} options={{ title: 'Posting 1',
                                                                      headerTintColor: 'blue', }} />
        </Stack.Navigator>
      </NavigationContainer>
  )

  return output
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  demo: {
    fontSize: 30,
    backgroundColor: 'blue'
  }
});
