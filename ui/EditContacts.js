import * as React from 'react';
import { View } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';


function EditContacts({ navigation }) {
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

export default EditContacts