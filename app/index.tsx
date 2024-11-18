import { CalculatorButtom } from "@/components/CalculatorButtom";
import { ThemeText } from "@/components/ThemeText";
import { Colors } from "@/constants/Colors";
import { globalStyles } from "@/styles/global-styles";
import React from "react";
import { View } from "react-native";

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      {/* Resultados */}
      <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
        <ThemeText variant="h1">50*500</ThemeText>
        <ThemeText variant="h2">250</ThemeText>
      </View>

      {/* Fila de botones */}
      <View style={globalStyles.row}>
        <CalculatorButtom
          label="C"
          blackText
          color={Colors.lightGray}
          onPress={() => console.log("C")}
        />
        <CalculatorButtom
          label="+/-"
          blackText
          color={Colors.lightGray}
          onPress={() => console.log("+/-")}
        />
        <CalculatorButtom
          label="del"
          blackText
          color={Colors.lightGray}
          onPress={() => console.log("del")}
        />
        <CalculatorButtom
          label="%"
          color={Colors.orange}
          onPress={() => console.log("%")}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButtom label="7" onPress={() => console.log("7")} />
        <CalculatorButtom label="8" onPress={() => console.log("8")} />
        <CalculatorButtom label="9" onPress={() => console.log("9")} />
        <CalculatorButtom
          label="*"
          color={Colors.orange}
          onPress={() => console.log("*")}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButtom label="4" onPress={() => console.log("4")} />
        <CalculatorButtom label="5" onPress={() => console.log("5")} />
        <CalculatorButtom label="6" onPress={() => console.log("6")} />
        <CalculatorButtom
          label="-"
          color={Colors.orange}
          onPress={() => console.log("-")}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButtom label="1" onPress={() => console.log("1")} />
        <CalculatorButtom label="2" onPress={() => console.log("2")} />
        <CalculatorButtom label="3" onPress={() => console.log("3")} />
        <CalculatorButtom
          label="+"
          color={Colors.orange}
          onPress={() => console.log("+")}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButtom label="0" doubleSize onPress={() => console.log("0")} />
        <CalculatorButtom label="." onPress={() => console.log(".")} />
        <CalculatorButtom
          label="="
          color={Colors.orange}
          onPress={() => console.log("=")}
        />
      </View>
    </View>
  );
};

export default CalculatorApp;
