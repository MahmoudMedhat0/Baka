import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { createRef, useCallback } from 'react'
import { TapGestureHandler } from 'react-native-gesture-handler'
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withSpring, withTiming } from 'react-native-reanimated';

const { width: SIZE, height } = Dimensions.get('window');

const AnimatedImage = Animated.createAnimatedComponent(Image)

const DoubleTabInstagrame = () => {
  const doubleTapRef = createRef()
  const scale = useSharedValue(0)
  const opacity = useSharedValue(0)



  const onSingleTap = useCallback(() => {
    'worklet'
    opacity.value = withTiming(1, undefined, (isFinish) => {
      opacity.value = withDelay(300, withTiming(0))
    })
  }, [])
  const onDoubleTap = useCallback(() => {
    'worklet'
    scale.value = withSpring(1, undefined, (isFinish) => {
      scale.value = withDelay(300, withSpring(0))
    })
  }, [])

  const rImageStyle = useAnimatedStyle(() =>
  ({
    transform: [{ scale: Math.max(scale.value, 0) }],
  }))
  const rTextStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return (
    <View style={styles.container}>
      <TapGestureHandler
        waitFor={doubleTapRef}
        onActivated={onSingleTap}
      >
        <TapGestureHandler
          maxDelayMs={150}
          ref={doubleTapRef}
          numberOfTaps={2}
          onActivated={onDoubleTap}

        >
          <Animated.View>
            <ImageBackground
              source={Image.resolveAssetSource(require('../assets/images/wolvy.jpg'))}
              style={styles.bgImage}
            >
              <AnimatedImage
                source={Image.resolveAssetSource(require('../assets/images/heart.png'))}
                style={[styles.image, {
                  shadowOffset: { width: 0, height: 20 },
                  shadowOpacity: 0.35,
                  shadowRadius: 35,
                }, rImageStyle]}
                resizeMode='center'
              />
              <Animated.Text style={[styles.turtles, rTextStyle]}>
                🌘🌘🌘🌘🌘
              </Animated.Text>
            </ImageBackground>
          </Animated.View>
        </TapGestureHandler>
      </TapGestureHandler>
    </View>
  )
}

export default DoubleTabInstagrame

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgImage: {
    width: SIZE,
    height: height,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: SIZE,
    height: SIZE,
    tintColor: 'white',

    elevation: 8,
  },
  turtles: { fontSize: 40, textAlign: 'center', marginTop: 80, },
})