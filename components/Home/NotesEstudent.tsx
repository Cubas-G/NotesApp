import { View, Text, StyleSheet } from "react-native";

export default function NotesEstudent (){
    return (
        <View style={styles.student}>
            <Text style={styles.studenttext}>

            </Text>
        
        </View>

    );
}

const styles = StyleSheet.create({
    studenttext: {
        fontSize: 15,
        color: '#001406',

    },

    student: {
        margintop: '3em',
        color: ' #2688ff',
        width: '100em',
        height: '200',
    },

})
