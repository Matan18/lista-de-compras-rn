import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 50,
    marginLeft: 10,
    marginRight: 10,
    borderBottomWidth: 0.3,
    borderColor: '#cccccc',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameText: {
    marginLeft: 15,
    fontSize: 20,
  },
  statsView: {
    width: 160,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  currencyText: {
    margin: 15,
    fontSize: 20,
    marginRight: 0,
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
