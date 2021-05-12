import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MainButton from '../components/MainButton';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function UserIdentification() {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();

  const navigation = useNavigation();

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!name);
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputChange(value: string) {
    setIsFilled(!!value);
    setName(value);
  }

  async function handleSubmit() {
    if (!name) return Alert.alert('Por favor, informe seu nome 😊');

    try {
      await AsyncStorage.setItem('@plantManager:username', name);
      navigation.navigate('Confirmation', {
        title: 'Prontinho!',
        subtitle:
          'Agora vamos começar a cuidar das suas plantinhas com muito cuidado.',
        buttonTitle: 'Começar',
        icon: 'smile',
        nextScreen: 'PlantSelect',
      });
    } catch {
      Alert.alert(
        'Não foi possível salvar seu nome. Por favor, tente novamente.'
      );
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        behavior='padding'
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.content}>
            <View style={styles.form}>
              <Text style={styles.emoji}>{isFilled ? '😊' : '😃'}</Text>
              <Text style={styles.formTitle}>
                Como podemos {'\n'} chamar você?
              </Text>
              <TextInput
                style={[
                  styles.input,
                  (isFocused || isFilled) && {
                    borderColor: colors.green,
                    color: colors.heading,
                  },
                ]}
                placeholder='Digite um nome'
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                onChangeText={handleInputChange}
              />
              <MainButton title='Confirmar' onPress={handleSubmit} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  content: {
    flex: 1,
    width: '100%',
  },
  form: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 54,
  },
  emoji: {
    fontSize: 44,
  },
  formTitle: {
    fontSize: 24,
    fontFamily: fonts.heading,
    lineHeight: 32,
    textAlign: 'center',
    color: colors.heading,
    marginTop: 30,
  },
  input: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: fonts.text,
    color: colors.gray,
    borderBottomWidth: 1,
    width: '100%',
    borderColor: colors.gray,
    marginTop: 50,
    padding: 10,
  },
});
