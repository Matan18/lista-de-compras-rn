import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParams = {
  List: undefined;
  Buying: undefined;
};

export type ListRouteProps = RouteProp<RootStackParams, 'List'>;
export type ListNavigationProps = StackNavigationProp<RootStackParams, 'List'>;

export type ListProps = {
  route: ListRouteProps;
  navigation: ListNavigationProps;
};

export type BuyingRouteProps = RouteProp<RootStackParams, 'Buying'>;
export type BuyingNavigationProps = StackNavigationProp<
  RootStackParams,
  'Buying'
>;

export type BuyingProps = {
  route: BuyingRouteProps;
  navigation: BuyingNavigationProps;
};
