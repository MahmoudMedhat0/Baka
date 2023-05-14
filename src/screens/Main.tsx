import {View, StyleSheet} from 'react-native';
import React from 'react';
import {Button} from '../components';

const Main = ({navigation}) => {
  return (
    <View style={styles.mainConatianer}>
      <Button
        onPress={() => navigation.push('SquarCircle')}
        title={'SquarCircle'}
      />
       <Button
        onPress={() => navigation.push('Profile')}
        title={'Bottom Sheet'}
      />
       <Button
        onPress={() => navigation.push('OnBoarding')}
        title={'OnBoarding'}
      />
       <Button
        onPress={() => navigation.push('ColorPicker')}
        title={'Color Picker'}
      />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  mainConatianer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {},
});
