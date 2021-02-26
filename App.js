import React, { Component } from 'react';
import { enableScreens } from 'react-native-screens';
import {  StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainView from "./components/MainView";
import Posting from "./components/Posting";
import axios from "axios";

const { v4: uuidv4 } = require('uuid');

enableScreens();
const Stack = createStackNavigator();
const API_address = 'http://localhost:3000';

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
      username: 'test',
      password: 'test',
      loggedIn: '',
      title: '',
      category: '',
      location: '',
      price: '',
      date: '',
      delivery: '',
      contact_information: '',
    }
  }

  onSearch = (text) =>{
    this.setState({lable: text})
  }

  onTouchable = (id) =>{
    axios.get(API_address + '/posting/' + id)
    .then(res => {
      this.setState({returnedPost: res.data[0]})
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  onUsername = (text) =>{
    this.setState({ username: text })
  }

  onPassword = (text) =>{
    this.setState({ password: text })
  }

  onTitle = (text) =>{
    this.setState({ title: text })
  }

  onCategory = (text) =>{
    this.setState({ category: text })
  }

  onLocation = (text) =>{
    this.setState({ location: text })
  }

  onPrice = (text) =>{
    this.setState({ price: text })
  }

  onDate = (text) =>{
    this.setState({ date: text })
  }
  
  onDelivery = (text) =>{
    this.setState({ delivery: text })
  }

  onContactInformation = (text) =>{
    this.setState({ contact_information: text })
  }

  onPosting = (id) =>{
    this.setState({selectedId: id})
    console.log(id)
  }

  register = () =>{
    let user = this.state.username;
    let pass = this.state.password;

    axios.post(API_address + '/user', {
     Username: user,
     Password: pass 
    })
    .catch(function (error) {
      alert('Credentials taken');
      console.log(error);
    });
  }

  loggedIn = (user) =>{
    this.setState({loggedIn: user})
  }

  login = () => {
    let user = this.state.username;
    let pass = this.state.password;
    let success = false;

    axios.put(API_address + '/login', {
      Username: user,
      Password: pass
    })
    .then(function (response){
      success = true;
    })
    .catch(function (error) {
      alert('Invalid Credentials');
      console.log(error);
    });

    if(success = true){
      this.loggedIn(user);
    }
  }

  post = () => {
    let id = uuidv4();
    let title = this.state.title;
    let category = this.state.category;
    let location = this.state.location;
    let image = "string";
    let price = this.state.price;
    let date = this.state.date;
    let delivery = this.state.delivery;
    let contact_information = this.state.contact_information;

    axios.post(API_address + '/posting', {
      PostingInformation: {
        id: id,
        title: title,
        category: category,
        location: location,
        image: image,
        price: price,
        date: date,
        delivery: delivery,
        contact_information: contact_information
      }
    })
    .catch(function (error) {
      alert('Invalid Credentials');
      console.log(error);
    });

    this.emptyFile()
    this.refreshPage()
  }

  update = () =>{
    let id = this.state.selectedId;
    let title = this.state.title;
    let category = this.state.category;
    let location = this.state.location;
    let image = "string";
    let price = this.state.price;
    let date = this.state.date;
    let delivery = this.state.delivery;
    let contact_information = this.state.contact_information;

    axios.put(API_address + '/posting/' + id, {
      PostingInformation: {
        id: id,
        title: title,
        category: category,
        location: location,
        image: image,
        price: price,
        date: date,
        delivery: delivery,
        contact_information: contact_information
      }
    })
    .catch(function (error) {
      alert('Invalid Credentials');
      console.log(error);
    });

    this.emptyFile()
    this.refreshPage()
  }

  deletePost = () =>{
    let id = this.state.selectedId

    axios.delete(API_address + '/posting/' + id,{
    })
    .catch(function (error) {
      alert('Invalid Credentials');
      console.log(error);
    });

    this.refreshPage();
  }

  emptyFile = () =>{
    this.setState({title: ''});
    this.setState({category: ''});
    this.setState({location: ''});
    this.setState({price: ''});
    this.setState({date: ''});
    this.setState({delivery: ''});
    this.setState({contact_information: ''});
  }

  refreshPage(){
    axios.get(API_address + '/posting')
    .then(res => {
      this.setState({allPosts: res.data})
    })
    .catch(function (error) {
    console.log(error);
    });
  }

  componentDidMount(){
    axios.get(API_address + '/posting')
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
            { props => <MainView {...props} lable={ this.state.lable } allPosts={ this.state.allPosts } username={ this.state.username } password={ this.state.password } 
            onUsername={ this.onUsername } onPassword={ this.onPassword } onSearch={ this.onSearch } onTouchable={ this.onTouchable } login={ this.login } 
            register={ this.register } onTitle={ this.onTitle } onCategory={ this.onCategory } onLocation={ this.onLocation } onPrice={ this.onPrice }
            onDate={ this.onDate } onDelivery={ this.onDelivery } onContactInformation={ this.onContactInformation } emptyFile={ this.emptyFile }
            post={ this.post } loggedIn={this.state.loggedIn} onPosting={ this.onPosting }/>}
          </Stack.Screen>
          <Stack.Screen name="posting" options={{ title: 'Posting', headerTintColor: 'blue', }} >
            { props => <Posting {...props} data={ this.state.returnedPost } onTitle={ this.onTitle } onCategory={ this.onCategory }
             onLocation={ this.onLocation } onPrice={ this.onPrice } onDate={ this.onDate } onDelivery={ this.onDelivery }
             onContactInformation={ this.onContactInformation } emptyFile={ this.emptyFile } update={ this.update } onPosting={ this.onPosting }
             deletePost={ this.deletePost } />}
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
