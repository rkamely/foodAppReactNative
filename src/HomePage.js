/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useRef, useState } from "react";
import {
  Animated,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import FoodPage from "./FoodPage";


const HomePage = ({ navigation }) => {

  const [pic, setPic] = useState("");
  const [title, setTitle] = useState("");
  const [searchBox, setSearchBox] = useState(false);

  const searchBoxHandler = () => {
    setSearchBox(!searchBox);
  };

  const comeUpAnim = useRef(new Animated.Value(-800)).current;

  const picAndTitleHandler = (pic, title) => {
    setPic(pic);
    setTitle(title);
    Animated.timing(comeUpAnim, {
      toValue: 0,
      duration: 250,
      useNativeDriver: false,
    }).start();
  };

  const comingUp = () => {
    Animated.timing(comeUpAnim, {
      toValue: 0,
      duration: 250,
      useNativeDriver: false,
    }).start();
  };
  const comingDown = () => {
    Animated.timing(comeUpAnim, {
      toValue: -800,
      duration: 250,
      useNativeDriver: false,
    }).start(() => {
      setPic("");
      setTitle("");
    });
  };

  const getCategoryPageHandler = (category) => navigation.navigate("CategoryPage", { category: category });


  return (

    <View style={styles.sectionContainer}>
      <TouchableOpacity style={styles.searchIconContainer(searchBox)} onPress={searchBoxHandler}>
        <TextInput style={styles.searchInput(searchBox)} placeholder={`${searchBox ? "Search it" : ""}`} />
        <Image
          source={require("./assets/searchIcon.png")}
          resizeMode="contain"
          style={styles.searchIcon}
        />
      </TouchableOpacity>
      <View style={styles.bannerContainer}>
        <Image
          source={require("./assets/homePageSticker.png")}
          resizeMode="contain"
          style={styles.homePageSticker}
        />
        <Text style={styles.bannerTagText}>PRO</Text>
        <Text style={styles.bannerHeaderText}>Mentorship program</Text>
        <Text style={styles.bannerContentText}>A mentor will track your progress and give tips for faster
          growth</Text>
      </View>
      <Text style={styles.middlePageTitle}>Favourite recipes</Text>
      <View style={styles.tagFoodContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} pagingEnabled={false}>
          <TouchableOpacity onPress={() => getCategoryPageHandler("Italian")}>
            <Text style={styles.tagFood}>Italian</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => getCategoryPageHandler("Indian")}>
            <Text style={styles.tagFood}>Indian</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => getCategoryPageHandler("Sea food")}>
            <Text style={styles.tagFood}>Sea food</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => getCategoryPageHandler("Iranian")}>
            <Text style={styles.tagFood}>Iranian</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => getCategoryPageHandler("Mexican")}>
            <Text style={styles.tagFood}>Mexican</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => getCategoryPageHandler("Spanish")}>
            <Text style={styles.tagFood}>Spanish</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => getCategoryPageHandler("Asian")}>
            <Text style={styles.tagFood}>Asian</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View style={styles.suggestionScrollViewContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity style={styles.suggestionContainer}
                            onPress={() => picAndTitleHandler(require("./assets/food1.png"),
                              "Marinated tofu vegan salad")}
          >
            <Image
              source={require("./assets/food1.png")}
              resizeMode="contain"
              style={styles.imageSuggestion}
            />
            <View>
              <Text style={styles.titleSuggestion}>Marinated tofu vegan salad</Text>
              <View style={styles.tagSuggestionContainer}>
                <Text style={styles.publishTimeSuggestion}>25m</Text>
                <Text style={styles.levelTagSuggestion}>Beginner</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.suggestionContainer}
                            onPress={() => picAndTitleHandler(require("./assets/food2.png"), "Marinated tofu vegan salad")}
          >
            <Image
              source={require("./assets/food2.png")}
              resizeMode="contain"
              style={styles.imageSuggestion}
            />
            <View>
              <Text style={styles.titleSuggestion}>Marinated tofu vegan salad</Text>
              <View style={styles.tagSuggestionContainer}>
                <Text style={styles.publishTimeSuggestion}>1h 25m</Text>
                <Text style={styles.levelTagSuggestion}>Intermediate</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.suggestionContainer}
                            onPress={() => picAndTitleHandler(require("./assets/food3.png"), "Marinated tofu vegan salad")}
          >
            <Image
              source={require("./assets/food3.png")}
              resizeMode="contain"
              style={styles.imageSuggestion}
            />
            <View>
              <Text style={styles.titleSuggestion}>Marinated tofu vegan salad</Text>
              <View style={styles.tagSuggestionContainer}>
                <Text style={styles.publishTimeSuggestion}>2h 30m</Text>
                <Text style={styles.levelTagSuggestion}>Starter</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.suggestionContainer}
                            onPress={() => picAndTitleHandler(require("./assets/food4.png"), "Marinated tofu vegan salad")}
          >
            <Image
              source={require("./assets/food4.png")}
              resizeMode="contain"
              style={styles.imageSuggestion}
            />
            <View>
              <Text style={styles.titleSuggestion}>Marinated tofu vegan salad</Text>
              <View style={styles.tagSuggestionContainer}>
                <Text style={styles.publishTimeSuggestion}>4h 25m</Text>
                <Text style={styles.levelTagSuggestion}>Advanced</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.suggestionContainer}
                            onPress={() => picAndTitleHandler(require("./assets/food5.png"), "Marinated tofu vegan salad")}
          >
            <Image
              source={require("./assets/food5.png")}
              resizeMode="contain"
              style={styles.imageSuggestion}
            />
            <View>
              <Text style={styles.titleSuggestion}>Marinated tofu vegan salad</Text>
              <View style={styles.tagSuggestionContainer}>
                <Text style={styles.publishTimeSuggestion}>4h 45m</Text>
                <Text style={styles.levelTagSuggestion}>Intermediate</Text>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <Animated.View style={{
        width: "100%",
        position: "absolute",
        height: "100%",
        bottom: comeUpAnim,
        zIndex: 2000,

      }}>
        <FoodPage title={title} pic={pic}
                  comingDown={comingDown} />
      </Animated.View>
    </View>

  );
};

