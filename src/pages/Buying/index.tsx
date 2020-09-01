import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { View, FlatList, Text } from 'react-native';

import ProductReporitory from "../../database/repositories/ProductReporitory";
import { Product } from '../../database/entities/Product';

import { BuyingProps } from '../../Routes/routetypes';

import BuyingItem from '../../components/BuyingItem';

import styles from './styles';

const Buying: React.FC<BuyingProps> = ({ navigation }) => {
  const [items, setItems] = useState<Product[]>([]);
  const [productRepository, setRepository] = useState(new ProductReporitory());

  useEffect(() => {
    async function loadItems() {
      const list = await productRepository.findAll();
      setItems(list);
    }
    loadItems();
  }, [])

  navigation.setOptions({
    headerBackground: () => <View style={styles.header} />,
    title: 'Em compras',
  });

  const handleUpdateItem = useCallback(
    (item: Product) => {
      console.log(item);
      productRepository.update(item).then(productUpdated => {
        const list = items;
        const index = items.findIndex(prod => prod.id === productUpdated.id);
        
        list[index] = productUpdated;
        setItems([...list]);
      })
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
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <BuyingItem item={item} updateItem={handleUpdateItem} />
        )}
      />
      <View style={styles.totalViewBox}>
        <Text style={styles.totalText}>{`Total: R$ ${totalValue}`}</Text>
      </View>
    </View>
  );
};

export default Buying;
