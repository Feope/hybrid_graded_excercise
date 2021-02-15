import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Posting() {
    return (
        <View style={styles.container}>
            <Text>Posting 1</Text>
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
