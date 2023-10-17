import {StyleSheet} from 'react-native';
import {GREY_COLOR} from '../../assests/color/color';
import {WHITE_COLOR} from '../../assests/color/color';
import {IMAGE_COLOR} from '../../assests/color/color';

export const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 155,
    borderRadius: 8,
    backgroundColor: IMAGE_COLOR,
  },
  heading: {
    fontSize: 16,
  },
  description: {
    fontSize: 14,
  },
  textHeading: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    color: GREY_COLOR,
  },
  imageContainer: {
    backgroundColor: WHITE_COLOR,
    width: '90%',
    alignSelf: 'center',
    marginVertical: 10,
    borderRadius: 8,
  },
});
