import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: '#fff',
    marginLeft: 10,
    marginRight: 10,
    borderBottomWidth: 0.3,
    borderColor: '#cccccc',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameText: {
    fontSize: 20,
    width: 160,
    height: 23,
    marginLeft: 15,
  },
  statsView: {
    width: 160,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  currencyText: {
    margin: 15,
    fontSize: 20,
    marginRight: 0,
    marginLeft: 5,
  },
  quantityText: {
    fontSize: 20,
    borderBottomWidth: 1,
    width: 25,
    padding: 0,
    paddingLeft: 5,
    textAlign: 'center',
  },
  priceText: {
    fontSize: 20,
    borderWidth: 1,
    width: 60,
    padding: 0,
    paddingLeft: 5,
  },
});

export default styles;
