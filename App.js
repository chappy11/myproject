import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,Image,Dimensions, ScrollView,TouchableOpacity } from 'react-native';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Swiper from 'react-native-swiper';


import { markers } from './data/markers';
import { MainRoute } from './src/routes/MainRoute';

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = 220;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;   
export default function App() {
 
  const [location, setlocation] = useState({
    lat: markers[0].coordinate.lat,
    lng:markers[0].coordinate.lng
  })
  const [index, setindex] = useState(0);

  return (
    <NavigationContainer>
        <MainRoute/>
    </NavigationContainer>
 
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
  },
  scrollView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical:10,
  }

});
