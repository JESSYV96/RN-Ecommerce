import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    Dimensions,
    Platform,
    TouchableOpacity,
    TouchableNativeFeedback,
} from 'react-native'
import { Colors } from '../../constants/Colors'
import { ProductItemType } from '../../types/product.d'
import Card from '../UI/Card'

const ProductItem = ({ image, title, price, children, onSelect }: ProductItemType) => {
    let TouchableComp: any = TouchableOpacity

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableComp = TouchableNativeFeedback
    }


    return (
        <Card style={styles.product}>
            <View style={styles.touchable}>
                <TouchableComp onPress={onSelect}>
                    <View>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={{ uri: image }} />
                        </View>
                        <View style={styles.details}>
                            <Text style={styles.title}>{title}</Text>
                            <Text style={styles.price}>{price.toFixed(2)} €</Text>
                        </View>
                        {children}
                    </View>
                </TouchableComp>
            </View>
        </Card>

    )
}

export default ProductItem

const styles = StyleSheet.create({
    product: {
        overflow: 'hidden',
        height: Platform.OS === 'ios'
            ? Dimensions.get('window').height / 3.2
            : Dimensions.get('window').height / 2.7,
        margin: 20
    },
    touchable: {
        overflow: 'hidden',
    },
    imageContainer: {
        width: '100%',
        height: Dimensions.get('window').height / 5.6
    },
    image: {
        width: '100%',
        height: '100%'
    },
    title: {
        fontFamily: 'openSansBold',
        fontSize: 18,
        marginVertical: 5,
    },
    price: {
        fontFamily: 'openSansBold',
        fontSize: 18,
        color: '#888'
    },
    details: {
        alignItems: 'center',
        paddingVertical: 5,
        height: Platform.OS === 'ios'
            ? Dimensions.get('window').height / 15
            : Dimensions.get('window').height / 10,
    }
})
