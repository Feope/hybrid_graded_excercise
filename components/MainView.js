import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import PostingBox from "./PostingBox";
import axios from "axios";

var postings = {
    id: "123b3123gr",
    title: "Kitchen Table",
    category: "Furniture",
    location: "Detroit, USA",
    image: "string",
    price: 30,
    date: "29.01.2021",
    delivery: "Pickup",
    contact_information: "Ben Dover, mobile:+358 184534344",
    image2: "string",
    image3: "string",
    image4: "string"
  }

  const MainView = (props) => {

    console.log(props.allPosts)

    let output;
    output = (
        <View style={styles.base}>
            <View style={styles.header}></View>
            <View style={styles.searchContainer}>
                <TextInput style={styles.searchbar} onChangeText={text => props.onSearch(text)} value={props.lable}/>
                <Text> This is login maybe </Text>
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