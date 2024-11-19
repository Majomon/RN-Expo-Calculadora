import { CalculatorButtom } from "@/components/CalculatorButtom";
import { ThemeText } from "@/components/ThemeText";
import { Colors } from "@/constants/Colors";
import { useCalculator } from "@/hooks/useCalculator";
import { globalStyles } from "@/styles/global-styles";
import React from "react";
import { View } from "react-native";

const CalculatorApp = () => {
  const {
    formula,
    number,
    prevNumber,
    buildNumber,
    clean,
    toggleSign,
    deleteLast,
    divideOperation,
    multiplyOperation,
    subtractOperation,
    addOperation,
    calculateSubResult,
    calculateResult,
  } = useCalculator();

  return (
    <View style={globalStyles.calculatorContainer}>
      {/* Resultados */}
      <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
        <ThemeText variant="h1">{formula}</ThemeText>

        {formula === prevNumber ? (
          <ThemeText variant="h2"> </ThemeText>
        ) : (
          <ThemeText variant="h2">{prevNumber}</ThemeText>
        )}
      </View>

      {/* Fila de botones */}
      <View style={globalStyles.row}>
        <CalculatorButtom
          label="C"
          blackText
          color={Colors.lightGray}
          onPress={clean}
        />
        <CalculatorButtom
          label="+/-"
          blackText
          color={Colors.lightGray}
          onPress={toggleSign}
        />
        <CalculatorButtom
          label="del"
          blackText
          color={Colors.lightGray}
          onPress={deleteLast}
        />
        <CalculatorButtom
          label="%"
          color={Colors.orange}
          onPress={divideOperation}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButtom label="7" onPress={() => buildNumber("7")} />
        <CalculatorButtom label="8" onPress={() => buildNumber("8")} />
        <CalculatorButtom label="9" onPress={() => buildNumber("9")} />
        <CalculatorButtom
          label="*"
          color={Colors.orange}
          onPress={multiplyOperation}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButtom label="4" onPress={() => buildNumber("4")} />
        <CalculatorButtom label="5" onPress={() => buildNumber("5")} />
        <CalculatorButtom label="6" onPress={() => buildNumber("6")} />
        <CalculatorButtom
          label="-"
          color={Colors.orange}
          onPress={subtractOperation}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButtom label="1" onPress={() => buildNumber("1")} />
        <CalculatorButtom label="2" onPress={() => buildNumber("2")} />
        <CalculatorButtom label="3" onPress={() => buildNumber("3")} />
        <CalculatorButtom
          label="+"
          color={Colors.orange}
          onPress={addOperation}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButtom
          label="0"
          doubleSize
          onPress={() => buildNumber("0")}
        />
        <CalculatorButtom label="." onPress={() => buildNumber(".")} />
        <CalculatorButtom
          label="="
          color={Colors.orange}
          onPress={calculateResult}
        />
      </View>
    </View>
  );
};

export default CalculatorApp;
