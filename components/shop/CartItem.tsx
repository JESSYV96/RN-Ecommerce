import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { CartItemType } from '../../types/cart.d';

const CartItem = ({ quantity, title, amount, onRemove }: CartItemType) => {
    return (
        <View style={styles.cartItem}>
            <View style={styles.item}>
                <Text style={styles.qty}>{quantity} </Text>
                <Text style={styles.mainText}>{title}</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.mainText}>{amount.toFixed(2)} €</Text>
                <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={onRemove}>
                    <Ionicons
                        size={23}
                        color='red'
                        name={Platform.OS === "android" ? 'md-trash' : 'ios-trash'}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CartItem

const styles = StyleSheet.create({
    cartItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        padding: 10,

    },
    item: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    qty: {
        fontFamily: 'openSans',
        color: "#888",
        fontSize: 19
    },
    mainText: {
        fontFamily: 'openSansBold',
        fontSize: 16
    },
    amount: {},
    deleteButton: {
        marginLeft: 20
    },
})
