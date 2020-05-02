import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import UsersScreen from './screens/Users';
import PostsScreen from './screens/Posts';
import DetailScreen from './screens/Detail';

const AppNavigator = createStackNavigator({
  Users: {
    screen: UsersScreen,
    navigationOptions: () => ({
      title: 'Usuarios'
    })
  },
  Posts: {
    screen: PostsScreen,
    navigationOptions: () => ({
      title: 'Posts'
    })
  },
  Detail: {
    screen: DetailScreen,
    navigationOptions: () => ({
      title: 'Detalle'
    })
  }
},{
  initialRouteName: 'Users'
})

export default createAppContainer(AppNavigator)

