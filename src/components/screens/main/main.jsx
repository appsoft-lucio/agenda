import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import { styles } from "./main.js";

import Home from "../home/home.jsx";
import Calendar from "../calendar/calendar.jsx";
import Profile from "../profile/profile.jsx";

const Tab = createBottomTabNavigator();

function Main() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Calendário" component={Calendar} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Main;
