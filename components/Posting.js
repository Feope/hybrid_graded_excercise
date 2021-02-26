import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, Modal, Alert, TextInput} from 'react-native'

const Posting = (props) => {
    //console.log((props.data))
    const [modalVisible2, setModalVisible2] = useState(false);

    return (
        <View style={styles.container}>
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
                    <TouchableHighlight style={styles.modify} onPress={() => {setModalVisible2(!modalVisible2); props.update()}}>
                       <Text style={styles.white}>Modify</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => {setModalVisible2(!modalVisible2); props.emptyFile()}}>
                        <Text style={styles.smallBlue}>Cancel</Text>
                    </TouchableHighlight>
                </View>
            </Modal>
            <View style={styles.container}>
                <Text>Posting {props.data.id}</Text>
                <Text>{props.data.title}</Text>
                <Text>{props.data.category}</Text>
                <Text>{props.data.location}</Text>
                <Text>image: {props.data.image}</Text>
                <Text>price: {props.data.price}€</Text>
                <Text>{props.data.date}</Text>
                <Text>{props.data.delivery}</Text>
                <Text>{props.data.contact_information}</Text>
                <View style={styles.left}>
                    <TouchableHighlight style={styles.modify} onPress={() => {setModalVisible2(!modalVisible2); props.onPosting(props.data.id)}}>
                        <Text style={styles.white}>Modify</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.delete} onPress={() => {props.deletePost(); props.navigation.navigate('mainView')}}>
                        <Text style={styles.white}>Delete</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </View>    
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'lightgray',
        justifyContent: 'center',
        alignItems: 'center',
    },
    left:{
        flexDirection: 'row', 
    },
    modify:{
        marginTop: 30,
        margin: 10,
        borderRadius: 10,
        padding: 5,
        paddingLeft: 9,
        paddingRight: 9,
        backgroundColor: 'blue',
    },
    delete:{
        marginTop: 30,
        margin: 10,
        borderRadius: 10,
        padding: 5,
        paddingLeft: 9,
        paddingRight: 9,
        backgroundColor: 'red',
    },
    smallBlue:{
        top: -10,
        position: 'relative',
        color: 'blue',
        fontSize: 10,
    },
    white:{
        color: 'white',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
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
});
export default Posting;
