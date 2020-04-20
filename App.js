import React from 'react';
import Feed from './src/feed';
import Detail from './src/detail';

import Screen1 from './src/screens/drawer/screen1';
import Screen2 from './src/screens/drawer/screen2';
import Screen3 from './src/screens/drawer/screen3';

import Tab1 from './src/screens/tabs/Tab1';
import Tab2 from './src/screens/tabs/Tab2';
import Tab3 from './src/screens/tabs/Tab3';

import DrawerContent from './src/screens/DrawerContent';

import TestScreen from './src/screens/Test';

import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme
} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Appearance, useColorScheme, AppearanceProvider } from 'react-native-appearance';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();
// const MaterialTopTabs = createMaterialTopTabNavigator();;

App = () => {

  const colorScheme = useColorScheme();

  const MyTheme = {
    dark: false,
    colors: {
      primary: 'white',
      background: 'white',
      card: '#65509f',
      text: 'white',
      border: 'green',
    },
  }

  createHomeStack = () =>
    <Stack.Navigator>
      <Stack.Screen name="Home" children={this.createDrawer}
        options={{
          title: "Navigation Hooks & Themes"
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          title: "Detail Screen"
        }}
      />
      <Stack.Screen
      
      name="TestScreen"
      component={TestScreen}
      />
      {/* <Stack.Screen name="Bottom Tabs" children={this.createBottomTabs} /> */}
      {/* <Stack.Screen name="Top Tabs" children={this.createTopTabs} /> */}
    </Stack.Navigator>

  createDrawer = () =>
    <Drawer.Navigator
       
    drawerContent={(props) => <DrawerContent {...props} />}
    
    >
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Contacts" component={Screen1} />
      <Drawer.Screen name="Favorites" component={Screen2} />
      <Drawer.Screen name="Settings" component={Screen3} />
    </Drawer.Navigator>

  // createTopTabs = (props) => {
  //   return <MaterialTopTabs.Navigator>
  //     <MaterialTopTabs.Screen
  //       name="Tab 1"
  //       component={Tab1}
  //       options={{ title: props.route.params.name }}
  //     />
  //     <MaterialTopTabs.Screen name="Tab 2" component={Tab2} />
  //     <MaterialTopTabs.Screen name="Tab 3" component={Tab3} />
  //   </MaterialTopTabs.Navigator>
  // }

  // createBottomTabs = () => {
  //   return <MaterialBottomTabs.Navigator>
  //     <MaterialBottomTabs.Screen
  //       name="Tab 1"
  //       style={{ marginBottom: 16 }}
  //       component={Tab1}
  //       options={{
  //         tabBarLabel: 'Home',
  //         tabBarIcon: () => (
  //           <Icon style={[{ color: 'white' }]} size={25} name={'home'} />
  //         ),
  //       }}
  //     />
  //     <MaterialBottomTabs.Screen name="Tab 2" component={Tab2}
  //       options={{
  //         tabBarLabel: 'Profile',
  //         tabBarIcon: () => (
  //           <Icon style={[{ color: 'white' }]} size={25} name={'human'} />
  //         )
  //       }}
  //     />
  //     <MaterialBottomTabs.Screen name="Tab 3" component={Tab3}
  //       options={{
  //         tabBarLabel: 'Map',
  //         tabBarIcon: () => (
  //           <Icon style={[{ color: 'white' }]} size={25} name={'map'} />
  //         ),
  //       }}
  //     />
  //   </MaterialBottomTabs.Navigator>
  // }

  return (
    <AppearanceProvider>
      <NavigationContainer >
        {this.createHomeStack()}
      </NavigationContainer>
    </AppearanceProvider>
  );
}

export default App;


      // <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      //   <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
      //   <Drawer.Screen name="SupportScreen" component={SupportScreen} />
      //   <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
      //   <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
      // </Drawer.Navigator> 