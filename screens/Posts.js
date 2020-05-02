import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import ListItem from '../components/ListItem'

const PostsScreen = ({ navigation }) => {
  const userId = navigation.getParam('user_id')
  const userName = navigation.getParam('name')
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchPosts = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await response.json()
    setPosts(data.filter(x => x.userId === userId))
    setLoading(false)
  }
  useEffect(() => {
    fetchPosts()
  }, [])
  return (
    <View style={styles.container}>
      {loading
        ? <Text>Cargando...</Text>
        : <FlatList
          data={posts}
          style={styles.list}
          keyExtractor={x => x.id.toString()}
          renderItem={({ item }) => <ListItem onPress={() => navigation.navigate('Detail', { title: item.title, body: item.body, name:userName })} title={item.title} />}
        />
      }
    </View>
  );
}

export default PostsScreen

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