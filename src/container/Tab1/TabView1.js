/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity, Platform} from 'react-native';


export default class TabView1 extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          ItemSeparatorComponent={Platform.OS !== 'android' && (({highlighted}) => (<View style={[{height: 0.5, backgroundColor: '#aaaaaa'}, highlighted && {marginLeft: 0}]} />))}
          data={[
            {key: 'Component还是PureComponent？'},
          ]}
          renderItem={({item}) => (
            <TouchableOpacity style={{flex: 1}} onPress={() => {
              this.onPressItem(item);
            }}>
              <Text style={styles.item}>{item.key}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }

  onPressItem(item) {
    this.props.navigator.push({
      screen: 'ComponentDemoContainer'
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

