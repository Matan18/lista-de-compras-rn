import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { View, FlatList, Text } from 'react-native';

import ProductReporitory from "../../database/repositories/ProductReporitory";
import { Product } from '../../database/entities/Product';

import { BuyingProps } from '../../Routes/routetypes';

import BuyingItem from '../../components/BuyingItem';

import styles from './styles';

const Buying: React.FC<BuyingProps> = ({ navigation }) => {
  const [items, setItems] = useState<Product[]>([]);
  const productRepository = useMemo(() => {
    return new ProductReporitory();
  }, [])

  useEffect(() => {
    async function loadItems() {
      try {
        const list = await productRepository.findAll();
        setItems(list);
      } catch{ }
    }
    loadItems();
  }, [])

  navigation.setOptions({
    headerBackground: () => <View style={styles.header} />,
    title: 'Em compras',
  });

  const handleUpdateItem = useCallback(
    (item: Product) => {
      productRepository.update(item).then(productUpdated => {
        const list = items;
        const index = items.findIndex(prod => prod.id === productUpdated.id);
        list[index] = productUpdated;
        setItems([...list]);
      })
    },
    [items],
  );

  const handleDeleteItem = useCallback((id: string) => {
    productRepository.delete(id).then(() => {
      const list = items;
      const index = items.findIndex(product => product.id === id);
      list.splice(index, 1);
      setItems([...list]);
    }).catch(error => {
    })
  }, [productRepository, items])

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
          <BuyingItem item={item} updateItem={handleUpdateItem} handleDeleteItem={handleDeleteItem} />
        )}
      />
      <View style={styles.totalViewBox}>
        <Text style={styles.totalText}>{`Total: R$ ${totalValue}`}</Text>
      </View>
    </View>
  );
};

export default Buying;
