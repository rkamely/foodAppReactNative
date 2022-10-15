/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "./src/Home";

import {
    StatusBar,
    StyleSheet,
} from 'react-native';
import Profile from "./src/Profile";
import Details from "./src/Details";
import{I18nManager} from "react-native";
import TabNavigator from "./src/TabNavigator";
import NewTab from "./src/NewTab";
import LStorage from "./src/Storage";
import GetStarted from "./src/GetStarted";
import HomePage from "./src/HomePage";
import FoodPage from "./src/FoodPage";
import CategoryPage from "./src/CategoryPage";

const App = () => {

I18nManager.forceRTL(true)

    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <StatusBar animated={true} translucent backgroundColor={'transparent'} barStyle={'dark-content'}/>
            <Stack.Navigator   screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="GetStarted"
                              component={GetStarted}/>

                <Stack.Screen name="HomePage"
                              component={HomePage}/>

                <Stack.Screen name="FoodPage"
                              component={FoodPage}/>

                <Stack.Screen name="CategoryPage"
                              component={CategoryPage}/>


                {/*<Stack.Screen name="Home"*/}
                {/*              component={Home}*/}
                {/*              options={{title: "Home"}}/>*/}

                {/*<Stack.Screen name="Profile"*/}
                {/*              component={Profile}*/}
                {/*              options={{title: "Profile"}}/>*/}
                {/*<Stack.Screen name="Details"*/}
                {/*              component={Details}*/}
                {/*              options={{title: "Details"}}/>*/}
                {/*<Stack.Screen name="TabNavigator"*/}
                {/*              component={TabNavigator}*/}
                {/*              options={{title: "TabNavigator"}}/>*/}
                {/*<Stack.Screen name="NewTab"*/}
                {/*              component={NewTab}*/}
                {/*              options={{title: "NewTab"}}/>*/}
                {/*<Stack.Screen name="LStorage"*/}
                {/*              component={LStorage}*/}
                {/*              options={{title: "LStorage"}}/>*/}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {

    },

});

export default App;
