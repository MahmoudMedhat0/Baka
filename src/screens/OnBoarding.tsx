import React from 'react'
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated'
import { StyleSheet } from 'react-native'
import {Page} from '../components'

const WORDS = ["What's up", 'mobile', 'devs?']

function OnBoarding() {

    const translateX = useSharedValue(0);

    const scrollHandler = useAnimatedScrollHandler((event) => {
        translateX.value = event.contentOffset.x;
    });

    return (

        <Animated.ScrollView
            pagingEnabled
            scrollEventThrottle={32}
            horizontal
            style={styles.container}
            onScroll={scrollHandler}
            showsHorizontalScrollIndicator={false}
        >
            {WORDS.map((title, index ) => {
                return (
                    <Page
                        key={index.toString()}
                        title={title}
                        translateX={translateX}
                        index={index}
                    />
                );
            })}
        </Animated.ScrollView>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default OnBoarding