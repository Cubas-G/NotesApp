import { StyleSheet, ScrollView, Text, View, TextInput, TouchableOpacity, Systrace, } from 'react-native';
import { grey200 } from 'react-native-paper/lib/typescript/styles/colors';




export default function UserEdit() {
    return (

        <ScrollView>

            <View style={styles.styleone}>
                <View style={styles.styletwo}>


                    <View style={styles.container}>
                        <Text style={styles.text1}>
                            COMPLETE THE FIELDS
                        </Text>


                        <TouchableOpacity>
                            <TextInput
                                placeholder='Name'
                                placeholderTextColor="#BFBDBC"
                                style={styles.imput}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <TextInput
                                placeholder='Surname'
                                placeholderTextColor="#BFBDBC"
                                style={styles.imput}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <TextInput
                                placeholder='Career'
                                placeholderTextColor="#BFBDBC"
                                style={styles.imput}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity>

                            <TextInput
                                placeholder='Year academic'
                                placeholderTextColor="#BFBDBC"
                                style={styles.imput}
                            />
                        </TouchableOpacity><br />

                        <View style={styles.textAreaContainer} >
                            <TextInput
                                style={styles.textArea}
                                underlineColorAndroid="transparent"
                                placeholder="Type something"
                                placeholderTextColor="#BFBDBC"
                                multiline={true}
                            />
                        </View>
                        <TouchableOpacity>
                            <View style={styles.save} >
                                <Text style={styles.textsave}>SAVE</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({

    save: {
        backgroundColor: '#24589E',
        marginLeft: 60,
        marginTop: 20,
        height: 70,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,

    },

    textsave: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        fontFamily: 'arial',
        color: '#FFFFFF',

    },


    styleone: {
        backgroundColor: '#24589E',
        height: 100,
        width: '100%',
        marginBottom: 150,

    },

    styletwo: {
        marginTop: 150,
        height: '100%',
        width: '100%',

    },

    textAreaContainer: {
        borderColor: '#000',
        borderWidth: 1,
        width: 300,
        height: 50,
        marginLeft: 20,
    },
    textArea: {
        height: 100,
        borderRadius: 5,

    },

    Viewimput: {
        marginTop: 10,
        backgroundColor: '#ffff',
        alignItems: 'center',
        width: 350,
        height: 400,
        borderWidth: 1,
        borderRadius: 10,

    },

    imput: {
        fontFamily: 'arial',
        marginLeft: 20,
        width: 300,
        marginTop: 20,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        paddingStart: 5,
        boxShadow: '0px 2px 0px 0px #91BFF5',
    },

    container: {
        margin: 20,
    },

    text1: {
        fontSize: 30,
        color: '#006CBE',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 30,

    },

    input: {
        height: 80,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },




});




