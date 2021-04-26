import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Welcome } from './src/pages/Welcome';

export default function App() {
  return (
    <>
      <StatusBar hidden />
      <Welcome />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
