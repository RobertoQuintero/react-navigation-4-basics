import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const DetailScreen = ({ navigation }) => {
  const { title, body, name } = navigation.state.params
  // const body = navigation.getParam('body')
  // const title = navigation.getParam('title')

  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Text>{title}</Text>
      <Text>{body}</Text>
    </View>
  );
}

export default DetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});