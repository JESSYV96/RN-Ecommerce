import React from 'react'
import { StyleSheet, FlatList, Platform } from 'react-native'
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../../components/UI/HeaderButton'
import ProductItem from '../../components/shop/ProductItem'
import { addToCart } from '../../store/actions/cart.actions'
import { PropsNavigation } from '../../types/Props.d'

const ProductOverviewScreen = ({ navigation }: PropsNavigation) => {
    const dispatch = useDispatch()
    const productList = useSelector((state: RootStateOrAny) => state.productList.availableProduct)
    return <FlatList
        renderItem={itemData => <ProductItem
            image={itemData.item.imageUrl}
            title={itemData.item.title}
            price={itemData.item.price}
            onViewDetails={() => {
                navigation.navigate('ProductDetails', {
                    id: itemData.item.id,
                    title: itemData.item.title
                })
            }}
            onAddToCart={() => dispatch(addToCart(itemData.item))}
        />}
        data={productList} />
}

ProductOverviewScreen.navigationOptions = (navData: any) => {
    return {
        title: 'Produits',
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    title='cart'
                    iconName={Platform.OS === "android" ? 'md-cart' : 'ios-cart'}
                    onPress={() => navData.navigation.navigate('Cart')} />
            </HeaderButtons>),
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    title='menu'
                    iconName={Platform.OS === "android" ? 'md-menu' : 'ios-menu'}
                    onPress={() => navData.navigation.toggleDrawer()}/>
            </HeaderButtons>)
    }
}

export default ProductOverviewScreen

const styles = StyleSheet.create({})
