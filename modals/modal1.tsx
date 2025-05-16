import { useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Modal2 from "./modal2";
interface Modal1Props {
  modal1Visible: boolean;
  modal1OnClose?: () => void;
}

const Modal1 = ({ modal1Visible, modal1OnClose }: Modal1Props) => {
  const [modal2Visible, setModal2Visible] = useState(false);

  return (
    <Modal visible={modal1Visible} animationType="slide" transparent>
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
          <Text style={styles.heading}>Modal 1</Text>
          <TouchableOpacity
            onPress={() => setModal2Visible(true)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Open Modal 2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={modal1OnClose}
            style={[
              styles.button,
              { marginTop: 10, backgroundColor: "#FF3B30" },
            ]}
          >
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </View>
        <Modal2
          modal2Visible={modal2Visible}
          modal2OnClose={() => setModal2Visible(false)}
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

export default Modal1;
