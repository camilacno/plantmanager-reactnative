import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import MainButton from '../components/MainButton';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Confirmation() {
  const navigation = useNavigation();

  function handleMoveOn() {
    navigation.navigate('PlantSelect');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>😊</Text>
        <Text style={styles.title}>Prontinho!</Text>

        <Text style={styles.subtitle}>
          Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
        </Text>
        <MainButton title='Começar' onPress={handleMoveOn} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 30,
  },
  emoji: {
    fontSize: 55,
    marginBottom: 55,
  },
  title: {
    fontSize: 22,
    fontFamily: fonts.heading,
    textAlign: 'center',
    color: colors.heading,
    lineHeight: 38,
    marginTop: 15,
  },
  subtitle: {
    fontSize: 17,
    fontFamily: fonts.text,
    textAlign: 'center',
    color: colors.heading,
    paddingVertical: 20,
  },
});
