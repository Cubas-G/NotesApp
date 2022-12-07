import { StyleSheet, ScrollView, TouchableOpacity, Text, View } from 'react-native';
import Notes from './Notes';
import Reminders from './Reminders';
import NotesEstudent from './NotesEstudent';



export default function background() {
    return (
        <ScrollView>
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
        </ScrollView>
    );

}
const styles = StyleSheet.create({

    container1: {
        flex: 1,
        height: '100%',
    },
    styleone: {
        backgroundColor: '#24589E',
        fontSize: 20,
        height: 80,
        width: '100%',
    },
    carrer: {
        marginTop: 120,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: -330,
        height: 70,
        width: 320,
        backgroundColor: '#24589E',
        borderRadius: 10,
    
        boxShadow: '2px 2px 2px #91BFF5',

    },

    Notescarrer: {
        marginTop: 10,
        fontSize: 30,
        color: '#ffff',
        margin: 20,

    },

});
