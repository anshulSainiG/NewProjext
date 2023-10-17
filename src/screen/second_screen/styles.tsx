import {StyleSheet} from 'react-native';
import {WHITE_COLOR} from '../../assests/color/color';
import {BACKGROUND_COLOR} from '../../assests/color/color';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    color: BACKGROUND_COLOR,
  },
  textContainer: {
    marginVertical: 22,
    marginHorizontal: 14,
  },
  text: {
    fontSize: 20,
  },
  descriptionContainer: {
    marginHorizontal: 10,
    backgroundColor: WHITE_COLOR,
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 15,
    marginBottom: 80,
  },
  description: {
    paddingHorizontal: 20,
    textAlign: 'justify',
  },
});
