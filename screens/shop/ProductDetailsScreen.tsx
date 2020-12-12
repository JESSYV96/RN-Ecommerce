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
import { Props } from '../../types/Props.d'
import { RootStateOrAny, useSelector } from 'react-redux'
import Product from '../../models/Product'
import { Colors } from '../../constants/Colors'

const ProductDetailsScreen = ({ navigation }: Props) => {
    const productId: string = navigation.getParam('id')
    const productTitle: string = navigation.getParam('title')
    const productList: Product[] = useSelector((state: RootStateOrAny) => state.productList.availableProduct)
    const product: Product | undefined = productList.find((p: Product) => p.id === productId)

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
                onPress={() => { }}
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
        marginVertical: 10,
        alignItems: 'center'
    },
    price: {
        fontSize: 20,
        color: '#888',
        textAlign: 'center',
        marginVertical: 15

    },
    description: {
        fontSize: 15,
        textAlign: 'center',
        marginHorizontal: 17

    }
})
