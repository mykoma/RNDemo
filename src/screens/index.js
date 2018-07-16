import { Navigation } from 'react-native-navigation';

import View1 from './View1';
import View2 from './View2';
import View3 from './View3';
import App from '../../App';

export function registerScreens() {
  Navigation.registerComponent('View1', () => View1);
  Navigation.registerComponent('View2', () => View2);
  Navigation.registerComponent('View3', () => View3);
  Navigation.registerComponent('App', () => App);
}