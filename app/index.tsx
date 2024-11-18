import { View, Text } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { globalStyles } from "@/styles/global-styles";

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <Text
        style={globalStyles.mainResults}
        numberOfLines={1}
        adjustsFontSizeToFit
      >
        50*50000000000000000000
      </Text>
      <Text style={globalStyles.subResult}>250</Text>
    </View>
  );
};

export default CalculatorApp;
