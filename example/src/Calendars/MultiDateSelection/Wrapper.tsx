import React from 'react';
import Colors from '../../../../src/Themes/Colors';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface Props {
  title: string;
  children: React.ReactNode;
  color: 'light' | 'dark';
  selectedDates?: string[];
  onPressActionButton?: () => void;
  actionButtonLabel?: string;
  actionButtonTestID?: string;
  testID: string;
}

const Wrapper = ({
  children,
  title,
  color,
  selectedDates,
  testID,
  actionButtonTestID,
  onPressActionButton,
  actionButtonLabel,
}: Props) => {
  const styles = getStyles(color);
  return (
    <View
      style={styles.container}
      testID={testID}
      accessibilityLabel={selectedDates?.join(', ')}>
      <Text testID={'wrapper-title'} style={styles.title}>
        {title}
      </Text>
      {onPressActionButton && (
        <TouchableOpacity
          testID={actionButtonTestID}
          style={styles.button}
          onPress={onPressActionButton}>
          <Text style={styles.buttonText}>{actionButtonLabel}</Text>
        </TouchableOpacity>
      )}
      {children}
    </View>
  );
};

const getStyles = (code: 'light' | 'dark') =>
  StyleSheet.create({
    container: {
      backgroundColor: Colors[code].base,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 16,
      fontWeight: '600',
      paddingVertical: 12,
      paddingHorizontal: 16,
      textAlign: 'center',
      lineHeight: 27,
      color: Colors[code].baseText,
    },
    button: {
      backgroundColor: Colors[code].primary,
      width: 120,
      paddingVertical: 10,
      alignSelf: 'center',
      borderRadius: 6,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
      marginVertical: 8,
    },
    buttonText: {
      color: Colors[code].primaryText,
      textAlign: 'center',
    },
  });

export default Wrapper;
