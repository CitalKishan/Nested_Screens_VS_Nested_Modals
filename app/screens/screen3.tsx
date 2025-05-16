import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Screen3 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Screen 3</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/screens/screen2")}
      >
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
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

export default Screen3;