const styles = StyleSheet.create({

  sectionContainer: {
    backgroundColor: "rgb(255,255,255)",
    minHeight: "100%",
    alignItems: "center",
    position: "relative",
  },
  searchIconContainer: searchBox => ({
    width: searchBox ? "90%" : "auto",
    transition: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: "#e1e1e1",
    borderRadius: 5,
    marginTop: 50,
    marginRight: searchBox ? 0 : "5%",
    marginLeft: searchBox ? 0 : "auto",
    zIndex: 1000,
    padding: searchBox ? 0 : 10,
    backgroundColor: "#FFFFFF",
  }),
  searchIcon: {
    width: 30,
    height: 30,

  },
  searchInput: searchBox => ({
    width: "90%",
    display: searchBox ? "flex" : "none",
    height: 50,
    paddingRight: 20,
    fontSize: 18,
  }),
  bannerContainer: {
    width: "90%",
    marginTop: 15,
    backgroundColor: "#FAF3F0",
    padding: 20,
    borderRadius: 20,
    position: "relative",

  },
  homePageSticker: {
    position: "absolute",
    left: 0,
    width: 200,
    bottom: 40,
  },
  bannerTagText: {
    color: "#E3685E",
    fontWeight: "bold",
    fontSize: 16,
    borderWidth: 3,
    borderColor: "#E3685E",
    marginLeft: "auto",
    borderRadius: 5,
    padding: 5,
    textAlign: "center",
    marginBottom: 20,
    textAlignVertical: "center",
    marginTop: 50,
  },
  bannerHeaderText: {
    fontSize: 40,
    marginBottom: 10,
    color: "#000000",
    fontFamily: "PermanentMarker-Regular",
  },
  bannerContentText: {
    fontSize: 20,
    marginTop: 10,
    fontFamily: "Signika-Medium",
    color: "#8a8a8a",
    fontWeight: "600",
  },
  middlePageTitle: {
    fontSize: 30,
    color: "#000000",
    fontFamily: "PermanentMarker-Regular",
    marginLeft: "auto",
    marginRight: "5%",
    marginTop: 20,
  },
  tagFoodContainer: {
    marginTop: 20,
    height: 50,

  },
  tagFood: {
    fontSize: 20,
    color: "#5e9384",
    backgroundColor: "#EEF8F3",
    marginRight: 15,
    padding: 10,
    borderRadius: 10,
    height: 50,
  },
  suggestionScrollViewContainer: {
    width: "90%",
    marginTop: 10,
    height: "25%",
  },
  suggestionContainer: {
    flexDirection: "row-reverse",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 5,
  },
  imageSuggestion: {
    width: 80,
    height: 80,
    marginLeft: 15,
  },
  titleSuggestion: {
    fontSize: 20,
    margin: 5,
    textAlign: "right",
    color: "#000000",
    fontFamily: "Signika-Medium",
    flexWrap: "nowrap",

  },
  tagSuggestionContainer: {
    flexDirection: "row-reverse",
    alignItems: "center",
    marginTop: 5,
  },
  publishTimeSuggestion: {
    marginLeft: 10,
    fontFamily: "Signika-Medium",

  },
  levelTagSuggestion: {
    fontFamily: "Signika-Medium",
    fontSize: 16,
    color: "#5e9384",
    borderWidth: 2,
    borderColor: "#5e9384",
    borderRadius: 5,
    padding: 5,
    textAlign: "center",
  },
});

export default HomePage;
