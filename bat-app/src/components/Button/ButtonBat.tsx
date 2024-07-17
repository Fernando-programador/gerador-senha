import React, { useState } from 'react';
import { View, Button } from 'react-native';
import { styles } from './ButtonBatStyle';
import { BoxText } from '../BoxText/InputText';
import generateToken from '../../Services/PasswordService';
import * as clipboard from 'expo-clipboard';

export function ButtonBat() {
    const [pass, setPassword] = useState('')

    function handleGeneratePass() {
        let generatePass = generateToken
        setPassword(generatePass)
        console.log('verde precionado')
    }

    function handleCopy() {
        clipboard.setStringAsync(pass)
    }

    return (


        <View>

            <BoxText password={pass} />

            <View style={styles.buttonVerde}>
                <Button
                    accessibilityLabel="Password Generate!!!"
                    title='GENERATE'
                    color={'#228b22'}
                    onPress={handleGeneratePass}
                />
                <View style={styles.buttonAzul}>

                    <Button
                        accessibilityLabel="Copy is sucess"
                        title='COPY'
                        color={'#2196f3'}
                        onPress={handleCopy}
                    />
                </View>
            </View>
        </View>






    );
} export default ButtonBat