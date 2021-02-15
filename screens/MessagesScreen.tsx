import React from "react";
import {
   Dimensions,
   FlatList,
   Image,
   StyleSheet,
   TouchableNativeFeedback,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Text, View } from "../components/Themed";

const MessagesScreen = () => {
   return (
      <FlatList
         style={styles.container}
         data={Array(20).fill("5")}
         keyExtractor={(item) => Math.random().toString()}
         renderItem={(conversation) => {
            return <Conversation />;
         }}
      ></FlatList>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingVertical: 8,
   },
});

const Conversation = () => {
   return (
      <TouchableNativeFeedback onPress={() => console.log("hey")}>
         <View
            style={{
               // paddingHorizontal: 8,
               height: 75,
               flexDirection: "row",
               alignItems: "center",
            }}
         >
            <Image
               source={{
                  uri:
                     "https://designshack.net/wp-content/uploads/placeholder-image.png",
                  width: 55,
                  height: 55,
               }}
               style={{
                  borderRadius: 60,
                  resizeMode: "cover",
                  marginHorizontal: 15,
               }}
            />
            <View transparent>
               <Text numberOfLines={1}>Simo 7mida</Text>
               <View
                  transparent
                  style={{
                     flexDirection: "row",
                     alignItems: "center",
                     width: Dimensions.get("window").width - 160,
                  }}
               >
                  <Ionicons
                     name={
                        Math.random() >= 0.5 ? "checkmark" : "checkmark-done"
                     }
                     size={15}
                     color="#676666"
                     style={{ marginRight: 4 }}
                  />
                  <Text
                     style={{
                        fontSize: 11,
                        color: "#696969",
                        // flexWrap: "wrap",
                     }}
                     numberOfLines={1}
                     ellipsizeMode="tail"
                  >
                     Imta ghatji ? Imta ghatji ? Imta ghatji ? Imta ghatji ?
                  </Text>
               </View>
            </View>
            <View
               transparent
               style={{
                  marginLeft: "auto",
                  marginRight: 15,
                  alignItems: "center",
                  justifyContent: "center",
               }}
            >
               <Ionicons name="time-outline" size={14} color="#545454" />
               <Text style={{ fontSize: 9, marginTop: 4, color: "#545454" }}>
                  12:44
               </Text>
            </View>
         </View>
      </TouchableNativeFeedback>
   );
};

export default MessagesScreen;
