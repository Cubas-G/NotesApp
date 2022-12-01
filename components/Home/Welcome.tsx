import { StyleSheet, ScrollView, Text, View, TouchableOpacity } from 'react-native';
import Notes from './Notes';



export default function background() {
    return (
        <View style={styles.container1}>
            <View style={styles.styleone}>
                <Text style={styles.welcome}>WELCOME</Text>
                <View>
                    <Notes />
                </View>
            </View>
        </View>
    );

}
const styles = StyleSheet.create({

    container1: {
        flex: 1,
        flexDirection: 'row',
    },
    styleone: {
      
        backgroundColor: '#24234C',
        fontSize: 20,
        height: '15%',
        width: '100%',
    },
    welcome: {
        fontSize: 30,
        color: '#fff',
        marginTop: 40,
    },

});
