import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import MainButton from '../components/MainButton';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function UserIdentification() {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();

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

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.content}>
          <View style={styles.form}>
            <Text style={styles.emoji}>{isFilled ? '😊' : '😃'}</Text>
            <Text style={styles.formTitle}>
              Como podemos {'\n'} chamar você?
            </Text>
            <TextInput
              style={[
                styles.input,
                (isFocused || isFilled) && { borderColor: colors.green },
              ]}
              placeholder='Digite um nome'
              onBlur={handleInputBlur}
              onFocus={handleInputFocus}
              onChangeText={handleInputChange}
            />
            <MainButton
              title='Confirmar'
              // style={
              //   (isFocused || isFilled) && { backgroundColor: colors.green }
              // }
            />
          </View>
        </View>
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
