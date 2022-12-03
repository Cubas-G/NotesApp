import { StyleSheet, Text, View, ScrollView} from 'react-native';


export default function Fondo() {
    return (
        <View style={styles.styleone}>
            <ScrollView>
                Hola mundo
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    styleone: {
        backgroundColor: '#24234C',
        fontSize: 20,
        height: '100%',
        width: '21.1em',
    },
    


});