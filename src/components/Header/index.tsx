import React, { useState, useCallback } from 'react';
import { View, Text } from 'react-native';
import Menu, { MenuItem } from 'react-native-material-menu';
import Feather from "react-native-vector-icons/Feather";
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';

interface IHeaderProps {
    handleClearList: () => void;
    navigateToBuying: () => void;
}

const Header: React.FC<IHeaderProps> = ({ handleClearList, navigateToBuying }) => {
    const [menuRef, setMenuRef] = useState<Menu | null>({} as Menu);

    const clearList = useCallback(async () => {
        handleClearList();
        menuRef?.hide();
    }, [menuRef, handleClearList])
    const navigate = useCallback(async () => {
        navigateToBuying();
        menuRef?.hide();
    }, [menuRef, handleClearList])

    return (
        <View style={styles.headerView}>
            <Menu
                ref={(ref) => { setMenuRef(ref) }}
                button={
                    <Feather
                        name="menu"
                        size={25}
                        onPress={menuRef?.show}
                    />}>
                <MenuItem
                    onPress={clearList}
                >Limpar Lista</MenuItem>
                <MenuItem
                    onPress={navigate}
                >Ir as Compras</MenuItem>
            </Menu>
            <TouchableOpacity
                onPress={navigate}
                style={styles.headerButton}
            >
                <Text style={styles.headerButtonText}>Começar</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Header;