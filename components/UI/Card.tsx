import React from 'react'
import { StyleSheet, View } from 'react-native'

const Card = ({ children, style }) => {
    return <View style={{ ...styles.card, ...style }}>
        {children}
    </View>

}

export default Card

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5, //Shadow doesn't work on Android, you need to use 'elevation'
        borderRadius: 10,
        backgroundColor: 'white'
    }
})
