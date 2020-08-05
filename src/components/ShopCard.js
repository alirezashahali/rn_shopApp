import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, Button, Image, ImageBackground, Dimensions, SafeAreaView } from 'react-native'
// import { onChange } from 'react-native-reanimated'

const ShopCard = ({item}) => {
    const [h, setH] = useState(Dimensions.get("window").height)
    const [w, setW] = useState(Dimensions.get("window").width)
    const [isPortrait, setIsPortrait] = useState(Dimensions.get("window").height/Dimensions.get("window").width> 1)

    useEffect(()=>{
        const update = () =>{
            setH(Dimensions.get('window').height)
            setW(Dimensions.get("window").width)
            setIsPortrait(Dimensions.get("window").height/Dimensions.get("window").width> 1)
        }

        Dimensions.addEventListener('change', update)
        return () =>{
            Dimensions.removeEventListener('change', update)
        }
    })

    // Dimensions.addEventListener('change', update)
    // if(!isPortrait){
    //     return(

    //     )
    // }

    return(
        <SafeAreaView style={{...styles.all}}>
            <View style={styles.card}>
                <View style={styles.image}>
                    <Text style={styles.header}>{item.name}</Text>
                    <Image source={{uri: item.imageUrl}}
                        style={{width: h*.4, height: h*.7}}
                    />
                </View>
                <View style={{...styles.buttons, width: h*.4}}>
                    <Button title="Detail" />
                    <Text>{item.price} $</Text>
                    <Button title="Add to Cart" />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 22,
        fontWeight:"bold",
        alignSelf: "center"
    },
    image:{
        alignSelf: "center"
    },
    all:{
        margin: 10,
        elevation: 5,
    },
    buttons:{
        flexDirection: "row",
        justifyContent: "space-between" ,
        alignSelf: "center",
        alignItems: "center"
    },
    card:{
        padding: 10,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: "#FAF0CA"
    }
})

export default ShopCard