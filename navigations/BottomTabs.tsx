import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Ionicons, FontAwesome, FontAwesome5 } from "@expo/vector-icons";

import Home from "../screens/Home";
import Add from '../screens/Add';
import Profile from '../screens/Profile';
import Edit from '../screens/Edit';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <MyTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Add" component={Add} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Edit" component={Edit} />

    </Tab.Navigator>
  );
};

const MyTabBar = ({ state, descriptors, navigation }: any) => {
  return (
    <View style={styles.bottomBar}>
      {state.routes.map((route: any, index: any) => {
        const isFocused = state.index === index;
        const { options } = descriptors[route.key];

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const color = isFocused ? "#eeeee4" : "#000";
        return (
          <TouchableOpacity
            key={index}
            onPress={() => onPress()}
            testID={options.tabBarTestID}
            accessibilityRole="button"
          >
            {/*  Primer icono de Scroll */}
            {index === 0 && (
              <View style={styles.icon}>
                {isFocused ? (
                  <Ionicons name="home" size={40} color={color} />
                ) : (
                  <Ionicons name="home" size={40} color={color} />
                )}
              </View>
            )}

            {/* Segundo incono de Scroll */}
            {index === 1 && (

              <View style={styles.icon}>
                {isFocused ? (
                  <Ionicons name="person-add-sharp" size={40} color={color} />
                ) : (
                  <Ionicons name="person-add-sharp" size={40} color={color} />
                )}
              </View>
            )}

            {/* Tercer incono de Scroll */}

            {index === 2 && (

              <View style={styles.icon}>
                {isFocused ? (
                  <FontAwesome name="user-circle" size={40} color={color} />
                ) : (
                  <FontAwesome name="user-circle" size={40} color={color} />
                )}
              </View>
            )}

            {/* Cuarto incono de Scroll */}

            {index === 3 && (

              <View style={styles.icon}>
                {isFocused ? (
                  <FontAwesome5 name="user-edit" size={40} color={color} />
                ) : (
                  <FontAwesome5 name="user-edit" size={40} color={color} />
                )}
              </View>
            )}

          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {},
  bottomBar: {
    height: 100,
    backgroundColor: "#154c79",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },

});

export default BottomTabs;
