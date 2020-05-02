import React, { useState, useEffect } from 'react'
import { View, StyleSheet, FlatList, Text } from 'react-native'
import ListItem from '../components/ListItem'

// const users = [
//   { id: 1, name: 'Leanne' },
//   { id: 2, name: 'Ervin' },
// ]

const UsersScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState([])

  const fetchUsers = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const data = await response.json()
    setUsers(data)
    setLoading(false)
  }
  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <View style={styles.container}>
      {loading
        ? <Text>Cargando...</Text>
        : <FlatList
          data={users}
          style={styles.list}
          keyExtractor={x => x.id.toString()}
          renderItem={({ item }) => <ListItem onPress={() => navigation.navigate('Posts', { user_id: item.id, name: item.name })} title={item.name} />}
        />
      }
    </View>
  );
}

export default UsersScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
  },
  list: {
    alignSelf: 'stretch'
  }
});