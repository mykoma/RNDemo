/** @format */
import { Navigation } from 'react-native-navigation';


import { registerScreens } from "./src/screens";

registerScreens();

Navigation.startTabBasedApp({
  tabs: [{
    screen: 'View1',
    title: '其他',
    icon: require('./assets/social.png'),
    label: '其他'
  },{
    screen: 'View2',
    title: '其他2',
    icon: require('./assets/album.png'),
    label: '其他2'
  },{
    screen: 'View3',
    title: '列表',
    icon: require('./assets/mine.png'),
    label: '列表'
  }]
});
