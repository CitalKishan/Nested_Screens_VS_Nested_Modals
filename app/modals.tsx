import { Text, TouchableOpacity, View } from "react-native";

export default function Modals() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>I'm modal screen</Text>
      <TouchableOpacity>
        <Text>Open Modal 1</Text>
      </TouchableOpacity>
    </View>
  );
}
