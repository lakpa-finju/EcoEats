/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

export { default as HomeScreen } from './src/screens/HomeScreen/HomeScreen'
AppRegistry.registerComponent(appName, () => App);
