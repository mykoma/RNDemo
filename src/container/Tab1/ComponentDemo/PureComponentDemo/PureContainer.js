
import React, { PureComponent } from 'react';
import PureView from './PureView';
import { Text, View, TouchableOpacity } from 'react-native';


export default class PureContainer extends PureComponent {

  constructor() {
    super()
    this.state = {
      title: '点击这里PureContainer'
    }
  }

  render() {
    console.warn('PureContainer render be called!!!');
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <PureView/>
        <TouchableOpacity style={{backgroundColor: 'red'}} onPress={() => {
          this.setState({
            title: 'PureContainer Changed'
          })
        }}><Text>{this.state.title}</Text></TouchableOpacity>
      </View>);
  }
}