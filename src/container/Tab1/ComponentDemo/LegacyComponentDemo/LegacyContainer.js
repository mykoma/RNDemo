
import React, { Component } from 'react';
import LegacyView from './LegacyView';
import { Text, View, TouchableOpacity } from 'react-native';


export default class LegacyContainer extends Component {

  constructor() {
    super()
    this.state = {
      title: '点击这里LegacyContainer'
    }
  }

  render() {
    console.warn('LegacyContainer render be called!!!');
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <LegacyView/>
        <TouchableOpacity style={{backgroundColor: 'red'}} onPress={() => {
          this.setState({
            title: 'LegacyContainer Changed'
          })
        }}><Text>{this.state.title}</Text></TouchableOpacity>
      </View>);
  }
}