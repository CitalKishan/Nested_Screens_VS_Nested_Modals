import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Modal1 from "../modals/modal1";

export default function Modals() {
  const [isModal1Visible, setIsModal1Visible] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>This is the Modals tab.</Text>
      <TouchableOpacity
        style={{
          marginTop: 20,
          backgroundColor: "#007AFF",
          paddingVertical: 12,
          paddingHorizontal: 24,
          borderRadius: 8,
        }}
        onPress={() => {
          setIsModal1Visible(true);
        }}
      >
        <Text style={{ color: "white", fontWeight: "500" }}>Open Modal 1</Text>
      </TouchableOpacity>

      <Modal1
        visible={isModal1Visible}
        onRequestClose={() => setIsModal1Visible(false)}
      />
    </View>
  );
}
