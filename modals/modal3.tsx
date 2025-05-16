import { Modal, Text, TouchableOpacity, View } from "react-native";

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
          <Text style={{ fontSize: 18, marginBottom: 15 }}>Modal 3</Text>
          <TouchableOpacity onPress={modal3OnClose}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default Modal3;
