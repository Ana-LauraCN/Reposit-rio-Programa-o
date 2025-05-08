import 'react-native-gesture-handler';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'; // ✅ Importação correta
import Ionicons from 'react-native-vector-icons/Ionicons'; // ✅ Certifique-se de que está usando este pacote

import EscudoScreen from './src/screens/EscudoScreen';
import JogadoresScreen from './src/screens/JogadoresScreen';
import TitulosScreen from './src/screens/TitulosScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={({ route }) => ({
            drawerIcon: ({ color, size }) => {
              let iconName;
              if (route.name === 'Escudo') iconName = 'shield-outline';
              else if (route.name === 'Jogadores') iconName = 'people-outline';
              else if (route.name === 'Títulos') iconName = 'trophy-outline';
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Drawer.Screen name="Escudo" component={EscudoScreen} />
          <Drawer.Screen name="Jogadores" component={JogadoresScreen} />
          <Drawer.Screen name="Títulos" component={TitulosScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
