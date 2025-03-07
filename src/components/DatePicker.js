import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import Icon from "react-native-vector-icons/FontAwesome";
import { View, TextInput, StyleSheet, Platform } from "react-native";

// DatePicker component to handle the date input and picker display
const DatePicker = ({ value, onChange, showPicker, showDatePicker }) => {
  return (
    <View style={styles.datePick}>
      {/* TextInput to display the selected date */}
      <TextInput
        style={styles.dateInput}
        placeholder="Date"
        value={value?.toDateString()} 
        onChangeText={onChange} // Handle text change for custom input (if needed)
      />
      {/* Conditionally render the DateTimePicker */}
      {showPicker && (
        <DateTimePicker
          value={value} // Set the current selected date value
          mode="date" 
          display={Platform.OS === "ios" ? "spinner" : "default"} // Set display style for iOS or Android
          onChange={onChange} // Handle date change
        />
      )}
      {/* Calendar icon to trigger the date picker */}
      <Icon
        name="calendar"
        size={20}
        color="black"
        onPress={showDatePicker} // Function to show the date picker when the icon is clicked
        style={styles.icon} // Styling for the icon
      />
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
