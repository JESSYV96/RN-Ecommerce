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

type Props = {
    image: string,
    title: string,
    price: number,
    onViewDetails: any,
    onAddToCart: any
}

const ProductItem = ({ image, title, price, onViewDetails, onAddToCart }: Props) => {
    let TouchableComp: any = TouchableOpacity

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableComp = TouchableNativeFeedback
    }


    return (
        <View style={styles.product}>
            <View style={styles.touchable}>
                <TouchableComp onPress={onViewDetails}>
                    <View>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={{ uri: image }} />
                        </View>
                        <View style={styles.details}>
                            <Text style={styles.title}>{title}</Text>
                            <Text style={styles.price}>{price.toFixed(2)} €</Text>
                        </View>
                        <View style={styles.actions}>
                            <Button color={Platform.OS === 'android'
                                ? Colors.primaryLight
                                : Colors.primary} title='Détails' onPress={onViewDetails} />
                            <Button color={Platform.OS === 'android'
                                ? Colors.primaryLight
                                : Colors.primary} title='Ajouter au panier' onPress={onAddToCart} />
                        </View>
                    </View>
                </TouchableComp>
            </View>
        </View>

    )
}

export default ProductItem

const styles = StyleSheet.create({
    product: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5, //Shadow doesn't work on Android, you need to use 'elevation'
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: 'white',
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
        fontSize: 18,
        marginVertical: 5,
    },
    price: {
        fontSize: 18,
        color: '#888'
    },
    details: {
        alignItems: 'center',
        paddingVertical: 5,
        height: Platform.OS === 'ios'
            ? Dimensions.get('window').height / 15
            : Dimensions.get('window').height / 10,
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 5,
        height: Dimensions.get('window').height / 20,
    },
})
