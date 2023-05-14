import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

interface ButtonProps{
  title: string,
  onPress: () => void,
  style?: object
}

const Button: React.FC<ButtonProps> = ({ title, onPress, style }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.buttonContainer, style]}>
        <Text style={styles.textStyle}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    color: 'white',
    fontSize: 22,
    fontWeight: '500',
  },
  buttonContainer: {
    width: '80%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#1f2941',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5
  },
});

export default Button;
