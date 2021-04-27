import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
} from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface MainButtonProps extends TouchableOpacityProps {
  title: string;
}

export default function MainButton({ title, ...rest }: MainButtonProps) {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.5}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginTop: 50,
    height: 56,
    width: 231,
  },
  buttonText: {
    fontSize: 16,
    color: colors.white,
    fontFamily: fonts.complement,
  },
});
