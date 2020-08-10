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
  const [quantity, setQuantity] = useState(item.quantity);

  const handleChangeChecked = useCallback(
    (value: boolean) => {
      setChecked(!value);
      updateItem({ ...item, checked: !value, price, quantity });
    },
    [item, price, updateItem, quantity],
  );

  const priceText = useMemo(() => {
    const test = price.toFixed(2);
    return test;
  }, [price]);
  const quantityText = useMemo(() => {
    const value = `${quantity}`;
    return value;
  }, [quantity]);

  const handleEndQuantityEditing = useCallback(
    (e: string) => {
      setQuantity(parseFloat(e));
      updateItem({ ...item, checked, price, quantity: parseFloat(e) });
    },
    [setQuantity, updateItem, item, checked, price],
  );
  const handleEndEditing = useCallback(
    (e: string) => {
      setPrice(parseFloat(e));
      updateItem({ ...item, checked, price: parseFloat(e), quantity });
    },
    [setPrice, updateItem, item, checked, quantity],
  );

  return (
    <View style={styles.container}>
      <Text style={styles.nameText}>{item.name}</Text>
      <View style={styles.statsView}>
        <TextInput
          style={styles.quantityText}
          onEndEditing={e => {
            handleEndQuantityEditing(e.nativeEvent.text);
          }}
          defaultValue={quantityText}
          keyboardType="decimal-pad"
          returnKeyType="done"
        />
        <Text style={styles.currencyText}>x R$</Text>
        <TextInput
          style={styles.priceText}
          onEndEditing={e => {
            handleEndEditing(e.nativeEvent.text);
          }}
          defaultValue={priceText}
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
