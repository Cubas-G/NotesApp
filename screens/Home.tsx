import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Title from "../components/Home/Welcome";

//Custom Components
const Home = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
       <Title/>
    </SafeAreaView>
  );
};

export default Home;
