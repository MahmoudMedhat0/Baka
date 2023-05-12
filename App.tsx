/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  StatusBar,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import Navigation from './src/Navigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
const App = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Navigation />
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
});

export default App;
