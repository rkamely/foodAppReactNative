/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useRef, useState} from 'react';
import {
    Image, ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    Animated,
    View,
} from 'react-native';


const FoodPage = ({title, pic, comingDown}) => {
    const [tab, setTab] = useState(true)

    return (
        <View style={styles.foodPageContainer}>
            <View style={styles.food}>

                <TouchableOpacity onPress={comingDown} style={{marginLeft: 'auto', marginRight: "5%"}}>
                    <Image
                        source={require("./assets/closeIcon.png")}
                        resizeMode="contain"
                        style={styles.closeIcon}
                    />
                </TouchableOpacity>

                <Text style={styles.title}>{title}</Text>

                <Image
                    source={pic}
                    resizeMode="contain"
                    style={styles.foodImage}
                />
                <View>
                    <View style={styles.tabContainer}>
                        <Text style={[{backgroundColor: `${tab ? "#FFFFFF" : "#FBF4F1"}`}, styles.tabTitle]}
                              onPress={() => setTab(false)}>Instruction</Text>
                        <Text style={[{backgroundColor: `${tab ? "#FBF4F1" : "#FFFFFF"}`}, styles.tabTitle]}
                              onPress={() => setTab(true)}>Ingredients</Text>
                    </View>
                    <View style={styles.footerContainer}>
                        {tab ? <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                                <View style={styles.itemFooterContainer}>
                                    <View style={styles.ingredientsImageContainer}>
                                        <Image
                                            source={require("./assets/garlic.png")}
                                            resizeMode="contain"
                                            style={styles.ingredientsImage}
                                        />
                                    </View>
                                    <Text style={styles.footerTitle}>Garlic</Text>
                                    <Text style={styles.footerText}>50 gr</Text>
                                </View>
                                <View style={styles.itemFooterContainer}>
                                    <View style={styles.ingredientsImageContainer}>
                                        <Image
                                            source={require("./assets/pepper.png")}
                                            resizeMode="contain"
                                            style={styles.ingredientsImage}
                                        />
                                    </View>
                                    <Text style={styles.footerTitle}>Pepper</Text>
                                    <Text style={styles.footerText}>1 tea spoon</Text>
                                </View>
                                <View style={styles.itemFooterContainer}>
                                    <View style={styles.ingredientsImageContainer}>
                                        <Image
                                            source={require("./assets/salt-shaker.png")}
                                            resizeMode="contain"
                                            style={styles.ingredientsImage}
                                        />
                                    </View>
                                    <Text style={styles.footerTitle}>Salt</Text>
                                    <Text style={styles.footerText}>1/2 tea spoon</Text>
                                </View>
                                <View style={styles.itemFooterContainer}>
                                    <View style={styles.ingredientsImageContainer}>
                                        <Image
                                            source={require("./assets/eggplant.png")}
                                            resizeMode="contain"
                                            style={styles.ingredientsImage}
                                        />
                                    </View>
                                    <Text style={styles.footerTitle}>Eggplant</Text>
                                    <Text style={styles.footerText}>500 gr</Text>
                                </View>
                                <View style={styles.itemFooterContainer}>
                                    <View style={styles.ingredientsImageContainer}>
                                        <Image
                                            source={require("./assets/meat.png")}
                                            resizeMode="contain"
                                            style={styles.ingredientsImage}
                                        />
                                    </View>
                                    <Text style={styles.footerTitle}>Meat</Text>
                                    <Text style={styles.footerText}>1 kg</Text>
                                </View>
                                <View style={styles.itemFooterContainer}>
                                    <View style={styles.ingredientsImageContainer}>
                                        <Image
                                            source={require("./assets/onion.png")}
                                            resizeMode="contain"
                                            style={styles.ingredientsImage}
                                        />
                                    </View>
                                    <Text style={styles.footerTitle}>Onion</Text>
                                    <Text style={styles.footerText}>300 gr</Text>
                                </View>
                            </ScrollView> :
                            <View style={{height: "60%"}}>
                                <ScrollView>
                                    <Text style={styles.instruction}>Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit.
                                        Aliquid aperiam cumque dolorem doloremque eveniet exercitationem ipsam magnam
                                        nam neque,
                                        nihil numquam odio officiis quas qui quisquam reiciendis, repellat, repudiandae
                                        voluptates!
                                    </Text>
                                </ScrollView>
                            </View>
                        }
                    </View>
                </View>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({

    foodPageContainer: {
        backgroundColor: "rgba(190,103,93,0.28)",
        height: "100%",
        // overflow: 'hidden',
        // position: "relative",
    },

    food: {
        backgroundColor: "#FFFFFF",
        height: "80%",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        position: "absolute",
        width: "100%",
        bottom: 0,
        paddingTop: 30,
        alignItems: "center"

    },
    closeIcon: {
        width: 25,
        height: 25,
        marginRight: 'auto',
    },
    title: {
        fontSize: 30,
        textAlign: "center",
        color: '#000000',
        fontFamily: 'PermanentMarker-Regular',
        marginLeft: "5%",
        marginRight: "5%",
        marginTop: 20,
    },
    foodImage: {
        width: '80%',
        height: 280,
    },
    footerContainer: {
        backgroundColor: '#FBF4F1',
    },
    tabContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    tabTitle: {
        width: "50%",
        textAlign: "center",
        padding: 10,
        fontSize: 20,
        marginTop: 10,
        fontFamily: 'Signika-Medium',
        color: '#505050',
        fontWeight: '600',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
    },
    itemFooterContainer: {
        marginRight: 15,

    },
    ingredientsImageContainer: {
        backgroundColor: "#7DBFA1",
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
        width: 70,
        height: 70,
        alignItems: "center",
        justifyContent: "center",
    },
    ingredientsImage: {
        width: 50,
        height: 50,
    },
    footerTitle: {
        fontSize: 15,
        marginTop: 10,
        fontFamily: 'Signika-Medium',
        color: '#505050',
        fontWeight: '1000',
    },
    footerText: {
        fontSize: 12,
        fontFamily: 'Signika-Medium',
        color: '#505050',
    },
    instruction: {
        height: '100%',
        padding: 15,
        fontSize: 20,
    },

});

export default FoodPage;
