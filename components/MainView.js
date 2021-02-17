import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import PostingBox from "./PostingBox";


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

    const [value, onChangeText] = React.useState('Searchbar soon?');

    return (
        <View style={styles.base}>
            <View style={styles.header}></View>
            <View style={styles.searchContainer}>
                <TextInput style={styles.searchbar} onChangeText={text => onChangeText(text)} value={value}/>
                <Text> This is login maybe </Text>
            </View>
            <View style={styles.container}>
                <PostingBox infor={postings}/>
                <Button title="Got to posting" onPress={() => props.navigation.navigate('posting')}/>
                <StatusBar style="auto" />
            </View>
        </View>    
    )
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