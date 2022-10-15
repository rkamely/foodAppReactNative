/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';


const GetStarted = ({route,navigation}) => {
const getStartedHandler=()=> navigation.navigate("HomePage")
    return (

        <View style={styles.sectionContainer}>
            <Image
                source={require("./assets/cooking.png")}
                resizeMode="contain"
                style={styles.mainImage}
            />
            <Text style={styles.headerText}>Become cooking
                magician</Text>
            <Text style={styles.contentText}>Take your culinary journey from a
                complete
                rookie to michelin-star level home chef.</Text>
            <View style={styles.starsContainer}>
                < Image
                    source={require("./assets/gold-star1.png")}
                    resizeMode="contain"
                    style={styles.stars}
                />
                <Image
                    source={require("./assets/gold-star2.png")}
                    resizeMode="contain"
                    style={styles.stars}
                />
                <Image
                    source={require("./assets/gold-star3.png")}
                    resizeMode="contain"
                    style={styles.stars}
                />
            </View>
            <TouchableOpacity style={styles.actionBtn} onPress={getStartedHandler}>
                <Text style={styles.textActionBtn}>
                    Get started
                </Text>
            </TouchableOpacity>
        </View>

    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        backgroundColor: 'rgb(255,255,255)',
        height: '100%',
        justifyContent:"space-evenly",
    },
    mainImage: {
        width: '80%',
        height: 250,
        alignSelf: 'center',
        marginTop: 50,
    },
    headerText: {
        fontSize: 40,
        margin: 5,
        textAlign: "right",
        width: '90%',
        color: '#000000',
        fontFamily: 'PermanentMarker-Regular'
    },
    contentText: {
        fontSize: 20,
        marginTop: 10,
        marginBottom: 20,
        textAlign: "right",
        width: '90%',
        fontFamily: 'ignika-Medium',
        color: '#8a8a8a',
        fontWeight: '600',
    },
    starsContainer: {
        flexDirection: 'row-reverse',
        width: '90%',
        marginBottom: 20,
    },
    stars: {
        width: 40,
        height: 40,
        marginLeft: 5,
    },
    actionBtn: {
        backgroundColor: '#DB3529',
        width: '80%',
        alignSelf: 'center',
        marginTop: 20,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    textActionBtn: {
        fontSize: 25,
        margin: 15,
        textAlign: "center",
        color: '#FFFFFF',
        fontWeight: '600',
    },
});

export default GetStarted;
