import {StyleSheet} from 'react-native';
import {WHITE_COLOR} from '../../assests/color/color';
export const styles = StyleSheet.create({
  itemContainer: {
    marginVertical: 10,
    paddingVertical: 21,
    backgroundColor: WHITE_COLOR,
    borderRadius: 8,
    width: '90%',
    marginHorizontal: 20,
    paddingHorizontal: 16,
  },
  itemTouchable: {
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemContent: {
    marginTop: 10,
    fontSize: 14,
  },
});
