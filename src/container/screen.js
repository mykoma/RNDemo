import { Navigation } from 'react-native-navigation';

import TabView1 from './Tab1/TabView1';
import TabView2 from './Tab2/TabView2';
import TabView3 from './Tab3/TabView3';

import DeviceInfoList from './Tab3/DeviceInfoList';

export function registerScreens() {
  Navigation.registerComponent('TabView1', () => TabView1);
  Navigation.registerComponent('TabView2', () => TabView2);
  Navigation.registerComponent('TabView3', () => TabView3);
  Navigation.registerComponent('DeviceInfoList', () => DeviceInfoList);
}