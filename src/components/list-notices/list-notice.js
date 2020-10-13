import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Title } from 'react-native-paper';

export default () => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Title>Noticias del Tenis</Title>
    </View>
  );
}