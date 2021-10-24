import * as React from 'react';
import { View } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';


function Login({ navigation }) {
    return (
      <View style={{ flex: 1,  justifyContent: 'center' }}>
        
        <Input placeholder='Login'/>

        <Input placeholder='Password'/>

        <Button
            title="Login"
            style={{marginTop: 5, padding: 5}}
            onPress={() => navigation.navigate("Contacts")}/>

        <Button
            title="Cadastro de Usuário"
            style={{marginTop: 5, padding: 5}}
            onPress={() => navigation.navigate("AddUser")}/>
        

      </View>
    );
  }

export default Login