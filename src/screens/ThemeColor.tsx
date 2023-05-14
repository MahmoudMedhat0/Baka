import { Dimensions, StyleSheet, Switch, Text, View } from 'react-native'
import React, { useState } from 'react'
import Animated, { AnimateStyle, AnimatedStyleProp, interpolateColor, useAnimatedStyle, useDerivedValue } from 'react-native-reanimated';

const Colors = {
    dark: {
        background: '#1E1E1E',
        circle: '#252525',
        text: '#F8F8F8',
    },
    light: {
        background: '#F8F8F8',
        circle: '#FFF',
        text: '#1E1E1E',
    },
};

const SWITCH_TRACK_COLOR = {
    true: 'rgba(256, 0, 256, 0.2)',
    false: 'rgba(0,0,0,0.1)',
};
const CIRCLE_SIZE = Dimensions.get('window').width * 0.7;
type Theme = 'light' | 'dark';

const ThemeColor = () => {
    const [theme, setTheme] = useState<Theme>('light');
    const process = useDerivedValue(() => {
        return theme === 'dark' ? 1 : 0;
    }, [theme])
    const rStyle = useAnimatedStyle(() => {
        const backgroundColor = interpolateColor(process.value, [0, 1], [
            Colors.light.background,
            Colors.dark.background
        ])
        return { backgroundColor }
    })
    const rCircleStyle = useAnimatedStyle(() => {
        const backgroundColor = interpolateColor(process.value, [0, 1], [
            Colors.light.circle,
            Colors.dark.circle
        ])
        return { backgroundColor }
    })
    const rTextStyle = useAnimatedStyle(() => {
        const color = interpolateColor(process.value, [0, 1], [
            Colors.light.text,
            Colors.dark.text
        ])
        return { color }
    })

    return (
        <Animated.View style={[styles.container, rStyle]}>
            <Animated.Text style={[styles.text, rTextStyle]}>Theme</Animated.Text>
            <Animated.View style={[styles.circle, rCircleStyle]}>
                <Switch value={theme === 'dark'}
                    onValueChange={(toggled) => {
                        setTheme(toggled ? 'dark' : 'light');
                    }}
                    trackColor={SWITCH_TRACK_COLOR}
                    thumbColor={'violet'} />
            </Animated.View>
        </Animated.View>
    )
}

export default ThemeColor

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    circle: {
        width: CIRCLE_SIZE,
        height: CIRCLE_SIZE,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: CIRCLE_SIZE / 2,
        shadowOffset: {
            width: 0,
            height: 20,
        },
        shadowRadius: 10,
        shadowOpacity: 0.3,
        elevation: 8,
    },
    text: {
        fontSize: 70,
        textTransform: 'uppercase',
        fontWeight: '700',
        letterSpacing: 14,
        marginBottom: 35,
    },
})