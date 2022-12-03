import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';


export default function Notes() {
    return (
        <ScrollView horizontal={true}>
            <View style={styles.container1}>

                {/* PRIMERA FORMA */}

                <View style={styles.Firsth}>
                    <View style={styles.Second}>
                        <Text style={styles.Text1}>NOTES OF THE DAY</Text>
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
                        <Text style={styles.Text1}>NOTES OF THE WEEK</Text>
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
                        <Text style={styles.Text1}>NOTES MONTH</Text>
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
        backgroundColor: '#22432D',
        borderRadius: 20,
        margin: 2,
    },

    Second: {
        height: 50,
        width: 320,
        backgroundColor: '#2A2D2E',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',

    },

    Third: {
        height: 70,
        width: 320,
        backgroundColor: '#2A2D2E',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },

    Text1: {
        color: '#FFFFFF',
        margin: 10,
        fontSize: 25,
        fontWeight: 'bold',
        fontStyle: 'italic',
    },

    Text2: {
        color: '#FFFFFF',
        marginLeft: 10,
        fontSize: 15,
    },
})