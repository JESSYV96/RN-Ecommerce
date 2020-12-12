import React from 'react'
import { StyleSheet, Text, FlatList } from 'react-native'
import { useSelector, RootStateOrAny } from 'react-redux'

const ProductOverviewScreen = ({ }) => {
    const productList = useSelector((state: RootStateOrAny) => state.productList.availableProduct)
    return <FlatList
        renderItem={itemData => <Text>{itemData.item.title}</Text>}
        data={productList} />
}

ProductOverviewScreen.navigationOptions = {
    title: 'Tout nos produits'
}

export default ProductOverviewScreen

const styles = StyleSheet.create({})
