import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import StackRoutes from "./src/screns/routes/StackRoutes";

export default function App() {
  return (
   <PaperProvider>
    <NavigationContainer>

      <StackRoutes/>

    </NavigationContainer>
   </PaperProvider>
  );
}


