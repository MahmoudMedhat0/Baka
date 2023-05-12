import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Button from '../components/Button';
import { NavigationProp } from '@react-navigation/native';

const Main = ({navigation}) => {
  console.log(navigation);
  return (
    <View style={styles.mainConatianer}>
      <Button
        onPress={() => navigation.push('SquarCircle')}
        title={'SquarCircle'}
      />
       <Button
        onPress={() => navigation.push('Profile')}
        title={'Profile'}
      />
       <Button
        onPress={() => navigation.push('SquarCircle')}
        title={'SquarCircle'}
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
