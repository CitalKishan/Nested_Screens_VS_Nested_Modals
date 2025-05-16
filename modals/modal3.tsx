import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Modal3Props {
  modal3Visible: boolean;
  modal3OnClose?: () => void;
}

const Modal3 = ({ modal3Visible, modal3OnClose }: Modal3Props) => {
  return (
    <Modal visible={modal3Visible} animationType="slide" transparent>
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
          <Text style={styles.heading}>Modal 3</Text>
          <TouchableOpacity
            onPress={modal3OnClose}
            style={[styles.button, { backgroundColor: "#FF3B30" }]}
          >
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </View>
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

export default Modal3;
