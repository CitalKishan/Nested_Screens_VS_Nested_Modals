import { useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
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
          <Text style={{ fontSize: 18, marginBottom: 15 }}>Modal 2</Text>
          <TouchableOpacity
            onPress={() => setModal3Visible(true)}
            style={{
              alignSelf: "flex-end",
              marginTop: 10,
              backgroundColor: "#ddd",
              padding: 8,
              borderRadius: 5,
            }}
          >
            <Text>Open Modal 3</Text>
          </TouchableOpacity>
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
        <Modal3
          modal3Visible={modal3Visible}
          modal3OnClose={() => setModal3Visible(false)}
        />
      </View>
    </Modal>
  );
};

export default Modal2;
