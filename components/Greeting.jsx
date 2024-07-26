import { Text, View } from "react-native";

const Greeting = ({ name }) => {
  return (
    <View>
      <Text>Salamalaykum, {name}</Text>
    </View>
  );
};

export default Greeting;
