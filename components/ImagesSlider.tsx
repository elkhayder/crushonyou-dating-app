import React, { useState } from "react";
import {
   StyleSheet,
   Image,
   Dimensions,
   TouchableWithoutFeedback,
} from "react-native";

import { Text, View } from "./Themed";

const ImagesSlider = ({ images }: { images: string[] }) => {
   const [imageIndex, setImageIndex] = useState(0);
   return (
      <View style={styles.container}>
         <View style={styles.breadCrumbsContainer}>
            {images.map((image, i) => (
               <View
                  key={i}
                  style={[
                     styles.breadcrumb,
                     i === imageIndex && styles.activeBreadcrumb,
                  ]}
               />
            ))}
         </View>
         <Image
            source={{
               uri: images[imageIndex],
            }}
            key={imageIndex}
            style={styles.image}
         />
         <View style={styles.touchablesContainer}>
            <TouchableWithoutFeedback
               touchSoundDisabled={true}
               onPress={() => {
                  setImageIndex(
                     imageIndex !== 0 ? imageIndex - 1 : images.length - 1
                  );
               }}
            >
               <View style={styles.dummyTouchablesView} />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
               touchSoundDisabled={true}
               onPress={() => {
                  setImageIndex((imageIndex + 1) % images.length);
               }}
            >
               <View style={styles.dummyTouchablesView} />
            </TouchableWithoutFeedback>
         </View>
      </View>
   );
};

const avaliableWindowWidth = Dimensions.get("window").width - 32;

const styles = StyleSheet.create({
   container: {
      position: "relative",
      width: "100%",
      height: "100%",
   },
   image: {
      width: avaliableWindowWidth, // Get window width minus horizontal margin of container 16 * 2
      height: (avaliableWindowWidth * 4) / 3, // Keeping 4:3 image ratio
      resizeMode: "cover",
      borderRadius: 16,
   },
   breadCrumbsContainer: {
      position: "absolute",
      top: 10,
      backgroundColor: "transparent",
      zIndex: 100,
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 8,
   },
   breadcrumb: {
      width: 1,
      flexGrow: 1,
      height: 4,
      borderRadius: 2,
      backgroundColor: "#444444",
      opacity: 0.2,
      marginHorizontal: 8,
   },
   activeBreadcrumb: {
      opacity: 0.8,
   },
   touchablesContainer: {
      position: "absolute",
      top: 0,
      left: 0,
      height: (avaliableWindowWidth * 4) / 3,
      width: avaliableWindowWidth,
      flexDirection: "row",
      zIndex: 99,
      backgroundColor: "transparent",
   },
   dummyTouchablesView: {
      height: (avaliableWindowWidth * 4) / 3,
      width: avaliableWindowWidth / 2,
      backgroundColor: "transparent",
   },
});
export default ImagesSlider;
