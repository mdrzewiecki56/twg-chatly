import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ApolloProvider } from "@apollo/client";
import client from "./src/apollo/client";
import Home from "./src/screens/Home/Home";
import Room from "./src/screens/Room/Room";

const App = () => {
  const Stack = createStackNavigator();
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
            headerTitle: "",
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Room" component={Room} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
