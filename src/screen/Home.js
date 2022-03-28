import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Screen from '../components/Screen'
import MapView from 'react-native-maps'

const Home = () => {
  return (
      <Screen>
          <MapView
            style={style.map}
              region={{
                    latitude:10.3157,
                    longitude: 123.8854,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
          >

          </MapView>
       </Screen>
  )
}

export default Home;

const style = StyleSheet.create({
    map: {
        position:'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom:0
    }
})