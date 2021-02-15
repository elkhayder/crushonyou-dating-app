import {
   AntDesign,
   Ionicons,
   MaterialCommunityIcons,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";

import TabTwoScreen from "../screens/TabTwoScreen";
import HomeStackNavigator from "./HomeStackNavigator";
import MessagesStackNavigator from "./MessagesStackNavigator";

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
   const colorScheme = useColorScheme();

   return (
      <BottomTab.Navigator
         initialRouteName="Home"
         tabBarOptions={{
            activeTintColor: Colors.white,
            inactiveTintColor: Colors.white,
            style: {
               margin: 16,
               borderRadius: 8,
               elevation: 0,
               backgroundColor: "#19516f",
            },
            showLabel: false,
         }}
      >
         <BottomTab.Screen
            name="Home"
            component={HomeStackNavigator}
            options={{
               tabBarIcon: ({ focused, color, size }) => (
                  <MaterialCommunityIcons
                     name={focused ? "folder-heart" : "folder-heart-outline"}
                     size={size - 4}
                     color={color}
                  />
               ),
            }}
         />
         <BottomTab.Screen
            name="Chat"
            component={MessagesStackNavigator}
            options={{
               tabBarIcon: ({ focused, color, size }) => (
                  <Ionicons
                     name={focused ? "chatbubble" : "chatbubble-outline"}
                     size={size - 4}
                     color={color}
                  />
               ),
            }}
         />
         <BottomTab.Screen
            name="Notifications"
            component={TabTwoScreen}
            options={{
               tabBarIcon: ({ focused, color, size }) => (
                  <Ionicons
                     name={focused ? "notifications" : "notifications-outline"}
                     size={size - 4}
                     color={color}
                  />
               ),
            }}
         />
         <BottomTab.Screen
            name="Settings"
            component={TabTwoScreen}
            options={{
               tabBarIcon: ({ focused, color, size }) => (
                  <Ionicons
                     name={focused ? "settings" : "settings-outline"}
                     size={size - 4}
                     color={color}
                  />
               ),
            }}
         />
      </BottomTab.Navigator>
   );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
// function TabBarIcon(props: {
//    name: React.ComponentProps<typeof Ionicons>["name"];
//    color: string;
// }) {
//    return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
// }

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
