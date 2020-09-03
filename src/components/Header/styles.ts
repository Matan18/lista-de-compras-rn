import { StyleSheet } from 'react-native';
import { colors } from '../../color';

const styles = StyleSheet.create({
    headerView: {
        backgroundColor: colors.darkGreen,
        flexDirection: 'row',
        height: 55,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15
    },
    headerButton: {
        margin: 15,
    },
    headerButtonText: {
        fontSize: 20,
    },
});
export default styles;