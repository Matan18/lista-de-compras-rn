import React, { useState, useMemo, useCallback } from 'react';
import { View, FlatList, Text } from 'react-native';
import { BuyingProps } from '../../Routes/routetypes';
import { Product } from '../../database/entities/Product';
import BuyingItem from '../../components/BuyingItem';

import styles from './styles';

const data: Product[] = [
  {
    name: 'arroz',
    id: '1',
    checked: false,
    price: 1.5,
    quantity: 1,
  },
  {
    name: 'feijão',
    id: '2',
    checked: false,
    price: 2,
    quantity: 1,
  },
  {
    name: 'batata',
    id: '3',
    checked: false,
    price: 3.5,
    quantity: 1,
  },
  {
    name: 'papel higiênico',
    id: '4',
    checked: false,
    price: 4,
    quantity: 1,
  },
  {
    name: 'maça',
    id: '5',
    checked: false,
    price: 5,
    quantity: 1,
  },
  {
    name: 'banana',
    id: '6',
    checked: false,
    price: 1,
    quantity: 1,
  },
  {
    name: 'laranja',
    id: '7',
    checked: false,
    price: 3,
    quantity: 1,
  },
  {
    name: 'shampoo',
    id: '8',
    checked: false,
    price: 1.5,
    quantity: 1,
  },
  {
    name: 'condicionador',
    id: '9',
    checked: false,
    price: 2.5,
    quantity: 1,
  },
  {
    name: 'brahma',
    id: '10',
    checked: false,
    price: 27.5,
    quantity: 1,
  },
  {
    name: 'leite condensado',
    id: '11',
    checked: false,
    price: 4.25,
    quantity: 1,
  },
  {
    name: 'pente',
    id: '12',
    checked: false,
    price: 2.5,
    quantity: 1,
  },
];

const Buying: React.FC<BuyingProps> = ({ navigation }) => {
  const [items, setItems] = useState<Product[]>(data);

  navigation.setOptions({
    headerBackground: () => <View style={styles.header} />,
    title: 'Em compras',
  });

  const handleUpdateItem = useCallback(
    (item: Product) => {
      console.log(item);
      const list = items;
      const index = items.findIndex(prod => prod.id === item.id);
      const product = items[index];
      product.checked = item.checked;
      product.name = item.name;
      product.quantity = item.quantity;
      product.price = item.price;
      list[index] = product;
      setItems([...list]);
    },
    [items],
  );
  const totalValue = useMemo(() => {
    const value = items.reduce((sum, item) => {
      if (item.checked) {
        const multiple = item.price * item.quantity;
        return sum + multiple;
      }
      return sum;
    }, 0);
    return value.toFixed(2);
  }, [items]);
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={({ name }) => name}
        renderItem={({ item }) => (
          <BuyingItem item={item} updateItem={handleUpdateItem} />
        )}
      />
      <View style={styles.totalViewBox}>
        <Text style={styles.totalText}>{`R$ ${totalValue}`}</Text>
      </View>
    </View>
  );
};

export default Buying;
