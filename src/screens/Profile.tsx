import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import BottomSheet from '../components/BottomSheet'
function Profile() {
  return (
   <View style={styles.conainer}>
   <BottomSheet />
   </View>
  )
}
const styles = StyleSheet.create({
    conainer:{
        flex:1,
        backgroundColor:'#111',
        alignItems:'center',
        justifyContent:'center'
    }
})

export default Profile