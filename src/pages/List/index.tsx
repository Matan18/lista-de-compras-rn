import React, { useState } from 'react';
import {
  View,
  StatusBar,
  FlatList,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { colors } from '../../color';
import { ListProps } from '../../Routes/routetypes';

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
        <View
          style={{
            width: 360,
            backgroundColor: colors.darkGreen,
            height: 55,
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Buying');
            }}
            style={{ margin: 10 }}
          >
            <Text style={{ fontSize: 20 }}>Começar</Text>
          </TouchableOpacity>
        </View>
      );
    },
  });
  const [items, setItems] = useState(data);
  const [newItem, setNewItem] = useState('');

  function handleAddItem() {
    setItems([...items, { name: newItem }]);
  }

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <StatusBar barStyle="default" />
      <FlatList
        data={items}
        keyExtractor={({ name }) => name}
        renderItem={({ item }) => (
          <View
            style={{
              height: 50,
              marginLeft: 10,
              marginRight: 10,
              borderBottomWidth: 0.3,
              borderColor: '#cccccc',
              justifyContent: 'center',
            }}
          >
            <Text
              style={{
                marginLeft: 15,
                fontSize: 20,
              }}
            >
              {item.name}
            </Text>
          </View>
        )}
      />

      <View
        style={{
          height: 70,
          backgroundColor: colors.white,
          flexDirection: 'row',
        }}
      >
        <TextInput
          value={newItem}
          onChangeText={setNewItem}
          placeholder="Novo produto"
          style={{
            height: 40,
            width: 270,
            fontSize: 20,
            margin: 10,
            padding: 5,
            borderBottomWidth: 2,
            borderColor: '#bbb',
          }}
        />

        <TouchableOpacity
          onPress={handleAddItem}
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            margin: 10,
            backgroundColor: colors.almostDarkGreen,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon name="plus" size={20} style={{ color: colors.green }} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default List;
