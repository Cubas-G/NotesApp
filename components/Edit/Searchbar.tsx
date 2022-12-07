import { StyleSheet, ScrollView, Text, View } from "react-native";
import * as React from 'react';
import { Searchbar } from 'react-native-paper';


export default function MyComponent  () {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

    return (
        <Searchbar
        style={styles.search}
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
        />
    );
}

const styles = StyleSheet.create({
    search: {
        width: 300,
        height: 40,
        marginLeft: 30,
        marginTop: 60,
        Color: '#006CBE',

    },

});