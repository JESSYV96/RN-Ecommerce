import React from 'react'
import { StyleSheet, Text, Button, View } from 'react-native'
import { Colors } from '../../constants/Colors'

const OrderItem = ({totalAmount, date}) => {
    return (
        <View style={styles.order}>
            <View style={styles.summary}>
                <Text style={styles.totalAmount}>{totalAmount.toFixed(2)} €</Text>
                <Text style={styles.date}>{date}</Text>
            </View>
            <Button
                color={Colors.primary}
                onPress={() => { }}
                title='Détails' />
        </View>
    )
}

export default OrderItem

const styles = StyleSheet.create({
    order: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: 'white',
        margin: 20,
        padding: 15,
        alignItems: 'center'
    },
    summary: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    totalAmount: {
        fontFamily: 'openSansBold',
        fontSize: 16
    },
    date: {
        fontFamily: 'openSans',
        fontSize: 16,
        color: '#888'
    },
})
