import { Modal, Text, TouchableOpacity, View } from "react-native";

interface Modal1Props {
  modal1Visible: boolean;
  modal1OnClose?: () => void;
}

const Modal1 = ({ modal1Visible, modal1OnClose }: Modal1Props) => {
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
          <Text style={{ fontSize: 18, marginBottom: 15 }}>Modal 1</Text>
          <TouchableOpacity
            onPress={modal1OnClose}
            style={{
              alignSelf: "flex-end",
              marginTop: 10,
              backgroundColor: "#ddd",
              padding: 8,
              borderRadius: 5,
            }}
          >
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default Modal1;
