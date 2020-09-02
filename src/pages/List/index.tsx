import React, { useState, useCallback, useEffect } from 'react';
import {
  View,
  StatusBar,
  FlatList,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import ProductReporitory from "../../database/repositories/ProductReporitory";
import { Product } from "../../database/entities/Product";

import { ListProps } from '../../Routes/routetypes';

import styles from './styles';

const List: React.FC<ListProps> = ({ navigation }) => {
  navigation.setOptions({
    header: () => {
      return (
        <View style={styles.headerView}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Buying');
            }}
            style={styles.headerButton}
          >
            <Text style={styles.headerButtonText}>Começar</Text>
          </TouchableOpacity>
        </View>
      );
    },
  });
  const [items, setItems] = useState<Product[]>([]);
  const [newItem, setNewItem] = useState('');
  const [productRepository, setRepository] = useState(new ProductReporitory());

  useEffect(() => {
    async function loadItems() {
      try {
        const list = await productRepository.findAll();
        setItems(list);
      } catch{
      }
    }
    loadItems();
  }, [])


  const handleAddItem = useCallback(() => {
    productRepository.create(
      {
        name: newItem
      }).then(product => {
        setItems([...items, product]);
      })
  }, [setItems, items, newItem]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />
      <FlatList
        data={items}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <Text style={styles.productText}>{item.name}</Text>
          </View>
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
