import { StatusBar } from "expo-status-bar";
import { StyleSheet} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabs from "./navigations/BottomTabs";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

//Fonts
import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect } from "react";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
    Poppins_400Regular,
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <NavigationContainer>
        <StatusBar style="auto" />
        <BottomTabs />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#4A4A4F',
    flex: 1,
  },
});
