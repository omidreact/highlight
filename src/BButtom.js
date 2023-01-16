import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
const BButtom = (props) => {
  return (
    <ScrollView scrollEnabled={false} style={{width:"100%",}}>
      <View
        style={{
          flex: 1,
          backgroundColor: "green",
          justifyContent: "center",
          alignItems: "center",

          height: 50,
          borderTopRightRadius: 50,
          borderTopLeftRadius: 50,
        }}
      >
        <Text style={{ color: "white" }} onPress={() => alert("کلیک شد")}>
          {props.name}{" "}
        </Text>
      </View>
    </ScrollView>
  );
};
export { BButtom };
