import { SafeAreaView } from 'react-native';
import React from "react";
import Profile from '../components/Profile/Profil'


const Profil = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <Profile/>
    </SafeAreaView>
  );
};

export default Profil;

