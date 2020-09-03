import React, { useState, useCallback } from 'react';
import { View, Text } from 'react-native';
import Menu, { MenuItem } from "react-native-material-menu";
import { Product } from '../../database/entities/Product';

import styles from './styles';

interface IListItemProps {
    handleDeleteItem: (id: string) => void;
    item: Product;
}

const ListItem: React.FC<IListItemProps> = ({ item, handleDeleteItem }) => {
    const [menuRef, setMenuRef] = useState<Menu | null>({} as Menu);

    const handleRemoveItem = useCallback((id: string) => {
        handleDeleteItem(id);
        menuRef?.hide();
    }, [handleDeleteItem, item, menuRef])

    return (
        <Menu
            ref={(ref) => { setMenuRef(ref) }}
            button={
                <View onTouchEnd={() => menuRef?.show()} style={styles.productContainer}>
                    <Text style={styles.productText}>{item.name}</Text>
                </View>
            }
        >
            <MenuItem onPress={() => { handleRemoveItem(item.id) }}>Remover</MenuItem>
        </Menu>
    );
}

export default ListItem;