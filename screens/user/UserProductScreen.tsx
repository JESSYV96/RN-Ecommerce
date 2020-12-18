import React from 'react'
import { Button, FlatList, Platform, View, StyleSheet, Dimensions } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import ProductItem from '../../components/shop/ProductItem'
import CustomHeaderButton from '../../components/UI/HeaderButton'
import { deleteProduct } from '../../store/actions/product.actions'

const UserProductScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const userProducts = useSelector((state: RootStateOrAny) => state.productList.userProducts)
    const editProductHandler = (id: string): void => {
        navigation.navigate('EditProduct', {
            productId: id,
        })
    }
    return (
        <FlatList
            data={userProducts}
            renderItem={itemData => <ProductItem
                image={itemData.item.imageUrl}
                title={itemData.item.title}
                price={itemData.item.price}
                onSelect={() => editProductHandler(itemData.item.id)}>
                <View style={styles.actions}>
                    <Button color={Platform.OS === 'android'
                        ? Colors.primaryLight
                        : Colors.primary} title='Editer' onPress={() => editProductHandler(itemData.item.id)} />
                    <Button color={Platform.OS === 'android'
                        ? Colors.primaryLight
                        : Colors.primary} title='Supprimer' onPress={() => dispatch(deleteProduct(itemData.item.id))} />
                </View>
            </ProductItem>
            }
        />
    )
}

UserProductScreen.navigationOptions = (navData: any) => {
    return {
        title: 'Vos produits',
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    title='menu'
                    iconName={Platform.OS === "android" ? 'md-menu' : 'ios-menu'}
                    onPress={() => navData.navigation.toggleDrawer()} />
            </HeaderButtons>),
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    title='add'
                    iconName={Platform.OS === "android" ? 'md-create' : 'ios-create'}
                    onPress={() => navData.navigation.navigate('EditProduct')} />
            </HeaderButtons>),
    }
}

export default UserProductScreen

const styles = StyleSheet.create({
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 5,
        height: Dimensions.get('window').height / 20,
    },
})
