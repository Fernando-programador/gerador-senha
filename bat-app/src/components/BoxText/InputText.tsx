import React from 'react';
import { TextInput, View } from 'react-native';

import { styles } from './InputTextStyle';
import { useState } from 'react';

interface BoxTextProps {
    password: string
}

export function BoxText(props: BoxTextProps) {

    return (
        <View style={styles.viewStyle} >
            <TextInput
                style={styles.inputText}
                placeholder='Insert Password'
                value={props.password}
            />
        </View>
    );
}