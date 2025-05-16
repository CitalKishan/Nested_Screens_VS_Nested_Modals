import { Modal, Text, TouchableOpacity, View } from "react-native";

interface Modal1Props {
  visible: boolean;
  onRequestClose: () => void;
}

const Modal1 = ({ visible, onRequestClose }: Modal1Props) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onRequestClose}
    >
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
          <Text style={{ fontSize: 18, marginBottom: 20 }}>Modal 1</Text>
          <TouchableOpacity
            style={{
              backgroundColor: "#007AFF",
              padding: 10,
              borderRadius: 5,
              alignItems: "center",
            }}
            onPress={onRequestClose}
          >
            <Text style={{ color: "white" }}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default Modal1;
