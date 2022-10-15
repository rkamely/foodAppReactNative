/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';


const Home = ({navigation}) => {

    const [s, setS] = useState(false)
    const statusHandler = () => {
        StatusBar.setHidden(!s, "none")
        setS(!s)
    }
    const navigateToProfile = () => {
        navigation.navigate("Profile")
    }
    const navigateToDetails = () => {
        navigation.push("Details",{newProps:"newProps"})
    }
    const navigateToTabNavigator = () => {
        navigation.navigate("TabNavigator")
    }
    const navigateToStorage = () => {
        navigation.navigate("LStorage")
    }
    return (

        <View>
            <StatusBar/>
            <TouchableOpacity onPress={statusHandler}>
                <Text style={{fontSize: 20, margin: 10, textAlign: "center"}}>{s ? 'Show' : 'Hidden'} Status Bar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToProfile}>
                <Text style={{fontSize: 20, margin: 10, textAlign: "center"}}>Go to Profile Page</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToDetails}>
                <Text style={{fontSize: 20, margin: 10, textAlign: "center"}}>Go to Details Page</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToTabNavigator}>
                <Text style={{fontSize: 20, margin: 10, textAlign: "center"}}>Go to TabNavigator Page</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToStorage}>
                <Text style={{fontSize: 20, margin: 10, textAlign: "center"}}>Go to Storage Page</Text>
            </TouchableOpacity>
        </View>

    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default Home;
