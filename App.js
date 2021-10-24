// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './ui/Login';
import Contacts from './ui/Contacts';
import AddUser from './ui/AddUser';
import AddContacts from './ui/AddContacts';
import EditContacts from './ui/EditContacts';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Contacts" component={Contacts} />
        <Stack.Screen name="AddUser" component={AddUser} />
        <Stack.Screen name="AddContacts" component={AddContacts} />
        <Stack.Screen name="EditContacts" component={EditContacts} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;