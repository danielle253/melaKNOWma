import HomeScreen from './Components/HomeScreen';
import Statistics from './Components/Statistics';
import LiveFeed from './Components/LiveFeed';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Statistics: {screen: Statistics},
  LiveFeed: {screen: LiveFeed},
});

const App = createAppContainer(MainNavigator);

export default App;