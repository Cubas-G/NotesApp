import { StyleSheet, ScrollView, Text, View } from "react-native";
import Searchbar from './Searchbar';


export default function UserEdit() {
    
    return (
        <ScrollView>
            <View>

                <View style={styles.container}>
                    <Text style={styles.textgalery}>Welcome to gallery</Text>
                </View>

                <Searchbar/>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {

        backgroundColor: '#006CBE',
        fontSize: 20,
        height: 80,
        width: '100%',
    },

    textgalery: {
        color: '#006CBE',
        fontSize: 20,
        fontFamily: 'arial',
        marginLeft: 60,
        marginTop: 90,

    },

});