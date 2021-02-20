import React, { Component } from 'react';
import { enableScreens } from 'react-native-screens';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainView from "./components/MainView";
import Posting from "./components/Posting";

enableScreens();
const Stack = createStackNavigator();

export default class App extends Component{
  constructor(props)
  {
    super(props);
    this.state = {
      lable: "",
      selectedId: "",
      clicked: false,
    }
  }

  onSearch = (text) =>{
    this.setState({lable: text})
  }

  onTouchable = (id) =>{
    this.setState({selectedId: id})
    console.log(id)
  }

  render(){
  let output;

  output=(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="mainView" options={{title: ''}}>
            { props => <MainView {...props} lable={ this.state.lable } onSearch={ this.onSearch } onTouchable={ this.onTouchable }/>}
          </Stack.Screen>
          <Stack.Screen name="posting" options={{ title: 'Posting 1', headerTintColor: 'blue', }} >
            { props => <Posting {...props} id={ this.state.selectedId }/>}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
  )

  return output
}}

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
