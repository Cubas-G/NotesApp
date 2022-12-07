import * as React from 'react';
import { List, Checkbox } from 'react-native-paper';
import { StyleSheet, View, } from 'react-native';

export default function Listcareer() {
    const [checked, setChecked] = React.useState(false);
    return (

        <view style={Styles.imput}>
            <List.AccordionGroup>
                <List.Accordion title="Careers" id="1">

                    <View style={Styles.chek}>
                        <Checkbox
                            status={checked ? 'checked' : 'unchecked'}
                            onPress={() => {
                                
                                setChecked(!checked);
                            }}
                        />
                    </View>
                    <List.Item title="Ing.Civil" />
                    <List.Item title="Ing.Agroforestal" />
                    <List.Item title="Ing.Zootecnia" />
                    <List.Item title="Lic.Adminisgracion de empresas" />
                    <List.Item title="Ing.Contabilidad publica" />
                    <List.Item title="Ing.Informatica administrativa" />
                </List.Accordion>
            </List.AccordionGroup>
        </view>
    );
}

const Styles = StyleSheet.create({
    imput: {
        backgroundColor: '#ffff',
        width: 300,
        height: '100%',
        marginLeft: 20,
        boxShadow: '0px 2px 0px 0px #91BFF5',
    },

    chek: {
        marginLeft: '90%',

    },

})