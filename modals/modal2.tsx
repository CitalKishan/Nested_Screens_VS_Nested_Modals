import { useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Modal3 from "./modal3";
interface Modal2Props {
  modal2Visible: boolean;
  modal2OnClose?: () => void;
}

const Modal2 = ({ modal2Visible, modal2OnClose }: Modal2Props) => {
  const [modal3Visible, setModal3Visible] = useState(false);

  return (
    <Modal visible={modal2Visible} animationType="slide" transparent>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            padding: 20,
            borderRadius: 10,
            width: "80%",
          }}
        >
          <Text style={styles.heading}>Modal 2</Text>
          <TouchableOpacity
            onPress={() => setModal3Visible(true)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Open Modal 3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={modal2OnClose}
            style={[
              styles.button,
              { marginTop: 10, backgroundColor: "#FF3B30" },
            ]}
          >
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </View>
        <Modal3
          modal3Visible={modal3Visible}
          modal3OnClose={() => setModal3Visible(false)}
        />
      </View>
    </Modal>
  );
};

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
    width: "100%",
    alignItems: "center",
    marginVertical: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default Modal2;
