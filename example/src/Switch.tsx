import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import Images from './Images';

interface Props {
  title: string;
  info: string;
  onPress: () => void;
  image: any;
}

const Card: React.FC<Props> = ({ title, info, onPress, image }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image source={image} accessibilityIgnoresInvertColors />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.info}>{info}</Text>
    </TouchableOpacity>
  );
};

interface SwitchProps {
  navigation: any;
}

const Switch: React.FC<SwitchProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Card
          image={Images.dateSelection.single}
          onPress={() => navigation.navigate('DateSelectionExamples')}
          title={'Single Date Selection Calendar'}
          info={
            'The date selection calendar allows the selection of only one date. Click here to see usage examples.'
          }
        />
        <Card
          image={Images.dateSelection.multi}
          onPress={() => navigation.navigate('MultiDateSelectionExamples')}
          title={'Multi Date Selection Calendar'}
          info={
            'The date selection calendar allows the selection of multiple dates. Click here to see usage examples.'
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default Switch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFFAA',
  },
  card: {
    height: 200,
    width: '80%',
    borderRadius: 20,
    backgroundColor: '#FFF',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 26,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    letterSpacing: 0.6,
    color: '#2d2d2d',
    textAlign: 'center',
  },
  info: {
    fontSize: 13,
    fontWeight: '300',
    letterSpacing: 0.4,
    color: '#333333',
    textAlign: 'center',
  },
});
