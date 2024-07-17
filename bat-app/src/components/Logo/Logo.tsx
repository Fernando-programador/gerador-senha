import React from 'react';
import { View, Image, Text } from 'react-native';

import { styles } from './LogoStyle';
import batLogo from '../../../assets/logo_batman_sem_fundo.png'
export function Logo() {
    return (
        <View >
            <Text style={styles.title}>
                Genereted Password
            </Text>
            <Image style={styles.minhaLogo}
                source={batLogo}
            />
        </View>
    );
}