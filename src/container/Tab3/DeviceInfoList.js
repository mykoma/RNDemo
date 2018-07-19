
import React, { Component } from 'react';
import * as DeviceInfo from 'react-native-device-info';
import {StyleSheet, FlatList, Text, View, Platform, Image} from 'react-native';

export default class DeviceInfoList extends Component {

  constructor() {
    super();
    this.state = {
      isRefreshing: false
    }
  }

  render() {
    return (<FlatList
      ItemSeparatorComponent={Platform.OS !== 'android' && (({highlighted}) => (<View style={[{height: 0.5, backgroundColor: '#aaaaaa'}, highlighted && {marginLeft: 0}]} />))}
      ListEmptyComponent={
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Image source={require('../../../assets/empty.png')} style={{width: 128, height: 128}}/>
        </View>
      }
      ListFooterComponent={
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Image source={require('../../../assets/footer.png')} style={{width: 85, height: 85}}/>
        </View>
      }
      ListHeaderComponent={
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Image source={require('../../../assets/header.png')} style={{width: 85, height: 85}}/>
        </View>
      }
      data={[
        {key:'systemName',name:DeviceInfo.getSystemName()},
        {key:'systemVersion',name:DeviceInfo.getSystemVersion()},
        {key:'uuid',name:DeviceInfo.getUniqueID()},
        {key:'bundleId',name:DeviceInfo.getBundleId()},
        {key:'deviceId',name:DeviceInfo.getDeviceId()},
        {key:'carrier',name:DeviceInfo.getCarrier()},
        {key:'model',name:DeviceInfo.getModel()},
        {key:'brand',name:DeviceInfo.getBrand()},
        {key:'deviceCountry',name:DeviceInfo.getDeviceCountry()},
        {key:'deviceName',name:DeviceInfo.getDeviceName()},
        {key:'freeDiskStorage',name:DeviceInfo.getFreeDiskStorage()},
        {key:'serialNumber',name:DeviceInfo.getSerialNumber()},
        {key:'totalMemory',name:DeviceInfo.getTotalMemory()},
        {key:'maxMemory',name:DeviceInfo.getMaxMemory()},
      ]}
      renderItem={({item}) => {
        return (<View style={{height: 44, flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{position: 'absolute', left: 10}}>{item.key} </Text>
          <Text style={{position: 'absolute', right: 10}}>{item.name}</Text>
        </View>)
      }}

      /* 滑动到底部触发 */
      onEndReachedThreshold={0.1}
      onEndReached={(info: {distanceFromEnd: number}) => {
        console.warn('滑到了底部，只触发一次');
      }}

      /* 下拉刷新 */
      onRefresh={ () => {
        this.setState({
          isRefreshing: true
        });
        setTimeout(() => {
          console.warn('onRefresh Done');
          this.setState({
            isRefreshing: false
          });
        }, 1500);
      }}
      refreshing={this.state.isRefreshing}

    />);
  }
}

const styles = StyleSheet.create({

});