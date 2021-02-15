import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

import { Text, View } from "./Themed";

const JoinPremiumInvite = () => {
   return (
      <View style={styles.container}>
         <View style={styles.icon}>
            <MaterialCommunityIcons name="crown" size={16} color="white" />
         </View>
         <View style={{ backgroundColor: "transparent" }}>
            <Text style={styles.textPrimary}>Upgrade to Premium</Text>
            <Text style={styles.textSecondary}>Your love is waiting!</Text>
         </View>
      </View>
   );
};

export default JoinPremiumInvite;

const styles = StyleSheet.create({
   container: {
      width: "100%",
      borderRadius: 16,
      backgroundColor: "#f6fbfd",
      flexDirection: "row",
      alignItems: "center",
      padding: 16,
      marginBottom: 16,
   },
   icon: {
      width: 30,
      height: 30,
      borderRadius: 100,
      backgroundColor: "#52c3ff",
      justifyContent: "center",
      alignItems: "center",
      marginRight: 16,
   },
   textPrimary: {
      color: "#3e6d84",
      fontWeight: "700",
   },
   textSecondary: {
      color: "#95b8c8",
      fontSize: 13,
   },
});
