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
    View,
} from 'react-native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Profile from "./Profile";
import Details from "./Details";
import NewTab from "./NewTab";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


const TabNavigator = () => {

    const Tab = createBottomTabNavigator()
    return (


        <Tab.Navigator
            screenOptions={() => ({
                tabBarActiveBackgroundColor: 'blue',
                tabBarActiveTintColor: 'black',
                tabBarInactiveBackgroundColor: 'gray',
                tabBarInactiveTintColor: 'black',
                headerShown: false,
                animationEnabled:false,
                swipeEnabled:false,
            })}
        >
            {/*<Tab.Screen name="Home" component={Home} options={{*/}
            {/*    tabBarIcon: <MaterialCommunityIcons name="account" color={"red"} size={20}/>*/}
            {/*}}/>*/}
            <Tab.Screen name="Home" component={Home}  options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <View>
                            <Image
                                source={require("./assets/home.png")}
                                resizeMode="contain"
                                style={{ width: 25 }}
                            />
                        </View>
                    );
                },
            }}/>
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarIcon: ({focused}) => {
                    return (
                        <View>
                            <Image
                                source={require("./assets/profile.png")}
                                resizeMode="contain"
                                style={{width: 25}}
                            />
                        </View>
                    );
                },
            }}/>
            <Tab.Screen name="Details" component={Details} options={{
                tabBarIcon: ({focused}) => {
                    return (
                        <View>
                            <Image
                                source={require("./assets/increase.png")}
                                resizeMode="contain"
                                style={{width: 25}}
                            />
                        </View>
                    );
                },
            }}/>
            <Tab.Screen name="NewTab" component={NewTab} options={{
                tabBarIcon: ({focused}) => {
                    return (
                        <View>
                            <Image
                                source={require("./assets/gallery.png")}
                                resizeMode="contain"
                                style={{width: 25}}
                            />
                        </View>
                    );
                },
            }}/>
        </Tab.Navigator>


    )
        ;
};


export default TabNavigator;
