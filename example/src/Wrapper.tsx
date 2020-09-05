import React from 'react';
import dayjs from 'dayjs';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface Props {
  title: string;
  children: React.ReactNode;
  color: 'light' | 'dark';
  selectedDate?: string;
  onPressActionButton?: () => void;
  actionButtonLabel?: string;
  actionButtonTestID?: string;
  testID: string;
}

const Wrapper = ({
  children,
  title,
  color,
  selectedDate,
  testID,
  actionButtonTestID,
  onPressActionButton,
  actionButtonLabel,
}: Props) => {
  const styles = getStyles(color);
  return (
    <View style={styles.container} testID={testID}>
      <Text testID={'wrapper-title'} style={styles.title}>
        {title}
      </Text>
      {selectedDate && (
        <View style={styles.selectedContainer}>
          <Text style={styles.selected} testID={'selected-date'}>
            {`${dayjs(selectedDate).format('MMMM D, YYYY')}`}
          </Text>
        </View>
      )}
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

const getStyles = (color: 'light' | 'dark') =>
  StyleSheet.create({
    container: {
      backgroundColor: color === 'light' ? '#FFF' : '#F0F0F0',
    },
    title: {
      fontSize: 16,
      fontWeight: '600',
      paddingVertical: 12,
      backgroundColor: color === 'light' ? '#FFF' : '#F0F0F0',
      textAlign: 'center',
    },
    selectedContainer: {
      backgroundColor: '#76b374',
      width: 200,
      paddingVertical: 10,
      borderRadius: 6,
      marginVertical: 8,
      alignSelf: 'center',
    },
    selected: {
      color: '#FFF',
      textAlign: 'center',
    },
    button: {
      backgroundColor: '#76b374',
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
      color: '#FFF',
      textAlign: 'center',
    },
  });

export default Wrapper;
