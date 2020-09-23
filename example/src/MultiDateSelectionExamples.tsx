import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, View, StyleSheet } from 'react-native';
import MultiDateSelection from './Calendars/MultiDateSelection';

const MultiDateSelectionExamples = () => {
  return (
    <View testID={'App'}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView testID={'scroll-view'}>
          <MultiDateSelection.Basic />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default MultiDateSelectionExamples;

const styles = StyleSheet.create({
  safeArea: {
    height: '100%',
  },
});
