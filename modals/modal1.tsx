import { useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
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
          <Text style={{ fontSize: 18, marginBottom: 15 }}>Modal 1</Text>
          <TouchableOpacity
            onPress={() => setModal2Visible(true)}
            style={{
              alignSelf: "flex-end",
              marginTop: 10,
              backgroundColor: "#ddd",
              padding: 8,
              borderRadius: 5,
            }}
          >
            <Text>Open Modal 2</Text>
          </TouchableOpacity>
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
        <Modal2
          modal2Visible={modal2Visible}
          modal2OnClose={() => setModal2Visible(false)}
        />
      </View>
    </Modal>
  );
};

export default Modal1;
