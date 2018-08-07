import React, { Component } from 'react';
import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
import DrawerMenu from './src/DrawerMenu';
import Main from './src/Main/screens/Main';
import Contact from './src/Contact/screens/Contact';
import AddContact from './src/Contact/screens/AddContact';
import EditContact from './src/Contact/screens/EditContact';

const Drawer = createDrawerNavigator({
  Home: {
    screen: Main
  },
  Contact: {
    screen: Contact
  }
}, {
  drawerWidth: 280,
  contentComponent: DrawerMenu,
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose'
});

const App = createStackNavigator({
  Main: {
    screen: Drawer,
    navigationOptions: {
      header: null
    }
  },
  Contact: {
    screen: Drawer,
    navigationOptions: {
      header: null
    }
  },
  AddContact: {
    screen: AddContact,
    navigationOptions: {
      header: null
    }
  },
  EditContact: {
    screen: EditContact,
    navigationOptions: {
      header: null
    }
  }
}, {
  initialRouteName: 'Main'
});

export default App;