import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import TestComponent from './TestComponent';



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
                <Text>Hello World times 2</Text>
                <Text style={styles.demo}> {value} </Text>
                <TestComponent/>
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
        backgroundColor: 'lightgray',
        alignItems: 'center',
        justifyContent: 'center',
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