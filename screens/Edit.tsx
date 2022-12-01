import { SafeAreaView } from 'react-native';
import React from "react";
import Edit from '../components/Edit/UserEdit'


const UserEdit = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <Edit/>
    </SafeAreaView>
  );
};

export default UserEdit;

