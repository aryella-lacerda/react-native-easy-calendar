import React from 'react';
import type { Dayjs } from 'dayjs';
import { Text, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../Contexts';
import type { Theme } from '../Entities';

export interface Props {
  date: Dayjs;
  onPress: () => void;
  isSelected: boolean;
  isDisabled: boolean;
}

const Month: React.FC<Props> = ({ date, onPress, isSelected, isDisabled }) => {
  const theme = React.useContext<Theme>(ThemeContext);

  return (
    <TouchableOpacity
      testID={'month-container'}
      accessibilityRole={'button'}
      accessibilityLabel={date.format('MMM')}
      accessibilityState={{ disabled: isDisabled, selected: isSelected }}
      accessibilityHint={'Press to select this month and return to calendar month view'}
      disabled={isDisabled}
      onPress={onPress}
      style={[
        theme.normalMonthContainer,
        isSelected && theme.selectedMonthContainer,
        isDisabled && theme.disabledMonthContainer,
      ]}>
      <Text
        testID={'month-text'}
        style={[
          theme.normalMonthText,
          isSelected && theme.selectedMonthText,
          isDisabled && theme.disabledMonthText,
        ]}>
        {date.format('MMM')}
      </Text>
    </TouchableOpacity>
  );
};

export default React.memo(Month);
