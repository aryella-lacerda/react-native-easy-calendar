import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, View, StyleSheet } from 'react-native';
import DateSelection from './Calendars/DateSelection';

const DateSelectionExamples = () => {
  return (
    <View testID={'App'}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView testID={'scroll-view'}>
          <DateSelection.Basic />
          <DateSelection.Locales />
          <DateSelection.DisabledDates />
          <DateSelection.MinMaxDates />
          <DateSelection.ForbidYearView />
          <DateSelection.DarkDimensions />
          <DateSelection.LightDimensions />
          <DateSelection.CustomComponents />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default DateSelectionExamples;

const styles = StyleSheet.create({
  safeArea: {
    height: '100%',
  },
});
