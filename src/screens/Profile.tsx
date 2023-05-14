import React, { useCallback, useRef } from 'react'
import { Dimensions, Image, ImageBackground, StyleSheet, View } from 'react-native'
import {Button, BottomSheet, BottomSheetRefProps} from '../components';

const { width: SIZE, height } = Dimensions.get('window');


function Profile() {
  const ref = useRef<BottomSheetRefProps>(null);
  const onPress = useCallback(() => {
    const isActive = ref?.current?.isActive();
    if (isActive) {
      ref?.current?.scrollTo(0);
    } else {
      ref?.current?.scrollTo(-350);
    }
  }, []);

  return (
   <View style={styles.conainer}>
     <ImageBackground
              source={Image.resolveAssetSource(require('../assets/images/neom.jpg'))}
              style={styles.bgImage}
            >
    <Button title='tap' onPress = {onPress} style={styles.btn} />
   <BottomSheet ref = {ref} />
   </ImageBackground>
   </View>
  )
}
const styles = StyleSheet.create({
    conainer:{
        flex:1,
        backgroundColor:'#111',
        alignItems:'center',
        justifyContent:'center'
    },
    bgImage: {
      width: SIZE,
      height: height,
      alignItems:'center',
    },
    btn:{
      shadowOffset: { width: 0, height: 20 },
      shadowOpacity: 1,
      shadowRadius: 35,
      elevation: 8,
      marginTop:100,

    }
})

export default Profile
