import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "@/screens/Home";
import Chat from "@/screens/Chat";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={"Home"} component={Home}/>
        <Tab.Screen name={"AI"} component={Chat}/>
    </Tab.Navigator>
  );
}

export default Tabs;