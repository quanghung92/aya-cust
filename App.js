import { StatusBar } from 'expo-status-bar';
import "react-native-gesture-handler"
import AppNavigation from './navigation/appNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Provider } from 'react-redux'
import store from './redux/store';
import { Text } from 'react-native';

export default function App() {
  return (

    <Provider store={store}>
      <StatusBar
        backgroundColor={"#000"}
        barStyle={"dark-content"}
      />
      <SafeAreaProvider>
        <Text>Test</Text>
        {/* <AppNavigation /> */}
      </SafeAreaProvider>
    </Provider>
  );
}


