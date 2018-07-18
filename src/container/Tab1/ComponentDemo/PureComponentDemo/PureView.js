
import React, { PureComponent } from 'react';
import {Text, View} from 'react-native';

export default class PureView extends PureComponent {

  render() {
    const warningText = 'PureView render be called!!!';
    console.warn(warningText);
    return (<View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Text>This is Legacy Component</Text>
      <Text>请注意底部的{warningText}出现的次数，</Text>
    </View>);
  }
}