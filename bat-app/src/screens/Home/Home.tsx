import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import styles from './HomeStyle'
import { Logo } from "../../components/Logo/Logo";
import { ButtonBat } from "../../components/Button/ButtonBat";

export default function Home() {


    return (
        <View style={{
            flex: 1,
            backgroundColor: '#0a0a0a',
            justifyContent: 'center'

        }}>
            <View style={styles.HomeLogo}>
                <Logo />
            </View>


            <View>
                <ButtonBat />
            </View>


            <StatusBar style="light" />

        </View>
    )

};
