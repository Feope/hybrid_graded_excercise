import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const PostingBox = (props) => {
    return (
        <View style={styles.outline}>
            <Text>{props.infor.title}</Text>
            <Text>{props.infor.category}</Text>
            <Text>{props.infor.location}</Text>
            <Text>{props.infor.image}</Text>
            <Text>{props.infor.price}</Text>
            <Text>{props.infor.date}</Text>
            <Text>{props.infor.delivery}</Text>
            <Text>{props.infor.contact_information}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    outline:{
        color: "blue",
        borderColor: "gray",
        borderRadius: 5,
        borderWidth: 1,
        width: "45%",
        maxWidth: 300,
        height: 300,
        maxHeight: 300,
    }
});
export default PostingBox;