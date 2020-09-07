import React from 'react';
import type { Dayjs } from 'dayjs';
import { Text, TouchableOpacity } from 'react-native';
import { VIEW } from '../Constants';
import type { Theme } from '../Entities';
import { ThemeContext } from '../Contexts';

export interface Props {
  date: Dayjs;
  onPress: () => void;
  isDisabled?: boolean;
  activeView: VIEW;
}

const Title: React.FC<Props> = ({ activeView, date, onPress, isDisabled }) => {
  const theme: Theme = React.useContext<Theme>(ThemeContext);

  const title =
    activeView === VIEW.MONTH
      ? date.local().format('MMMM YYYY')
      : date.local().format('YYYY');
  const _onPress = () => onPress();

  return (
    <TouchableOpacity
      testID={'title'}
      accessibilityRole={'button'}
      accessibilityHint={'Press to switch calendar views'}
      accessibilityLabel={title}
      accessibilityState={{ disabled: isDisabled }}
      style={theme.titleContainer}
      disabled={isDisabled}
      onPress={_onPress}>
      <Text testID={'title-text'} style={theme.titleText}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Title;
