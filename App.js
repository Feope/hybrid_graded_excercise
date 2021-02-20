import React, { Component } from 'react';
import { enableScreens } from 'react-native-screens';
import {  StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainView from "./components/MainView";
import Posting from "./components/Posting";
import axios from "axios";

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
      returnedPost: [],
      allPosts: [],
    }
  }

  onSearch = (text) =>{
    this.setState({lable: text})
  }

  onTouchable = (id) =>{
    axios.get('http://localhost:3000/posting/' + id)
    .then(res => {
      this.setState({returnedPost: res.data[0]})
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  
  componentDidMount(){
    axios.get('http://localhost:3000/posting')
    .then(res => {
      this.setState({allPosts: res.data})
    })
    .catch(function (error) {
    console.log(error);
    });
  }

  render(){
  let output;

  output=(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="mainView" options={{title: 'NoBay', headerTitleStyle:{ textAlign: "center"}, headerTintColor: 'blue' }}>
            { props => <MainView {...props} lable={ this.state.lable } allPosts={ this.state.allPosts } onSearch={ this.onSearch } onTouchable={ this.onTouchable }/>}
          </Stack.Screen>
          <Stack.Screen name="posting" options={{ title: 'Posting', headerTintColor: 'blue', }} >
            { props => <Posting {...props} data={ this.state.returnedPost }/>}
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
