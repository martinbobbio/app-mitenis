import axios from "axios";
import React, {useState} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount = async () => {
    // try {
    //   const data = await axios.get('http://localhost:8082/api/clubs')
    //   console.log(data)
    // } catch(e){
    //   console.error(e)
    // }
  }

  render() {
    return (
      <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: -34.5839197,
          longitude: -58.6539973,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker
          coordinate={{
            latitude: -34.5839197,
            longitude: -58.6539973,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          title='aaxaa'
          description='bbbbb'
        >
          <Image source={require('../../assets/images/marker.png')}/>
        </Marker>
      </MapView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
