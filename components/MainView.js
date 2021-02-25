import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, TextInput, TouchableHighlight, Modal, Alert, Button, TouchableWithoutFeedback } from 'react-native';
import PostingBox from "./PostingBox";

  const MainView = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);

    let loginText = 'Login'

    let output;
    output = (
        <View style={styles.base}>
            <Modal visible={modalVisible} onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            this.setModalVisible(!modalVisible);
          }}>
                <View style={styles.centeredView}>
                    <View>
                        <Text>Username</Text>
                        <TextInput style={styles.searchbar} onChangeText={text => props.onUsername(text)} value={props.username}/>
                    </View>
                    <View>
                        <Text>Password</Text>
                        <TextInput style={styles.searchbar} onChangeText={text => props.onPassword(text)} value={props.password}/>
                    </View>
                    <TouchableHighlight style={styles.login} onPress={() => {setModalVisible(!modalVisible); props.login()}}>
                       <Text style={styles.white}>{loginText}</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => {setModalVisible(!modalVisible); props.register() }}>
                        <Text style={styles.smallBlue}>Register instead</Text>
                    </TouchableHighlight>
                </View>
            </Modal>
            <Modal visible={modalVisible2} onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            this.setModalVisible(!modalVisible2);
          }}>
                <View style={styles.centeredView}>
                        <Text>title</Text>
                        <TextInput style={styles.searchbar} onChangeText={text => props.onTitle(text)}/>
                        <Text>category</Text>
                        <TextInput style={styles.searchbar} onChangeText={text => props.onCategory(text)}/>
                        <Text>location</Text>
                        <TextInput style={styles.searchbar} onChangeText={text => props.onLocation(text)}/>
                        <Text>price</Text>
                        <TextInput style={styles.searchbar} onChangeText={text => props.onPrice(text)}/>
                        <Text>date</Text>
                        <TextInput style={styles.searchbar} onChangeText={text => props.onDate(text)}/>
                        <Text>delivery</Text>
                        <TextInput style={styles.searchbar} onChangeText={text => props.onDelivery(text)}/>
                        <Text>contact information</Text>
                        <TextInput style={styles.searchbar} onChangeText={text => props.onContactInformation(text)}/>
                    <TouchableHighlight style={styles.login} onPress={() => {setModalVisible2(!modalVisible2); props.post()}}>
                       <Text style={styles.white}>Post</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => {setModalVisible2(!modalVisible2); props.emptyFile()}}>
                        <Text style={styles.smallBlue}>Cancel</Text>
                    </TouchableHighlight>
                </View>
            </Modal>
            <View style={styles.header}></View>
            <View style={styles.searchContainer}>
                <TextInput style={styles.searchbar} onChangeText={text => props.onSearch(text)} value={props.lable}/>
                <TouchableHighlight onPress={() => {setModalVisible(!modalVisible)}}>
                    <Text>Login</Text>
                </TouchableHighlight>
            </View>
            <View>
                <TouchableHighlight style={styles.login} onPress={() => {if(props.loggedIn){setModalVisible2(!modalVisible2)}else{alert('Please login first')}}}>
                    <Text style={styles.white}>Create post</Text>
                </TouchableHighlight>
            </View>
            <View style={styles.container}>
                {props.allPosts.map(content => <PostingBox key={content.id} onTouchable={props.onTouchable} switchScreen={() => props.navigation.navigate('posting')} infor={content} />)}
                <StatusBar style="auto" />
            </View>
        </View>    
    )
    return output
}

const styles = StyleSheet.create({
    base:{
        flex: 1,
        backgroundColor: 'lightgray',
        alignItems: 'center',
        justifyContent: 'center',
    },
    smallBlue:{
        color: 'blue',
        fontSize: 10,
    },
    white:{
        color: 'white',
    },
    login:{
        marginTop: 10,
        borderRadius: 10,
        padding: 5,
        paddingLeft: 9,
        paddingRight: 9,
        backgroundColor: 'blue',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    container: {
        flex: 1,
        width: "95%",
        padding: 10,
        marginTop: 15,
        backgroundColor: 'lightgray',
        flexWrap: "wrap",
        flexDirection: "row",
        alignItems: 'baseline',
        justifyContent: 'space-around',
    },
    demo: {
        fontSize: 30,
        backgroundColor: 'blue',
    },
    searchbar:{
        height: 30,
        color: 'black',
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 15,
        paddingLeft: 6,
        paddingRight: 6,
    },
    searchContainer:{
        flexDirection: 'row',
        height: 40,
        backgroundColor: 'lightgray',
        alignItems: 'center',
        justifyContent: 'center',
    }
  });
export default MainView;