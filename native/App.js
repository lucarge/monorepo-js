import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import store from 'model/store'
import Text from 'ui/atoms/text'
import { getNow } from 'utils/dates'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={{height: 50, width: 50}} source={require('./logo.png')} />
        <Text>Store imported from model/store: {JSON.stringify(store)}</Text>
        <Text>UI text component imported from ui/text: <Text>foobar</Text></Text>
        <Text>Util getNow imported from utils/dates: {getNow().toString()}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
