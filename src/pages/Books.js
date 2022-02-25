import React, { Component, useEffect, useState } from "react";
import Entypo from "react-native-vector-icons/Entypo";
import {
  StyleSheet,
  Button,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import { books } from "../utilities/Data";

import { ADD_TO_CART } from "../redux/CartItem";
import { Colors } from "react-native-paper";

function Separator(){
    return <View style={{ borderBottomWidth: 1, borderBottomColor: '#a9a9a9' }} />
}

function BookScreen(){
    const dispatch = useDispatch()
    const addItemToCart = item =>dispatch({type:ADD_TO_CART, payload: item})


return(
    <View style={styles.container}>
      <FlatList
        data={books}
        // keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={() => Separator()}
        renderItem={({ item }) => (
          <View style={styles.bookItemContainer}>
            <Image source={{ uri: item.imgUrl }} style={styles.thumbnail} />
            <View style={styles.bookItemMetaContainer}>
              <Text style={styles.textTitle} numberOfLines={1}>
                {item.name}
              </Text>
              <Text style={styles.textAuthor}>by {item.author}</Text>
              <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={() => addItemToCart(item)} style={styles.button}>
                              <Text style={styles.buttonText}>Add +</Text>
              </TouchableOpacity>
                
              </View>
            </View>
          </View>
        )}
      />
    </View>
  )
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },
    bookItemContainer: {
      flexDirection: 'row',
      padding: 10
    },
    thumbnail: {
      width: 100,
      height: 150
    },
    bookItemMetaContainer: {
      padding: 5,
      paddingLeft: 10
    },
    textTitle: {
      fontSize: 22,
      fontWeight: '400',
      color:'black'
    },
    textAuthor: {
      fontSize: 18,
      fontWeight: '300',
      color:'black'
    },
    buttonContainer: {
      position: 'absolute',
      top: 110,
      left: 10
    },
    button: {
      borderRadius: 8,
      backgroundColor: '#24a0ed',
      padding: 5
    },
    buttonText: {
      fontSize: 22,
      color: '#fff'
    }
  })
  
export default BookScreen;
