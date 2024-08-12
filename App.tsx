// App.tsx
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './screens/MainScreen';
import ViewDetails from './screens/ViewDetails';
import { RootStackParamList } from './screens/RootStackPrams';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MainScreen} />
        <Stack.Screen name="ViewDetails" component={ViewDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
