import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, View, StyleSheet } from 'react-native';
import Calendar1 from './Calendar1';
import Calendar2 from './Calendar2';
import Calendar3 from './Calendar3';

const Examples = () => {
  return (
    <View testID={'App'}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView testID={'scroll-view'}>
          <Calendar1 />
          <Calendar2 />
          <Calendar3 />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Examples;

const styles = StyleSheet.create({
  safeArea: {
    height: '100%',
  },
});
