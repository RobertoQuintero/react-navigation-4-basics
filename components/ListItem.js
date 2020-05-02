import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const ListItem = ({ title,onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ListItem

const styles = StyleSheet.create({
  container:{
    paddingLeft:15,
    height:60,
    justifyContent:'center',
    borderBottomWidth:1,
    borderBottomColor:'#eee'
  },
  text:{
    fontSize:18
  }
})