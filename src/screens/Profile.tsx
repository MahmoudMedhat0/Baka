import React, { useCallback, useRef } from 'react'
import { StyleSheet, View } from 'react-native'
import BottomSheet, { BottomSheetRefProps } from '../components/BottomSheet'
import Button from '../components/Button';
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
    <Button title='show modal' onPress = {onPress} />
   <BottomSheet ref = {ref} />
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
