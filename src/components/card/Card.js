import React, { useState,useEffect } from 'react';
import { View, TextInput, StyleSheet, Image, FlatList } from 'react-native';
import Color from '../../utilities/constant/color/Color';
import Buttons from '../buttons/ButtonsWithIcon';
import Images from '../../components/image/ProdImage';
import Text from '../image_text/ImageText';

const card = (props) => {
    const [id,setId] = useState(0);
    const [heart,setheart] = useState(false)
    const [image,setImage]= useState('')
    const [price,setprice]= useState('')
    const [productName,setProductName]= useState('')
    useEffect(()=>{
        setId(props.id)
        setheart(props.itemSelected)
        setImage(props.image)
        setprice(props.price)
        setProductName(props.productName)
    },[props.id,props.itemSelected,props.image,props.price,props.productName])
    const heartIcon =(val)=>{
        props.heartIcon(val)
    }

    const addToCart =(price,productName,image)=>{
        props.addToCart(price,productName,image)
    }
    return (
        <View style={styles.card}>
            <Images image={props.image} id={id} heartIcon={heartIcon} itemSelected={heart}/>
            <Text shopName={props.shopName} price={props.price} productName={props.productName}/>
            <Buttons image={image} price={price} productName={productName} addToCart={addToCart}/>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: 200,
        marginTop: 15,
        marginBottom: 15,
    },
})

export default card;