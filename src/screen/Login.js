import { View, Text, StyleSheet, Image,TextInput } from 'react-native'
import React from 'react'
import { Button } from '../components/Button';
import { Button as Btn } from 'react-native-paper';
import ImagePicker from 'react-native-image-crop-picker';
import { Color } from '../utils/Themes';
import Screen from '../components/Screen';
import { Headline } from 'react-native-paper';
import { borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const Login = ({navigation}) => {
  
    const openCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: false,
        }).then(image => {
        console.log(image);
        });
    }
  
    return (
    <Screen style={{backgroundColor:Color.primary}}>
        <View style={{flex:1}}>
            <View style={style.headers}>
                <Image source={require('../../asset/dowload.png')} style={{width:'80%',height:'80%'}} resizeMode='contain' />
            </View>
            <View style={style.content}>
                    <View style={style.body}>
                        <Headline>Login</Headline>       
                    </View>
                    <View style={{paddingVertical:5,paddingHorizontal:15}}>
                        <Text style={style.label}>Email</Text>
                        <TextInput placeholder='Email' style={style.textInput}/>
                    </View>
                      <View style={{paddingVertical:5,paddingHorizontal:15}}>
                        <Text style={style.label}>Password</Text>
                        <TextInput placeholder='Password' style={style.textInput} secureTextEntry={true}/>
                    </View>
                     <View style={{paddingVertical:10,paddingHorizontal:15}}>
                        <Button color={Color.primary} mode='contained' name="Sign in" onPress={() => navigation.navigate('Auth',{screen:'Home'})}/>
                    </View>
                    <View style={{ flex: 1, width: '100%', flexDirection: 'row', justifyContent:'center',alignItems:'center'}}>
                        <Text>Not Registered yet? </Text>
                        <Btn color={Color.secondary}>Sign Up</Btn>
                    </View>
                    
            </View>
        </View>
    </Screen>
  )
}

export default Login


const style = StyleSheet.create({
    headers: {
        flex: 1,
        
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        flex: 1,
        backgroundColor: Color.white,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    body: {
        flex: 1,
        marginTop: 20,
        marginHorizontal: 15
    },
    textInput: {
        borderWidth: 0.5,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderColor: 'grey',
        borderRadius: 20
    },
    label: {
        color: 'gray',
        marginBottom: 5,
        marginLeft:10
    }
})