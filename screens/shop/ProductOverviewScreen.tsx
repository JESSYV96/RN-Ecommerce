import React from 'react'
import { StyleSheet, FlatList, Platform, Button, View, Dimensions } from 'react-native'
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../../components/UI/HeaderButton'
import ProductItem from '../../components/shop/ProductItem'
import { addToCart } from '../../store/actions/cart.actions'
import { PropsNavigation } from '../../types/Props.d'
import { Colors } from '../../constants/Colors'

const ProductOverviewScreen = ({ navigation }: PropsNavigation) => {
    const dispatch = useDispatch()
    const productList = useSelector((state: RootStateOrAny) => state.productList.availableProducts)

    const selectItemHandler = (id, title) => {
        navigation.navigate('ProductDetails', {
            id,
            title
        })
    }

    return <FlatList
        data={productList}
        renderItem={itemData => <ProductItem
            image={itemData.item.imageUrl}
            title={itemData.item.title}
            price={itemData.item.price}
            onSelect={() => selectItemHandler(itemData.item.id, itemData.item.title)}
        >
            <View style={styles.actions}>
                <Button color={Platform.OS === 'android'
                    ? Colors.primaryLight
                    : Colors.primary} title='Détails' onPress={() => selectItemHandler(itemData.item.id, itemData.item.title)} />
                <Button color={Platform.OS === 'android'
                    ? Colors.primaryLight
                    : Colors.primary} title='Ajouter au panier' onPress={() => dispatch(addToCart(itemData.item))} />
            </View>
        </ProductItem>}
    />
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
                    onPress={() => navData.navigation.toggleDrawer()} />
            </HeaderButtons>)
    }
}

export default ProductOverviewScreen

const styles = StyleSheet.create({
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 5,
        height: Dimensions.get('window').height / 20,
    },
})
