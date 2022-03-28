import { NaivgationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screen/SplashScreen';
import Login from '../screen/Login';
import Register from '../screen/Register';
import Home from '../screen/Home';

const MainStack = createNativeStackNavigator();

export const MainRoute = () => (
    <MainStack.Navigator>
        <MainStack.Screen name="UnAuthRoute" options={{headerShown:false}} component={UnauthRoute}/>
        <MainStack.Screen name="Auth" options={{headerShown:false}} component={AuthRoute}/>
    </MainStack.Navigator>
)


const UnAuthStack = createNativeStackNavigator();

export const UnauthRoute = () => (
    <UnAuthStack.Navigator screenOptions={{headerShown:false}} >
        <UnAuthStack.Screen name='SplashScreen' component={SplashScreen} />
        <UnAuthStack.Screen name='Login' component={Login} />
        <UnAuthStack.Screen name="Register" component={Register}/>
    </UnAuthStack.Navigator>
)

const AuthStack = createNativeStackNavigator();

export const AuthRoute = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen name="Home" component={Home}/>
    </AuthStack.Navigator>
);