import React, { useState, useCallback } from 'react';
import {
  View,
  StatusBar,
  FlatList,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { ListProps } from '../../Routes/routetypes';
import styles from './styles';

const data = [
  {
    name: 'arroz',
  },
  {
    name: 'feijão',
  },
  {
    name: 'batata',
  },
  {
    name: 'papel higiênico',
  },
  {
    name: 'maça',
  },
  {
    name: 'banana',
  },
  {
    name: 'laranja',
  },
  {
    name: 'shampoo',
  },
  {
    name: 'condicionador',
  },
  {
    name: 'brahma',
  },
  {
    name: 'leite condensado',
  },
  {
    name: 'pente',
  },
];

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
  const [items, setItems] = useState(data);
  const [newItem, setNewItem] = useState('');

  const handleAddItem = useCallback(() => {
    setItems([...items, { name: newItem }]);
  }, [setItems, items, newItem]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />
      <FlatList
        data={items}
        keyExtractor={({ name }) => name}
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
        />

        <TouchableOpacity onPress={handleAddItem} style={styles.fabNewProduct}>
          <Icon name="plus" size={20} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default List;
