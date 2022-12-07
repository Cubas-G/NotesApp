import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';

export default function Profil() {
    return (

        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>

                <View style={styles.styleone}>
                    <View style={styles.styletwo}>
                        <Text style={styles.text1}>
                            Lista de Usuarios agregados
                        </Text>
                    </View>
                </View>


                <View style={styles.container0}>

                    <View style={styles.container1}>
                        {/* PRIMERA FORMA */}
                        <View style={styles.Firsth}>
                            <View>
                                <Image
                                    style={styles.img}
                                    source={{ uri: "https://live.staticflickr.com/4176/34494768495_ffac0145af_z.jpg" }}
                                />
                            </View>

                            <View style={styles.Third}>
                                <Text style={styles.Text2}>Date: 01/12/22</Text>
                                <Text style={styles.Text2}>Field practice</Text>
                                <Text style={styles.Text2}>Third year veterinary medicine</Text>
                            </View>
                        </View>


                        {/* SEGUNDA FORMA */}
                        <View style={styles.Firsth}>
                            <View>
                                <Image
                                    style={styles.img}
                                    source={{ uri: "https://th.bing.com/th/id/R.2e7fc488bea158c815302fd878152648?rik=f7WDSIovQHPT2A&pid=ImgRaw&r=0" }}
                                />
                            </View>
                            <View style={styles.Third}>
                                <Text style={styles.Text2}>Date: 01/12/22</Text>
                                <Text style={styles.Text2}>Cleaning in the parking lotand</Text>
                                <Text style={styles.Text2}>Second year of biology</Text>
                            </View>
                        </View>


                        {/* TERCERA FORMA */}
                        <View style={styles.Firsth}>
                            <View>
                                <Image
                                    style={styles.img}
                                    source={{ uri: "https://th.bing.com/th/id/R.8435ec947af5fc4a7c42d0308aec06af?rik=5b1HHJaM8ftGvw&pid=ImgRaw&r=0&sres=1&sresct=1" }}
                                />
                            </View>
                            <View style={styles.Third}>
                                <Text style={styles.Text2}>Date: 08/11/22</Text>
                                <Text style={styles.Text2}>Care for patients in the hospital</Text>
                                <Text style={styles.Text2}>Intercultural Nursing Fourth year</Text>
                            </View>
                        </View>

                        {/* CUARTA FORMA */}
                        <View style={styles.Firsth}>
                            <View>
                                <Image
                                    style={styles.img}
                                    source={{ uri: "https://th.bing.com/th/id/R.8435ec947af5fc4a7c42d0308aec06af?rik=5b1HHJaM8ftGvw&pid=ImgRaw&r=0&sres=1&sresct=1" }}
                                />
                            </View>
                            <View style={styles.Third}>
                                <Text style={styles.Text2}>Date: 08/11/22</Text>
                                <Text style={styles.Text2}>Care for patients in the hospital</Text>
                                <Text style={styles.Text2}>Intercultural Nursing Fourth year</Text>
                            </View>
                        </View>

                        {/* QUINTA FORMA */}
                        <View style={styles.Firsth}>
                            <View>
                                <Image
                                    style={styles.img}
                                    source={{ uri: "https://th.bing.com/th/id/R.8435ec947af5fc4a7c42d0308aec06af?rik=5b1HHJaM8ftGvw&pid=ImgRaw&r=0&sres=1&sresct=1" }}
                                />
                            </View>
                            <View style={styles.Third}>
                                <Text style={styles.Text2}>Date: 08/11/22</Text>
                                <Text style={styles.Text2}>Care for patients in the hospital</Text>
                                <Text style={styles.Text2}>Intercultural Nursing Fourth year</Text>
                            </View>
                        </View>
                    </View>

                </View>



            </View>
        </ScrollView >
    );
}

const styles = StyleSheet.create({

    container0: {
        marginTop: 120,
        height: '100%',
        width: '100%',

    },

    container: {

    },

    text1: {
        color: '#000',
        fontSize: 25,
        fontFamily: 'Perpetua',

    },

    styleone: {
        backgroundColor: '#24589E',
        height: 100,
        width: '100%',

    },

    styletwo: {
        marginTop: 130,
        height: 80,
        width: 320,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginLeft: 50,
        marginBottom: 20,
        marginRight: -330,
        backgroundColor: '#24589E',
        boxShadow: '2px 2px 2px #91BFF5',
    },



    img: {
        height: 80,
        width: 80,
        borderRadius: 5,
        marginLeft: 50,
    },

    container1: {
        marginTop: '20',
        flex: 1,
        flexDirection: 'column',
    },

    Firsth: {
        marginTop: 20,
        height: 80,
        width: 320,
        margin: 2,
    },


    Third: {
        marginTop: -80,
        marginLeft: 130,
        height: 80,
        width: 235,
        borderRadius: 10,
        boxShadow: '2px 2px 2px #91BFF5',

    },

    Text1: {
        color: '#FFFFFF',
        margin: 10,
        fontSize: 25,
        fontWeight: 'bold',
        fontStyle: 'italic',
    },

    Text2: {
        marginTop: 5,
        color: '#000',
        marginLeft: 10,
        fontSize: 15,
    },



});