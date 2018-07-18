/** @format */
import { Navigation } from 'react-native-navigation';


import { registerScreens } from "./src/container/screen";

registerScreens();

Navigation.startTabBasedApp({
  tabs: [{
    screen: 'TabView1',
    title: '其他',
    icon: require('./assets/social.png'),
    label: '其他'
  },{
    screen: 'TabView2',
    title: '其他2',
    icon: require('./assets/album.png'),
    label: '其他2'
  },{
    screen: 'TabView3',
    title: '列表',
    icon: require('./assets/mine.png'),
    label: '列表'
  }]
});
