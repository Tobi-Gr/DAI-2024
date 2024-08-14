import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../views/Login';
import Register from '../views/Register';
import Home from '../views/Home';

const LoginNavigation = () => {
    const LoginStack = createNativeStackNavigator();
    return (
      <LoginStack.Navigator>
        <LoginStack.Screen name="Home" component={Home}/>
        <LoginStack.Screen name="Login" component={Login}/>
        <LoginStack.Screen name="Register" component={Register}/>
      </LoginStack.Navigator>
  );
}
export default LoginNavigation;