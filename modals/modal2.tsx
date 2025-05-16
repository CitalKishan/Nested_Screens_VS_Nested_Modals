import { Modal, Text, TouchableOpacity, View } from "react-native";

interface Modal2Props {
  modal2Visible: boolean;
  modal2OnClose?: () => void;
}

const Modal2 = ({ modal2Visible, modal2OnClose }: Modal2Props) => {
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
          <Text style={{ fontSize: 18, marginBottom: 15 }}>Modal 2</Text>
          <TouchableOpacity
            onPress={modal2OnClose}
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

export default Modal2;
