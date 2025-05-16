import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Modal1 from "../modals/modal1";

export default function Modals() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>I'm modal screen</Text>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text>Open Modal 1</Text>
      </TouchableOpacity>
      <Modal1
        modal1Visible={modalVisible}
        modal1OnClose={() => setModalVisible(false)}
      />
    </View>
  );
}
