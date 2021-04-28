import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface EnviromentButtonProps extends RectButtonProps {
  title: string;
  active?: boolean;
}

export default function EnviromentButton({
  title,
  active = false,
  ...rest
}: EnviromentButtonProps) {
  return (
    <RectButton
      style={[styles.button, active && styles.buttonActive]}
      {...rest}
    >
      <Text style={[styles.text, active && styles.textActive]}>{title}</Text>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.shape,
    width: 76,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  buttonActive: {
    backgroundColor: colors.green_light,
  },
  text: {
    fontSize: 13,
    fontFamily: fonts.complement,
    color: colors.heading,
  },
  textActive: {
    fontFamily: fonts.heading,
    color: colors.green_dark,
  },
});
