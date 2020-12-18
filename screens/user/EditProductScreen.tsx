import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../../components/UI/HeaderButton'

const EditProductScreen = ({}) => {
    return (
        <View>
            <Text>Edit product</Text>
        </View>
    )
}

EditProductScreen.navigationOptions = (navData: any) => {
    return {
        title: 'Ts',
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    title='menu'
                    iconName={Platform.OS === "android" ? 'md-menu' : 'ios-menu'}
                    onPress={() => navData.navigation.toggleDrawer()} />
            </HeaderButtons>),
    }
}

export default EditProductScreen

const styles = StyleSheet.create({})
