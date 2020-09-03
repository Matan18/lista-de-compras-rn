import React, { useState, useCallback, useEffect, useMemo } from 'react';
import {
  View,
  StatusBar,
  FlatList,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import ListItem from "../../components/ListItem";

import ProductReporitory from "../../database/repositories/ProductReporitory";
import { Product } from "../../database/entities/Product";

import Header from "../../components/Header";
import { ListProps } from '../../Routes/routetypes';

import styles from './styles';

const List: React.FC<ListProps> = ({ navigation }) => {
  const [items, setItems] = useState<Product[]>([]);
  const [newItem, setNewItem] = useState('');
  const productRepository = useMemo(() => {
    return new ProductReporitory();
  }, [])
  navigation.setOptions({
    header: () => {
      return (
        <Header handleClearList={handleClearList} navigateToBuying={() => navigation.navigate('Buying')} />
      )

    },
  });

  const handleClearList = useCallback(() => {
    productRepository.clearList().then(() => {
      setItems([]);
    }).catch(error => { })
  }, [productRepository, items])

  useEffect(() => {
    async function loadItems() {
      const list = await productRepository.findAll();
      setItems(list);
    }
    loadItems();
  }, [productRepository])

  const handleAddItem = useCallback(() => {
    productRepository.create(
      {
        name: newItem
      }).then(product => {
        setItems([...items, product]);
        setNewItem('');
      }).catch(error => {
      })
  }, [setItems, items, newItem, productRepository]);

  const handleDeleteItem = useCallback((id: string) => {
    productRepository.delete(id).then(() => {
      const list = items;
      const index = items.findIndex(product => product.id === id);
      list.splice(index, 1);

      setItems([...list]);
    }).catch(error => {
    })
  }, [productRepository, items])

  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />
      <FlatList
        data={items}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <ListItem item={item} handleDeleteItem={handleDeleteItem} />
        )}
      />
      <View style={styles.newProduct}>
        <TextInput
          value={newItem}
          onChangeText={setNewItem}
          placeholder="Novo produto"
          style={styles.newProductInput}
          onEndEditing={handleAddItem}
        />

        <TouchableOpacity onPress={handleAddItem} style={styles.fabNewProduct}>
          <Icon name="plus" size={20} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default List;
