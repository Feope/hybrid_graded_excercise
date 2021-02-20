import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Posting(props) {
    return (
        <View style={styles.container}>
            <Text>Posting {props.id}</Text>
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
