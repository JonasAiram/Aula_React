import * as React from 'react';
import { View } from 'react-native';
import { Input, Button } from 'react-native-elements';


function AddContacts({ navigation }) {
    return (
      <View style={{ flex: 1,  justifyContent: 'center' }}>
        
        <Input placeholder='Nome'/>
        <Input placeholder='Email'/>
        <Input placeholder='Telefone'/>
            
        <Button
            title="Salvar"
            style={{marginTop: 5, padding: 5}}
            onPress={() => navigation.navigate("Login")}/>

      </View>
    );
  }

export default AddContacts