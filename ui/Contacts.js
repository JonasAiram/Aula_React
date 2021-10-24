import * as React from 'react';
import { View } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import { ListItem, Avatar } from 'react-native-elements'



function Contacts({ navigation } ) {

    const list = [
        {
          name: 'Joao Felipe',
          avatar_url: 'https://miro.medium.com/max/2400/1*JyYin7G7aGwgD9zpYBZ12Q.png',
          subtitle: '(81) 99999-9999'
        },
        {
          name: 'André Ricardo',
          avatar_url: 'https://i.imgur.com/oBPXx0D.png',
          subtitle: '(81) 99999-9999'
        },
      ];

    return (
        <View>
        {
            list.map((l, i) => (
            <ListItem key={i} bottomDivider>
                <Avatar source={{uri: l.avatar_url}} />
                <ListItem.Content>
                <ListItem.Title>{l.name}</ListItem.Title>
                <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
            ))
        }
        </View>
    );
  }

export default Contacts