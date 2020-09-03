import { StyleSheet } from 'react-native';
import { colors } from '../../color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  newProduct: {
    height: 70,
    backgroundColor: colors.white,
    flexDirection: 'row',
  },
  newProductInput: {
    height: 40,
    width: 270,
    fontSize: 20,
    margin: 10,
    padding: 5,
    borderBottomWidth: 2,
    borderColor: '#bbb',
  },
  fabNewProduct: {
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: 10,
    backgroundColor: colors.almostDarkGreen,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: colors.green,
  },
});

export default styles;
