import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { BuyingProps } from '../../Routes/routetypes';
import { colors } from '../../color';

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

const Buying: React.FC<BuyingProps> = ({ navigation }) => {
  const [items, setItems] = useState(data);

  navigation.setOptions({
    headerBackground: () => (
      <View style={{ backgroundColor: colors.darkGreen, flex: 1 }} />
    ),
    title: 'Em compras',
  });
  return (
    <View style={{ backgroundColor: colors.white, flex: 1 }}>
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
    </View>
  );
};

export default Buying;
