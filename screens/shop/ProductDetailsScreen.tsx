import React from 'react'
import { StyleSheet, Text, View , ScrollView} from 'react-native'
import { Props } from '../../types/Props.d'
import { RootStateOrAny, useSelector } from 'react-redux'
import Product from '../../models/Product'

const ProductDetailsScreen = ({ navigation }: Props) => {
    const productId: string = navigation.getParam('id')
    const productTitle: string = navigation.getParam('title')
     const productList: Product[] = useSelector((state: RootStateOrAny) => state.productList.availableProduct)
    return (
        <ScrollView>
            <Text>{productTitle}</Text>
        </ScrollView>
    )
}

ProductDetailsScreen.navigationOptions = (navData:any)  => {
    return {
        title: navData.navigation.getParam('title')
    }
}

export default ProductDetailsScreen

const styles = StyleSheet.create({})
