import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';




export default function Notes() {
    return (

        <View style={styles.container1}>
            <ScrollView horizontal={true}>
                
                {/* PRIMERA FORMA */}
                <View>
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
                            <Text style={styles.Text1}>NOTES OF THE DAY</Text>
                        </View>

                        <View>
                            <Image
                                style={{ width: 310, height: 200, margin: 5 }}
                                source={{ uri: "https://live.staticflickr.com/4176/34494768495_ffac0145af_z.jpg" }}
                            />
                        </View>

                        <View>
                        </View>

                        <View style={styles.Third}>
                            <Text style={styles.Text2}>Date: 01/12/22</Text>
                            <Text style={styles.Text2}>Field practice</Text>
                            <Text style={styles.Text2}>Third year veterinary medicine</Text>
                        </View>
                    </View>

                    {/* TERCERA FORMA */}

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

                        <View>
                        </View>
                        <View style={styles.Third}>
                            <Text style={styles.Text2}>Date: 01/12/22</Text>
                            <Text style={styles.Text2}>Field practice</Text>
                            <Text style={styles.Text2}>Third year veterinary medicine</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>

    );

}

const styles = StyleSheet.create({

    container1: {
        flexDirection: 'row',
    },

    Firsth: {
        marginTop: 100,
        height: 320,
        width: 320,
        backgroundColor: '#22432D',
        borderRadius: 20,
        margin: 10,
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