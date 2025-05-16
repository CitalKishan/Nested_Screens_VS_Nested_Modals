import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Modal1 from "../modals/modal1";

export default function Modals() {
  useFocusEffect(
    useCallback(() => {
      console.log("Modals screen rendered");

      return () => {
        console.log("Modals screen unfocused");
        return null;
      };
    }, [])
  );
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 16,
      }}
    >
      <Text style={styles.heading}>Modals Demo</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.buttonText}>Open Modal 1</Text>
      </TouchableOpacity>
      <Modal1
        modal1Visible={modalVisible}
        modal1OnClose={() => setModalVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    width: 200,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
});
