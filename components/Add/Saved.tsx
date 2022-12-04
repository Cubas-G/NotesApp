import { StyleSheet, ScrollView, Text, View, TextInput, TouchableOpacity, } from 'react-native';




export default function UserEdit() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.container0}>
                    <View style={styles.View1} >
                        <Text style={styles.text1}>
                            COMPLETE THE FIELDS
                        </Text>
                        <View style={styles.Viewimput}>

                            <TouchableOpacity>
                                <TextInput
                                    placeholder='Name'
                                    placeholderTextColor="#9a73ef"
                                    style={styles.imput}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <TextInput
                                    placeholder='Surname'
                                    style={styles.imput}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <TextInput
                                    placeholder='Career'
                                    style={styles.imput}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity>

                                <TextInput
                                    placeholder='Year academic'
                                    style={styles.imput}
                                />
                            </TouchableOpacity><br />

                            <View style={styles.textAreaContainer} >
                                <TextInput
                                    style={styles.textArea}
                                    underlineColorAndroid="transparent"
                                    placeholder="Type something"
                                    placeholderTextColor='#487E02'
                                    multiline={true}
                                />
                            </View>

                        </View>



                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({

    textAreaContainer: {
        borderColor: '#000',
        borderWidth: 1,
        width: '85%',
        height: 50,
    },
    textArea: {
        height: 100,
    },

    container0: {
    },

    Viewimput: {
        marginTop: 10,
        backgroundColor: '#ffff',
        justifyContent: 'center',
        alignItems: 'center',
        width: 350,
        height: 400,
        borderWidth: 1,
        borderRadius: 10,

    },

    imput: {
        backgroundColor: '#F1EEEF',
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
        width: 400,
        marginTop: 100,
        height: 500,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        backgroundColor: '#32A6DE',
        borderRadius: 10,

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
        alignItems: 'center',
        justifyContent: 'center',
    },




});




