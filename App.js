/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import * as DeviceInfo from 'react-native-device-info';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

type Props = {};
export default class App extends Component<Props> {

  constructor() {
    super();
    this.state = {
      val: 0
    };
  }

  onClick() {
    console.log('--- ' + DeviceInfo.getDeviceId());
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.onClick.bind(this)}><Text>Click</Text></TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
