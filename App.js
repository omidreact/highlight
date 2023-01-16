import { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { BButtom } from "./src/BButtom";
import { TTop } from "./src/TTop";
const dataArray = require("./src/dataArray.json");
class App extends Component {
  state = {
    teest: "این یه تسته",
  };

  changee = () => {
    this.setState({ teest: "" });
  };
  render() {
    const name = "OK";

    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "pink",
        }}
      >
        <TTop name={name} />
        <ScrollView style={{ width: "100%" }}>
          {dataArray.map((item, index) => {
            return (
              <View style={{ alignItems: "center" }} key={index}>
                <Text
                  style={{
                    backgroundColor: "lightblue",
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  {item.name}
                </Text>
                <Text>{item.family}</Text>
                <Text>{item.id}</Text>
              </View>
            );
          })}
        </ScrollView>
        <BButtom name={name} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  testinputflexend: {
    textAlign: "center",
  },
});
export default App;
