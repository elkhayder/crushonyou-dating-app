import React from "react";
import { StatusBar, TouchableWithoutFeedback } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, Octicons } from "@expo/vector-icons";

import CardsStackScreen from "../screens/CardsStackScreen";
import { Text, View } from "../components/Themed";

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
   return (
      <Stack.Navigator
         screenOptions={{
            cardStyle: { backgroundColor: "#fff" },
            headerStyle: {
               elevation: 0,
            },
         }}
         initialRouteName="Cards"
      >
         <Stack.Screen
            name="Cards"
            component={CardsStackScreen}
            options={{
               header: () => <HomeScreenHeader />,
            }}
         />
         <Stack.Screen
            name="messages"
            component={CardsStackScreen}
            options={{ title: "Messages" }}
         />
      </Stack.Navigator>
   );
};

export default HomeStackNavigator;

const HomeScreenHeader = () => {
   const navigation = useNavigation();
   return (
      <View
         style={{
            paddingTop: 32 + (StatusBar.currentHeight || 0),
            paddingHorizontal: 24,
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 16,
         }}
      >
         <TouchableWithoutFeedback
            onPress={() => {
               navigation.navigate("messages");
            }}
         >
            <View style={{ position: "relative" }}>
               <AntDesign name="heart" size={28} color="#f7ebd2" />
               <View
                  style={{
                     position: "absolute",
                     top: -2,
                     right: -2,
                     backgroundColor: "#ffcb57",
                     width: 17,
                     height: 17,
                     borderRadius: 100,
                     justifyContent: "center",
                  }}
               >
                  <Text
                     style={{
                        fontSize: 12,
                        textAlign: "center",
                        color: "white",
                        fontWeight: "700",
                     }}
                  >
                     4
                  </Text>
               </View>
            </View>
         </TouchableWithoutFeedback>
         <TouchableWithoutFeedback>
            <Octicons name="settings" size={28} color="#3c6c82" />
         </TouchableWithoutFeedback>
      </View>
   );
};
