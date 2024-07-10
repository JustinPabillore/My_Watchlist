import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Start, Homepage} from './screens';

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Homepage'
      >
        <Stack.Screen
         name="Start"
         component={Start}
         options={{
         headerShown: false
         }}
         />
        <Stack.Screen
          name="Homepage"
          component={Homepage}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}