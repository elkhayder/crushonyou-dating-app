import React from "react";
import {
   StyleSheet,
   Dimensions,
   TouchableWithoutFeedback,
   // Types
   StyleProp,
   GestureResponderEvent,
   ViewStyle,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

import ImagesSlider from "./ImagesSlider";
import { UserType } from "../types";
import { Text, View } from "./Themed";

const UserCard = ({ id, name, bio, images, age }: UserType) => {
   return (
      <>
         <View style={styles.container}>
            <ImagesSlider images={images} />
            <LinearGradient
               pointerEvents="none"
               colors={[
                  "rgba(0,0,0, 0.0)",
                  "rgba(0,0,0, 0.3)",
                  "rgba(0,0,0, 0.5)",
                  "rgba(0,0,0, 0.7)",
               ]}
               style={styles.userInfoContainer}
            >
               <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={styles.userName}
               >
                  {name} - {age}
               </Text>
               <Text
                  numberOfLines={2}
                  ellipsizeMode="tail"
                  style={styles.userBio}
               >
                  {bio}
               </Text>
            </LinearGradient>
         </View>
         <View style={styles.actionsContainer}>
            <Button
               onPress={() => console.log("skip")}
               icon={<AntDesign name="close" size={20} color="#ffcb57" />}
            />
            <Button
               style={{ width: 60, height: 60, backgroundColor: "#52c3ff" }}
               onPress={() => console.log("super like")}
               icon={
                  <MaterialCommunityIcons
                     name="lightning-bolt"
                     size={28}
                     color="#ffffff"
                  />
               }
            />
            <Button
               style={{ backgroundColor: "#fdf6f8" }}
               onPress={() => console.log("like")}
               icon={<AntDesign name="heart" size={20} color="#fc77a0" />}
            />
         </View>
      </>
   );
};

type ButtonProps = {
   style?: StyleProp<ViewStyle>;
   onPress: (event: GestureResponderEvent) => void;
   icon: React.ReactChild;
};
const Button = ({ style, onPress, icon }: ButtonProps) => {
   return (
      <TouchableWithoutFeedback touchSoundDisabled={true} onPress={onPress}>
         <View
            style={[
               {
                  width: 45,
                  height: 45,
                  borderRadius: 100,
                  backgroundColor: "#fdf9f0",
                  alignItems: "center",
                  justifyContent: "center",
                  marginHorizontal: 10,
               },
               style,
            ]}
         >
            {icon}
         </View>
      </TouchableWithoutFeedback>
   );
};

export default UserCard;

const avaliableWindowWidth = Dimensions.get("window").width - 32;

const styles = StyleSheet.create({
   container: {
      position: "relative",
      borderRadius: 16,
      overflow: "hidden",
      width: avaliableWindowWidth, // Get window width minus horizontal margin of container (16 * 2)
      height: (avaliableWindowWidth * 4) / 3, // Keeping 4:3 image ratio
   },
   userInfoContainer: {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: Math.max((avaliableWindowWidth * 4) / 9, 150),
      padding: 16,
      paddingBottom: 24,
      justifyContent: "flex-end",
      // zIndex: 80,
   },
   userName: {
      color: "white",
      fontWeight: "700",
      fontSize: 17,
      marginBottom: 8,
   },
   userBio: {
      color: "#eaeaea",
      fontSize: 14,
   },
   actionsContainer: {
      width: avaliableWindowWidth,
      // height: 20,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 16,
      // backgroundColor: "#000",
   },
});
