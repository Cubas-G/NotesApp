import { StyleSheet, ScrollView, Text, View, TextInput, } from 'react-native';




export default function UserEdit() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View>
                    <View style={styles.View1} >
                        <Text style={styles.text1}>
                            Personal Information
                        </Text>
                    </View>

                    <View style={styles.Viewimput}>
                        
                    <TextInput
                        placeholder='Ingrse su nombre'
                        style={styles.imput}
                    />

                    <TextInput
                        placeholder='Ingrse su nombre'
                        style={styles.imput}
                    />

                    <TextInput
                        placeholder='Ingrse su nombre'
                        style={styles.imput}
                    />

                    <TextInput
                        placeholder='Ingrse su nombre'
                        style={styles.imput}
                    />

                    </View>


                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({

    Viewimput: {
        justifyContent: 'center',
        backgroundColor: '#008000',
        alignItems: 'center',

    },

    imput: {
        width: 300,
        marginTop: 20,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        paddingStart: 5,
        borderRadius: 5,
    },

    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    View1: {
        width: 450,
        marginTop: 80,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,

    },

    text1: {
        fontSize: 20,
        color: '#000',
        justifyContent: 'center',
        alignItems: 'center',

    },

    input: {
        height: 80,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },




});
