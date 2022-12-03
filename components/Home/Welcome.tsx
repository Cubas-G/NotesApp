import { StyleSheet, ScrollView, TouchableOpacity, Text, View } from 'react-native';
import Notes from './Notes';
import Reminders from './Reminders';
import NotesEstudent from './NotesEstudent';



export default function background() {
    return (
        <View style={styles.styleone}>
            < TouchableOpacity>
                <View style={styles.carrer}>
                    <Text style={styles.Notescarrer}>NOTES BY CARRER</Text>
                </View>
            </TouchableOpacity>
            <View>
                <View>
                    <Notes />
                </View>

                <View>
                    <Reminders />
                </View>

                <View>
                    <NotesEstudent />
                </View>
            </View>

        </View>
    );

}
const styles = StyleSheet.create({

    container1: {
        flex: 1,
        height: '100%',
    },
    styleone: {
        backgroundColor: '#24234C',
        fontSize: 20,
        height: '15%',
        width: '100%',
    },
  

    carrer: {
        marginTop: 150,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: -330,
        height: 70,
        width: 320,
        backgroundColor: '#d3d3d3',
        borderRadius: 10,
        borderWidth: 1,

    },

    Notescarrer: {
        marginTop: 10,
        fontSize: 30,
        color: '#2A2D',
        margin: 20,

    },

});
