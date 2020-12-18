import React from 'react'
import {
    StyleSheet,
    Text,
    ScrollView,
    Image,
    Button,
    Dimensions,
    Platform,
    View
} from 'react-native'
import { PropsNavigation } from '../../types/Props.d'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import Product from '../../models/Product'
import { Colors } from '../../constants/Colors'
import { addToCart } from '../../store/actions/cart.actions'

const ProductDetailsScreen = ({ navigation }: PropsNavigation) => {
    const dispatch = useDispatch()
    const productId: string = navigation.getParam('id')
    const productList: Product[] = useSelector((state: RootStateOrAny) => state.productList.availableProducts)
    const product: Product = productList.find((p: Product) => p.id === productId)

    return (
        <ScrollView>
            <Image
                style={styles.image}
                source={{ uri: product?.imageUrl }} />
            <View style={styles.action}>
                <Button
                    color={Platform.OS === 'android'
                        ? Colors.primaryLight
                        : Colors.primary}
                    onPress={() => dispatch(addToCart(product))}
                    title="Ajouter au panier" />
            </View>
            <Text style={styles.price}>{product?.price} €</Text>
            <Text style={styles.description}>{product?.description}</Text>
        </ScrollView>
    )
}

ProductDetailsScreen.navigationOptions = (navData: any) => {
    return {
        title: navData.navigation.getParam('title')
    }
}

export default ProductDetailsScreen

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: Dimensions.get('window').height / 3
    },
    action: {
        marginTop: 20,
        marginBottom: 5,
        alignItems: 'center'
    },
    price: {
        fontSize: 20,
        fontFamily: 'openSansBold',
        color: '#888',
        textAlign: 'center',
        marginVertical: 15

    },
    description: {
        fontFamily: 'openSans',
        fontSize: 15,
        textAlign: 'center',
        marginHorizontal: 17

    }
})
