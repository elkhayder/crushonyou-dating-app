import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import * as React from "react";
import {
   useFonts,
   Poppins_100Thin,
   Poppins_100Thin_Italic,
   Poppins_200ExtraLight,
   Poppins_200ExtraLight_Italic,
   Poppins_300Light,
   Poppins_300Light_Italic,
   Poppins_400Regular,
   Poppins_400Regular_Italic,
   Poppins_500Medium,
   Poppins_500Medium_Italic,
   Poppins_600SemiBold,
   Poppins_600SemiBold_Italic,
   Poppins_700Bold,
   Poppins_700Bold_Italic,
   Poppins_800ExtraBold,
   Poppins_800ExtraBold_Italic,
   Poppins_900Black,
   Poppins_900Black_Italic,
} from "@expo-google-fonts/poppins";

export default function useCachedResources() {
   const [isLoadingComplete, setLoadingComplete] = React.useState(false);
   let [poppinsFontLoaded] = useFonts({
      Poppins_100Thin,
      Poppins_100Thin_Italic,
      Poppins_200ExtraLight,
      Poppins_200ExtraLight_Italic,
      Poppins_300Light,
      Poppins_300Light_Italic,
      Poppins_400Regular,
      Poppins_400Regular_Italic,
      Poppins_500Medium,
      Poppins_500Medium_Italic,
      Poppins_600SemiBold,
      Poppins_600SemiBold_Italic,
      Poppins_700Bold,
      Poppins_700Bold_Italic,
      Poppins_800ExtraBold,
      Poppins_800ExtraBold_Italic,
      Poppins_900Black,
      Poppins_900Black_Italic,
   });
   // Load any resources or data that we need prior to rendering the app
   React.useEffect(() => {
      async function loadResourcesAndDataAsync() {
         try {
            SplashScreen.preventAutoHideAsync();

            // Load fonts
            await Font.loadAsync({
               ...Ionicons.font,
               "space-mono": require("../assets/fonts/SpaceMono-Regular.ttf"),
            });
         } catch (e) {
            // We might want to provide this error information to an error reporting service
            console.warn(e);
         } finally {
            setLoadingComplete(true);
            SplashScreen.hideAsync();
         }
      }

      loadResourcesAndDataAsync();
   }, []);

   return poppinsFontLoaded && isLoadingComplete;
}
