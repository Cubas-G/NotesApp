import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';


export default function Notes() {
    return (
        <ScrollView horizontal={true}
        showsHorizontalScrollIndicator = {false}
        >
            <View style={styles.container1}>

                {/* PRIMERA FORMA */}

                <View style={styles.Firsth}>
                    <View style={styles.Second}>
                        <Text style={styles.Text1}>Notes of the day</Text>
                    </View>

                    <View>
                        <Image
                            style={{ width: 310, height: 200, margin: 5 }}
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
                    <View style={styles.Second}>
                        <Text style={styles.Text1}>Notes of the week</Text>
                    </View>
                    <View>
                        <Image
                            style={{ width: 310, height: 200, margin: 5 }}
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
                    <View style={styles.Second}>
                        <Text style={styles.Text1}>Notes of the month</Text>
                    </View>
                    <View>
                        <Image
                            style={{ width: 310, height: 200, margin: 5 }}
                            source={{ uri: "https://th.bing.com/th/id/R.8435ec947af5fc4a7c42d0308aec06af?rik=5b1HHJaM8ftGvw&pid=ImgRaw&r=0&sres=1&sresct=1" }}
                        />
                    </View>
                    <View style={styles.Third}>
                        <Text style={styles.Text2}>Date: 08/11/22</Text>
                        <Text style={styles.Text2}>Care for patients in the hospital</Text>
                        <Text style={styles.Text2}>Intercultural Nursing Fourth year</Text>
                    </View>
                </View>

                <View style={styles.Firsth}>
                    <View style={styles.Second}>
                        <Text style={styles.Text1}>Notes of the year</Text>
                    </View>
                    <View>
                        <Image
                            style={{ width: 310, height: 200, margin: 5 }}
                            source={{ uri: "https://th.bing.com/th/id/R.8435ec947af5fc4a7c42d0308aec06af?rik=5b1HHJaM8ftGvw&pid=ImgRaw&r=0&sres=1&sresct=1" }}
                        />
                    </View>
                    <View style={styles.Third}>
                        <Text style={styles.Text2}>Date: 08/11/22</Text>
                        <Text style={styles.Text2}>Care for patients in the hospital</Text>
                        <Text style={styles.Text2}>Intercultural Nursing Fourth year</Text>
                    </View>
                </View>
            </View >
        </ScrollView>

    );

}

const styles = StyleSheet.create({

    container1: {
        flexDirection: 'row',
        marginTop: -150,
    },

    Firsth: {
        marginTop: 150,
        height: 320,
        width: 320,
        backgroundColor: '#ffff',
        borderRadius: 20,
        margin: 2,
        boxShadow: '2px 2px 2px #91BFF5',
    },

    Second: {
        height: 50,
        width: 320,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',

    },

    Third: {
        height: 70,
        width: 320,
        backgroundColor: '#ffff',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        boxShadow: '2px 2px 2px #91BFF5',
    },

    Text1: {
        color: '#000',
        margin: 10,
        fontSize: 25,
        fontFamily: 'Copperplate',
    },

    Text2: {
        color: '#000',
        marginLeft: 10,
        fontSize: 15,
    },
})