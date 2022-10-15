/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    Text,
    TouchableOpacity,
    View,
} from 'react-native';


const LStorage = () => {
    const storeData = async (value) => {
        try {
            await AsyncStorage.setItem('@storage_Key', value)
        } catch (e) {
            // saving error
        }
    }
    useState(() => {
        storeData("salam")
        setTimeout(() => {
            getData()
        }, 1000)
    }, [])


    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('@storage_Key')
            if (value !== null) {
            }
        } catch (e) {
        }
    }

    return (

        <View>

            <TouchableOpacity>
                <Text style={{fontSize: 20, margin: 10, textAlign: "center"}}> Nothing </Text>
            </TouchableOpacity>
        </View>

    );
};


export default LStorage;
