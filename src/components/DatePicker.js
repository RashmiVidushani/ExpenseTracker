import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import Icon from "react-native-vector-icons/FontAwesome";
import { View, TextInput, StyleSheet, Platform, Text } from "react-native";

const DatePicker = ({ value, onChange, showPicker, showDatePicker }) => {
  return (
    <View style={styles.datePick}>
      <TextInput
        style={styles.dateInput}
        placeholder="Date"
        value={value?.toDateString()}
        onChangeText={onChange}
      />
      {showPicker && (
        <DateTimePicker
          value={value}
          mode="date"
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={onChange}
        />
      )}
      <Icon
        name="calendar"
        size={20}
        color="black"
        onPress={showDatePicker}
        style={styles.icon}
      ></Icon>
    </View>
  );
};
const styles = StyleSheet.create({
  dateInput: {
    flex: 1,
    height: 50,
    color: "#000",
  },
  datePick: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 10,
    margin: 20,
    borderRadius: 20,
  },
  icon: {
    marginLeft: 10,
  },
});
export default DatePicker;
