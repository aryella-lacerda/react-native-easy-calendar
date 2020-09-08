import React from 'react';
import { Text, TouchableOpacity, View, Dimensions } from 'react-native';
import { DateSelectionCalendar, VIEW } from 'react-native-easy-calendar';
import Wrapper from '../Wrapper';

const { width } = Dimensions.get('screen');

const CustomComponents = () => {
  const [selectedDate, setSelectedDate] = React.useState('2020-07-05');

  return (
    <Wrapper
      testID={'custom-components-calendar-wrapper'}
      color="dark"
      title={'Custom components'}>
      <DateSelectionCalendar
        onSelectDate={setSelectedDate}
        selectedDate={selectedDate}
        TitleComponent={({ date, onPress, isDisabled, activeView }) => (
          <TouchableOpacity onPress={onPress} disabled={isDisabled}>
            <Text>
              {activeView === VIEW.MONTH
                ? `${date.format('MMMM YYYY')}`
                : `${date.format('YYYY')}`}
            </Text>
          </TouchableOpacity>
        )}
        ArrowComponent={({ direction, isDisabled, onPress }) => (
          <TouchableOpacity onPress={onPress} disabled={isDisabled}>
            <Text>{`${direction === 'left' ? '<' : '>'}`}</Text>
          </TouchableOpacity>
        )}
        WeekdaysComponent={({ days }) => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 15,
              borderColor: '#000',
              borderBottomWidth: 1,
              borderTopWidth: 1,
            }}>
            {days.map((day, index) => (
              <Text
                key={index}
                style={{
                  width: width / 7,
                  textAlign: 'center',
                  fontSize: 10,
                }}>
                {day.toLocaleUpperCase()}
              </Text>
            ))}
          </View>
        )}
        MonthComponent={({ date, onPress, isSelected, isDisabled }) => (
          <TouchableOpacity
            style={{
              width: width * 0.32,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={onPress}
            disabled={isDisabled}>
            <Text style={{ color: isSelected ? 'green' : 'black' }}>
              {date.format('MMM')}
            </Text>
          </TouchableOpacity>
        )}
        DayComponent={({ date, onPress, isDisabled }) => (
          <TouchableOpacity
            onPress={onPress}
            disabled={isDisabled}
            style={{
              height: 32,
              width: width / 7,
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 4,
            }}>
            <Text>{date?.date()}</Text>
          </TouchableOpacity>
        )}
      />
    </Wrapper>
  );
};

export default CustomComponents;
