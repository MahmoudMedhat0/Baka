import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useEffect,useCallback } from 'react'
import Animated, { Extrapolate, interpolate, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const MAX_TRANSLATE_Y = -SCREEN_HEIGHT+10;

const BottomSheet = () => {
    const translateY = useSharedValue(0)
    const context = useSharedValue({ y: 0 })
    
    const scrollTo = useCallback((destination: number) => {
        'worklet';
        translateY.value = withSpring(destination, { damping: 50 });
      }, []);
    
    const gesture = Gesture.Pan().onStart(() => {
        context.value = { y: translateY.value };
    }).onUpdate((event) => {
        translateY.value = event.translationY + context.value.y
        translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y)
    }) .onEnd(() => {
        if (translateY.value > -SCREEN_HEIGHT / 3) {
          scrollTo(0);
        } else if (translateY.value < -SCREEN_HEIGHT / 1.5) {
          scrollTo(MAX_TRANSLATE_Y);
        }
      });
    const rStyle = useAnimatedStyle(() => {
        const borderRadius = interpolate(translateY.value, [MAX_TRANSLATE_Y + 10, MAX_TRANSLATE_Y], [25, 5],Extrapolate.CLAMP)
        return {
            borderRadius,
            transform: [{
                translateY: translateY.value
            }]
        }
    })

    useEffect(() => {
        translateY.value = withSpring(-SCREEN_HEIGHT / 3)
    }, [])

    return (
        <GestureDetector gesture={gesture}>
            <Animated.View style={[styles.bottomSheetContainer, rStyle]}>
                <View style={styles.line} />

            </Animated.View >
        </GestureDetector>
    )
}

export default BottomSheet

const styles = StyleSheet.create({
    bottomSheetContainer: {
        height: SCREEN_HEIGHT,
        width: '100%',
        backgroundColor: 'white',
        position: 'absolute',
        top: SCREEN_HEIGHT,
        borderRadius: 25
    },
    line: {
        width: 75,
        height: 4,
        backgroundColor: 'grey',
        alignSelf: 'center',
        marginVertical: 15,
        borderRadius: 2,
    },
})

