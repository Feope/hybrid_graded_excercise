import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Posting(props) {
    //console.log((props.data))
    return (
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
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
