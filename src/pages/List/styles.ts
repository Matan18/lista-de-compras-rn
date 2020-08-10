import { StyleSheet } from 'react-native';
import { colors } from '../../color';

const styles = StyleSheet.create({
  headerView: {
    backgroundColor: colors.darkGreen,
    height: 55,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  headerButton: {
    margin: 15,
  },
  headerButtonText: {
    fontSize: 20,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  productContainer: {
    height: 50,
    marginLeft: 10,
    marginRight: 10,
    borderBottomWidth: 0.3,
    borderColor: '#cccccc',
    justifyContent: 'center',
  },
  productText: {
    marginLeft: 15,
    fontSize: 20,
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
