import React, { useCallback, useEffect, useState } from 'react'
import { Platform, StyleSheet, Text, View, ScrollView, TextInput } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import CustomHeaderButton from '../../components/UI/HeaderButton'
import Product from '../../models/Product'
import { createProduct, updateProduct } from '../../store/actions/product.actions'

const EditProductScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const pId = navigation.getParam('productId')
    const product = useSelector((state: RootStateOrAny) => state.productList.userProducts
        .find((product: Product) => product.id === pId))

    const [title, setTitle] = useState(product ? product.title : '');
    const [image, setImage] = useState(product ? product.imageUrl : '');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState(product ? product.description : '');

    const submitHandler = useCallback(() => {
        if (product) {
            dispatch(updateProduct(pId, title, image, description))
        } else {
            dispatch(createProduct(title, image, parseFloat(price), description))
        }
        navigation.navigate('UserProducts')
    }, [dispatch, pId, title, image, price, description])

    useEffect(() => {
        navigation.setParams({ 'submit': submitHandler })
    }, [submitHandler]);

    return (
        <ScrollView>
            <View style={styles.form}>
                <View style={styles.formControl}>
                    <Text style={styles.label}>Titre</Text>
                    <TextInput
                        style={styles.input}
                        value={title}
                        onChangeText={text => setTitle(text)} />
                </View>
                <View style={styles.formControl}>
                    <Text style={styles.label}>Image</Text>
                    <TextInput
                        style={styles.input}
                        value={image}
                        onChangeText={image => setImage(image)} />
                </View>
                {product ? null :
                    <View style={styles.formControl}>
                        <Text style={styles.label}>Prix</Text>
                        <TextInput
                            style={styles.input}
                            value={price}
                            onChangeText={price => setPrice(price)} />
                    </View>
                }

                <View style={styles.formControl}>
                    <Text style={styles.label}>Description</Text>
                    <TextInput
                        style={styles.input}
                        value={description}
                        onChangeText={description => setDescription(description)} />
                </View>
            </View>
        </ScrollView>
    )
}

EditProductScreen.navigationOptions = (navData: any) => {
    const submit = navData.navigation.getParam('submit')
    return {
        title: navData.navigation.getParam('productId') ? 'Modifier un produit' : 'Ajouter un produit',
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    title='save'
                    iconName={Platform.OS === "android" ? 'md-checkmark ' : 'ios-checkmark'}
                    onPress={() => submit()} />
            </HeaderButtons>),
    }
}

export default EditProductScreen

const styles = StyleSheet.create({
    form: {
        margin: 20,
    },
    formControl: {
        width: '100%',
        marginBottom: 15
    },
    label: {
        fontFamily: 'openSansBold',
        marginVertical: 8
    },
    input: {
        paddingHorizontal: 3,
        paddingVertical: 5,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,

    },
})
