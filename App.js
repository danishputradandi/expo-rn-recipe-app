// In App.js in a new project

import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

import MainScreen from "./src/screens/MainScreen";
import RecipeDetailScreen from "./src/screens/RecipeDetailScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="RecipeDetailScreen"
          component={RecipeDetailScreen}
          options={{
            title: "Recipe Detail",
            headerTransparent: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Tombol touchableopacity ke halaman detail diambi ldari stack screen
function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
        <Text>Go To Detail Screen</Text>
      </TouchableOpacity>
    </View>
  );
}

//Halaman kedua
function DetailScreen() {
  const navigation = useNavigation(); // User navigation untuk perpindahan halakan
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity onPress={() => navigation.navigate("Account")}>
        <Text>Go To Account Screen</Text>
      </TouchableOpacity>
    </View>
  );
}

function AccountScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Account Screen</Text>
    </View>
  );
}

export default App;
