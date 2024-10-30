import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../views/Login';
import Register from '../views/Register';
import Home from '../views/Home';
import Index from '../views/Index';
import Formulario from '../views/Formulario';
import Confirmacion from '../views/Confirmacion';
import DetalleEvento from '../views/DetalleEvento'

const LoginNavigation = () => {
    const LoginStack = createNativeStackNavigator();
    return (
      <LoginStack.Navigator screenOptions={{ headerShown: false }}>
        <LoginStack.Screen name="Home" component={Home}/>
        <LoginStack.Screen name="Login" component={Login}/>
        <LoginStack.Screen name="Register" component={Register}/>
        <LoginStack.Screen name="Index" component={Index}/>
        <LoginStack.Screen name="Formulario" component={Formulario}/>
        <LoginStack.Screen name="Confirmacion" component={Confirmacion}/>
        <LoginStack.Screen name="DetalleEvento" component={DetalleEvento}/>
      </LoginStack.Navigator>
  );
}
export default LoginNavigation;