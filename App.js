import React from 'react';
import { StyleSheet, StatusBar, Text, View, SafeAreaView, Platform } from 'react-native';

import CurrentPrice from './src/components/CurrentPrice/index';
import HistoryGraphic from './src/components/HistoryGraphic/index';
import QuotacionList from './src/components/QuotacionList/index';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      
      <StatusBar backgroundColor='red' barStyle="ligth-content"/>
      <CurrentPrice/>
      <HistoryGraphic/>
      <QuotacionList/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    paddingTop: Platform.OS === "android" ? 40: 0
  },
});
