import React from "react";
import { StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import { View } from "../components/Themed";
import MessagesScreen from "../screens/MessagesScreen";

const Stack = createStackNavigator();

const MessagesStackNavigator = () => {
   return (
      <Stack.Navigator
         screenOptions={{
            cardStyle: { backgroundColor: "#fff" },
            headerStyle: {
               //    elevation: 0,
               //    height: 100,
            },
            headerTitleAlign: "center",
            headerTitleStyle: {
               // textTransform: "uppercase",
               fontFamily: "Poppins_600SemiBold",
            },
         }}
         //  headerMode="none"
         initialRouteName="messages"
      >
         <Stack.Screen
            name="messages"
            component={MessagesScreen}
            options={{ title: "Messages" }}
         />
      </Stack.Navigator>
   );
};

export default MessagesStackNavigator;
