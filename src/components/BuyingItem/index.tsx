import React, { useState, useMemo, useCallback } from 'react';
import { View, Text, CheckBox, TextInput } from 'react-native';
import { Product } from '../../database/entities/Product';

import styles from './styles';

interface BuyingItemProps {
  item: Product;
  updateItem(item: Product): void;
}

const BuyingItem: React.FC<BuyingItemProps> = ({ item, updateItem }) => {
  const [checked, setChecked] = useState(item.checked);
  const [price, setPrice] = useState(item.price);

  const handleChangeChecked = useCallback(
    (value: boolean) => {
      setChecked(!value);
      updateItem({ ...item, checked: !value, price });
    },
    [item, price, updateItem],
  );

  const priceText = useMemo(() => {
    const test = price.toFixed(2);
    return test;
  }, [price]);

  const handleEndEditing = useCallback(
    (e: string) => {
      setPrice(parseFloat(e));
      updateItem({ ...item, checked, price: parseFloat(e) });
    },
    [setPrice, updateItem, item, checked],
  );

  return (
    <View style={styles.container}>
      <Text style={styles.nameText}>{item.name}</Text>
      <View style={styles.statsView}>
        <Text style={styles.currencyText}>R$</Text>
        <TextInput
          style={styles.priceText}
          onEndEditing={e => {
            handleEndEditing(e.nativeEvent.text);
          }}
          defaultValue={priceText}
          // onChangeText={e => {
          //   setPrice(parseFloat(e));
          // }}
          keyboardType="decimal-pad"
          returnKeyType="done"
        />
        <CheckBox
          value={checked}
          onValueChange={() => {
            handleChangeChecked(checked);
          }}
        />
      </View>
    </View>
  );
};

export default BuyingItem;
