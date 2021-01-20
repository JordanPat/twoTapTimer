import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  "Timer Buttons": undefined;
  "Timer Display": undefined ;
};

export type TabOneParamList = {
  TimerButtonScreen: undefined;
};

export type TabTwoParamList = {
  TimerDisplayScreen: {hrs: number, min: number, sec: number};
};

export type TabStackNavProps<T extends keyof BottomTabParamList> = {
  navigation: StackNavigationProp<BottomTabParamList,T>;
  route: RouteProp<BottomTabParamList,T>;
}

export type TabTwoStackNavProps<T extends keyof TabTwoParamList> = {
  tabNavigation: StackNavigationProp<BottomTabParamList>;
  navigation: StackNavigationProp<TabTwoParamList,T>;
  route: RouteProp<TabTwoParamList,T>;
}
