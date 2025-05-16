import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Screens",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="layers-outline" size={size} color={color} />
          ),
          title: "Screens",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="modals"
        options={{
          tabBarLabel: "Modals",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="copy-outline" size={size} color={color} />
          ),
          title: "Modals",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="screens/screen1"
        options={{
          title: "Screen 1",
          href: null,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="screens/screen2"
        options={{
          title: "Screen 2",
          href: null,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="screens/screen3"
        options={{
          title: "Screen 3",
          href: null,
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
