import { StyleSheet } from 'react-native';
import { colors } from '../../color';

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.darkGreen,
    flex: 1,
  },
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  totalViewBox: {
    height: 70,
    width: 360,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  totalText: {
    fontSize: 40,
  },
});

export default styles;
