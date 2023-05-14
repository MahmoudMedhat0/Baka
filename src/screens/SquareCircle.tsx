import React from 'react';
import { StyleSheet, View } from 'react-native';
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

const SIZE = 100.0
const CIRCLE_RADIAS = SIZE * 1.9

type ContextType = {
    translateX: number
    translateY: number
}

function SquarCircle() {
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{
                translateX: translateX.value
            },
            {
                translateY: translateY.value
            },
            ]
        }
    })

    const PanGestureEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, ContextType>({
        onStart(event, context) {
            context.translateX = translateX.value
            context.translateY = translateY.value


        },
        onActive(event, context) {
            translateX.value = event.translationX + context.translateX
            translateY.value = event.translationY + context.translateY


        },
        onEnd() {
            const distance = Math.sqrt(translateX.value ** 2 + translateY.value ** 2)
            if (distance > CIRCLE_RADIAS - SIZE/2 ){
                translateX.value = withSpring(0);
            translateY.value = withSpring(0);
            }
        },
    })


    return (
        <View style={styles.container}>
            <View style={styles.circle}>
                <PanGestureHandler onGestureEvent={PanGestureEvent}>
                    <Animated.View style={[styles.square, animatedStyle]} />
                </PanGestureHandler>
            </View>
        </View>
    );
}

export default SquarCircle;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    square: {
        width: SIZE,
        height: SIZE,
        backgroundColor: 'rgba(0,0,256,0.5)',
        borderRadius: 20,
    },
    circle: {
        width: CIRCLE_RADIAS * 2,
        height: CIRCLE_RADIAS * 2,
        borderRadius: CIRCLE_RADIAS,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 5,
        borderColor: 'rgba(0,0,256,0.5)'
    }

})