import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,Image,Dimensions,TouchableOpacity } from 'react-native';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Swiper from 'react-native-swiper';
import { } from 'react-native-web';

import { markers } from './data/markers';

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = 220;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;   
export default function App() {
 
  const [location, setlocation] = useState({
    lat: markers[0].coordinate.lat,
    lng:markers[0].coordinate.lng
  })
 

  return (
  
  <View style={styles.container}>
      <MapView
       // remove if not using Google Maps
       style={styles.map}
       region={{
         latitude:location.lat,
         longitude: location.lng,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
      >
        {markers.map((val,i) => (
          <Marker
            key={i}
          coordinate={{
            latitude: val.coordinate.lat,
            longitude: val.coordinate.lng
          }}
            onPress={() => {
              setlocation({
                
              })
            } }
          onDragEnd={e => {
              console.log('dragEnd', e.nativeEvent.coordinate);
            }}
          // draggable={true}
          // tappable={true}
          
        >
          <Image source={require("./asset/marker.png")}
            style={{ width: 50, height: 50 }}
            resizeMode='contain'
            resizeMethod='resize'
          />
          <Callout tooltip>
            <View>
                <View style={styles.bubble}>
                  <Text>{val.name} </Text>
                  <Text>{ val.descritption}</Text>
                </View>
            </View>
          </Callout>
          </Marker>
        ))}
        

      </MapView>
      <View style={ styles.slideContainer}>
        <Swiper showsPagination={false} style={styles.swiper}>
          {markers.map((val, i) => (
            <View key={i.toString()}>
              <Text>{ val.name}</Text>
              <Text>{ val.descritption}</Text>  
              <TouchableOpacity style={{
                height: 100, width: 100, backgroundColor: 'green', display: 'flex',justifyContent:'center',alignItems:'center'
              }}
                onPress={() => {
                  setlocation({
                    lng: val.coordinate.lng,
                    lat:val.coordinate.lat
                })
              }}
              >
                <Text>HI</Text>
              </TouchableOpacity>
            </View>
            ))}
        </Swiper>   
      
      </View>
         
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
    
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  bubble: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: '#fefefe',
    borderRadius: 6,
    borderColor: '#666',
    borderWidth: 0.5,
    padding: 15,
    width: 150,
  },
  
  swiper: {
    paddingHorizontal: 20,
    backgroundColor: 'white',
    height:'100%'
  },
  slideContainer: {
    
    width: '100%',
    height: 250,
    padding:10
  }

});
