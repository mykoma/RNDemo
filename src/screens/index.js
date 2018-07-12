import { Navigation } from 'react-native-navigation';

import View1 from './View1';
import App from '../../App';

export function registerScreens() {
  Navigation.registerComponent('View1', () => View1);
  Navigation.registerComponent('App', () => App);
}