import * as React from 'react';
import { Appbar } from 'react-native-paper';

export default () => (
 <Appbar dark={true}>
    <Appbar.Action icon="menu" onPress={() => console.log('Pressed archive')}/>
    <Appbar.Content title="Mi Tenis"/>
    <Appbar.Action icon="dots-vertical" onPress={() => console.log('Pressed mail')} />
  </Appbar>
 );
