import React from 'react'
import {View, Text, StyleSheet, Button, FlatList} from 'react-native'
import dummy from './../../data/dummy_data'
import ShopCard from './../components/ShopCard'

const ShopScreen = ({navigation}) => {
    return (
        <View style={styles.main}>
            {/* <Text>Dummy</Text> */}
            {/* <Text>ShopScreen</Text> */}
            <FlatList
                data={dummy}
                renderItem={({item})=> <ShopCard item={item} />}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default ShopScreen