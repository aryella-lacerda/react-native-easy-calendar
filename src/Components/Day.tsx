import React from 'react';
import type { Dayjs } from 'dayjs';
import { Text, TouchableOpacity, View } from 'react-native';
// import * as Animatable from 'react-native-animatable';

// import { checkChangedProps } from '../Utils';
import type { DateProperties, Theme } from '../Entities';
import { ThemeContext } from '../Contexts';

interface OtherProps {
  date: Dayjs | null;
  onPress: (date: string) => void;
  isStartOfWeek?: boolean;
  isEndOfWeek?: boolean;
  isStartOfMonth?: boolean;
  isEndOfMonth?: boolean;
  isExtraDay?: boolean;
  showExtraDates?: boolean;
}

export type Props = DateProperties & OtherProps;

const Day: React.FC<Props> = ({
  date,
  onPress,
  showExtraDates = false,
  isDisabled = false,
  isSelected = false,
  isPeriodEnd = false,
  isPeriodStart = false,
  isPeriod = false,
  isStartOfWeek = false,
  isEndOfWeek = false,
  isStartOfMonth = false,
  isEndOfMonth = false,
  isExtraDay = false,
}) => {
  const theme = React.useContext<Theme>(ThemeContext);
  // const ref = React.useRef<Animatable.Text | null>(null);
  const _onPress = () => {
    if (date) {
      onPress(date.local().format());
    }
  };

  const isHightlighted = isSelected || isPeriodEnd || isPeriodStart;

  // ref.current?.bounce?.(800);
  // console.log('Date rerendered: ', dayjs(date).date());

  if (isExtraDay) {
    return (
      <TouchableOpacity
        disabled
        testID={'extra-day-container'}
        accessibilityLabel={date ? `${date.format('LL')}` : ''}
        accessibilityState={{ disabled: true, selected: false }}
        onPress={_onPress}
        style={[theme.normalDayContainer, theme.extraDayContainer]}>
        <Text testID={'extra-day-text'} style={[theme.normalDayText, theme.extraDayText]}>
          {showExtraDates && date?.date()}
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      testID={'day-container'}
      accessibilityLabel={date ? `${date.format('LL')}` : ''}
      accessibilityState={{
        disabled: !!(isDisabled || isExtraDay),
        selected: !!(isSelected || isPeriod),
      }}
      disabled={isDisabled || isExtraDay}
      onPress={_onPress}
      style={[
        theme.normalDayContainer,
        isPeriod && theme.periodDayContainer,
        isDisabled && theme.disabledDayContainer,
        isSelected && theme.selectedDayContainer,
        isPeriodEnd && theme.periodEndDayContainer,
        isPeriodStart && theme.periodStartDayContainer,
        isStartOfWeek && theme.startOfWeekDayContainer,
        isEndOfWeek && theme.endOfWeekDayContainer,
        isStartOfMonth && theme.startOfMonthDayContainer,
        isEndOfMonth && theme.endOfMonthDayContainer,
        isExtraDay && theme.extraDayContainer,
      ]}>
      <View
        testID={'day-highlight-container'}
        style={isHightlighted && theme.dayHighlightContainer}>
        <Text
          // @ts-ignore
          // ref={ref}
          // duration={800}
          // animation="bounce"
          testID={'day-text'}
          style={[
            theme.normalDayText,
            isPeriod && theme.periodDayText,
            isDisabled && theme.disabledDayText,
            isSelected && theme.selectedDayText,
            isPeriodEnd && theme.periodEndDayText,
            isPeriodStart && theme.periodStartDayText,
            isStartOfWeek && theme.startOfWeekDayText,
            isEndOfWeek && theme.endOfWeekDayText,
            isStartOfMonth && theme.startOfMonthDayText,
            isEndOfMonth && theme.endOfMonthDayText,
            isExtraDay && theme.extraDayText,
          ]}>
          {isExtraDay && showExtraDates && date?.date()}
          {!isExtraDay && date?.date()}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(Day);
