import React, { useState, useEffect } from "react";
import { Picker } from "@react-native-picker/picker";
import DatePicker from "../components/DatePicker";
import * as Location from "expo-location";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Alert,
} from "react-native";
import { Icon } from "react-native-paper";


const AddTransactionScreen = ({ route, navigation }) => {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("Credit");
  const [category, setCategory] = useState("Shopping");
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [address, setAddress] = useState("");
  
  const { handleAddTransaction } = route.params;

  // Handle date picker change
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPicker(Platform.OS === "ios");
    setDate(currentDate);
  };

  // Fetch location and address
  useEffect(() => {
    (async () => {
      // Request location permissions
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      // Get the current location
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);

      // Reverse geocode to get the address
      let address = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      if (address.length > 0) {
        setAddress(
          `${address[0].name}, ${address[0].city}, ${address[0].country}`
        );
      } else{
        Alert.alert("Unable to get address");
      }
    })();
  }, []);

  // Handle form submission
  const handleSubmit = () => {
    if (!amount || !description ) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }else{
      Alert.alert("Transaction Added Successfully!");
    }

    const newTransaction = {
      id: Math.random().toString(),
      date: date.toISOString().split("T")[0], 
      amount: parseFloat(amount).toFixed(2), 
      description,
      location: address || "Unknown Location", 
      type,
      category,
    };
    handleAddTransaction(newTransaction);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Date Picker */}
      <DatePicker
        showPicker={showPicker}
        value={date}
        onChange={onChange}
        showDatePicker={() => setShowPicker(true)}
      />

      {/* Amount Input */}
      <TextInput
        style={styles.input}
        placeholder="Amount"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />

      {/* Description Input */}
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />

      {/* Location Display */}
      
      <TextInput
        style={styles.input}
        placeholder="Location"
        value={address || "Fetching location..."}
        editable={false}
      />
      

      {/* Transaction Type Picker */}
      <Picker
        selectedValue={type}
        onValueChange={(itemValue) => setType(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Credit" value="Credit" />
        <Picker.Item label="Debit" value="Debit" />
        <Picker.Item label="Refund" value="Refund" />
      </Picker>

      {/* Category Picker */}
      <Picker
        selectedValue={category}
        onValueChange={(itemValue) => setCategory(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Shopping" value="Shopping" />
        <Picker.Item label="Travel" value="Travel" />
        <Picker.Item label="Utility" value="Utility" />
      </Picker>

      {/* Submit Button */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Add Transaction</Text>
        
      </TouchableOpacity>

      {/* Error Message */}
      {errorMsg && <Text style={styles.errorText}>{errorMsg}</Text>}
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 20,
  },
  input: {
    height: 50,
    borderRadius: 20,
    borderColor: "#ccc",
    backgroundColor: "#f1f1f1",
    marginBottom: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    fontSize: 16,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#4CAF50",
    height: 50,
    borderRadius: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  picker: {
    height: 60,
    borderRadius: 20,
    marginLeft: 20,
    marginBottom: 10,
    paddingHorizontal: 16,
    borderWidth: 1,
    fontSize: 16,
    marginRight: 20,
  },
  errorText: {
    color: "red",
    textAlign: "center",
    marginTop: 10,
  },
});

export default AddTransactionScreen;