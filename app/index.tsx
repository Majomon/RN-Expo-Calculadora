import { View, Text } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

const CalculatorApp = () => {
  return (
    <View>
      <Text
        style={{
          fontSize: 50,
          fontFamily: "SpaceMono",
          color: Colors.textPrimary,
        }}
      >
        CalculatorApp
      </Text>
    </View>
  );
};

export default CalculatorApp;
