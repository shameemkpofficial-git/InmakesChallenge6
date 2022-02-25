import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text
} from 'react-native'

import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { useSelector } from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';
import cartItemsReducer from '../redux/CartItem';

function ShoppingCartIcon(){
    const navigation = useNavigation()
    const cartItems = useSelector(state => state)

    return(
        <TouchableOpacity
        onPress={() => navigation.navigate('Cart')}
        style={styles.button}>
        <View style={styles.itemCountContainer}>
          <Text style={styles.itemCountText}>{cartItems.length}</Text>
        </View>
        <Entypo name='shopping-cart' size={32} color='#101010' />
      </TouchableOpacity>
   
    )
}
const styles = StyleSheet.create({
    button: {
      marginRight: 10
    },
    itemCountContainer: {
      position: 'absolute',
      height: 30,
      width: 30,
      borderRadius: 15,
      backgroundColor: '#FF7D7D',
      right: 22,
      bottom: 10,
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 2000
    },
    itemCountText: {
      color: 'white',
      fontWeight: 'bold'
    }
  })
  
  export default ShoppingCartIcon