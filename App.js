import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Startup from './Startup';
import Homepage from './Home';
import { Platform } from 'react-native';
import Header from './Header';
import {navigationRef} from './RootNavigation';
import ElevatorDetail from './ElevatorDetail';
// import { useFonts } from 'expo-font';
// import { AppLoading } from 'expo';
// import { LogBox, View } from 'react-native';
// LogBox.ignoreAllLogs();

const Stack = createStackNavigator();

export default function App() {
  // let [fontsLoaded] = useFonts({
  //   'OpenSans': require('./assets/fonts/OpenSans-Regular.ttf'),
  // });

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // } else {
    return (
      <NavigationContainer
        style={{paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0}}
        ref={navigationRef}
      >
        
        <Stack.Navigator 
          initialRouteName="Catalog"
          headerMode="screen"
          >

        <Stack.Screen
            name="Login"
            component={Startup}
            options={{
              header: () => <Header headerDisplay="Rocket Elevators" />
            }}
            />

          <Stack.Screen
            name="RocketElevators"
            component={Homepage}
            options={{
              header: () => <Header headerDisplay="Elevators" />
            }}
            />

          <Stack.Screen
            name="ElevatorDetail"
            component={ElevatorDetail}
            options={{
              header: () => <Header headerDisplay="Elevator" />
            }}
            />
        </Stack.Navigator>
        {/* <Footer /> */}
      </NavigationContainer>
      
      // <View style={styles.container}>
      //   <Text>Open up App.js to start working on your app!</Text>
      //   <StatusBar style="auto" />
      // </View>
    );
  }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
