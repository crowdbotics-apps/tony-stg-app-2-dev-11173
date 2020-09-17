import React from "react";
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
} from "react-native";

export default class Blank extends React.Component {
  state = {};

  render = () => <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
});
