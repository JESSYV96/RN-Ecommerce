import React, { useState } from 'react'
import { StyleSheet, Text, Button, View } from 'react-native'
import { Colors } from '../../constants/Colors'
import Card from '../UI/Card'
import CartItem from './CartItem'

const OrderItem = ({ totalAmount, date, item }) => {
    const [showDetails, setShowDetails] = useState(false)
    item = Object.keys(item).map(i => item[i]);
    return (
        <Card style={styles.order}>
            <View style={styles.summary}>
                <Text style={styles.totalAmount}>{totalAmount.toFixed(2)} €</Text>
                <Text style={styles.date}>{date}</Text>
            </View>
            <Button
                color={Colors.primary}
                onPress={() => {
                    setShowDetails(prevState => !prevState)
                 }}
                title={!showDetails ? 'Voir les Détails' : 'Masquer les Détails'} />
            {showDetails && (<View style={styles.cartItemsDetails}>
                {item.map((cartItem) => <CartItem
                    key={cartItem.id}
                    quantity={cartItem.quantity} 
                    title={cartItem.title}
                    amount={cartItem.sum} />)}
            </View>)}
        </Card>
    )
}

export default OrderItem

const styles = StyleSheet.create({
    order: {
        overflow: 'hidden',
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
    cartItemsDetails: {
        width: '100%'
    }
})
