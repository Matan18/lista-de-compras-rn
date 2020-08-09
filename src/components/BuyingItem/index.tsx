import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { View, Text, CheckBox, TextInput } from 'react-native';
import { Product } from '../../database/entities/Product';

import styles from './styles';

interface BuyingItemProps {
  item: Product;
  updateItem(item: Product): void;
}

const BuyingItem: React.FC<BuyingItemProps> = ({ item, updateItem }) => {
  const [product, setProduct] = useState(item);

  const handleChangeChecked = useCallback(() => {
    setProduct({ ...product, checked: !product.checked });
  }, [setProduct, product]);

  useEffect(() => {
    updateItem(product);
  }, [product, updateItem]);

  const price = useMemo(() => {
    const test = product.price.toFixed(2);
    return test;
  }, [product]);

  return (
    <View style={styles.container}>
      <Text style={styles.nameText}>{product.name}</Text>
      <View style={styles.statsView}>
        <Text style={styles.currencyText}>R$</Text>
        <TextInput
          style={styles.priceText}
          onEndEditing={e => {
            setProduct({ ...product, price: parseFloat(e.nativeEvent.text) });
          }}
          defaultValue={price}
          keyboardType="decimal-pad"
          returnKeyType="done"
        />
        <CheckBox value={product.checked} onValueChange={handleChangeChecked} />
      </View>
    </View>
  );
};

export default BuyingItem;
