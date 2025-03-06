import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const AddTransactionScreen = ({ route, navigation }) => {
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [type, setType] = useState('Credit');
  const [category, setCategory] = useState('Shopping');

  const { handleAddTransaction } = route.params;

  const handleSubmit = () => {
    const newTransaction = {
      id: Math.random().toString(),
      date,
      amount,
      description,
      location,
      type,
      category,
    };
    handleAddTransaction(newTransaction);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Date"
        value={date}
        onChangeText={setDate}
      />
      <TextInput
        style={styles.input}
        placeholder="Amount"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Location"
        value={location}
        onChangeText={setLocation}
      />
      <Picker
        selectedValue={type}
        onValueChange={(itemValue) => setType(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Credit" value="Credit" />
        <Picker.Item label="Debit" value="Debit" />
        <Picker.Item label="Refund" value="Refund" />
      </Picker>

      <Picker 
        selectedValue={category}
        onValueChange={(itemValue) => setCategory(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Shopping" value="Shopping" />
        <Picker.Item label="Travel" value="Travel" />
        <Picker.Item label="Utility" value="Utility" />
      </Picker>
      <TouchableOpacity 
        style={styles.button} title="Add Transaction" onPress={handleSubmit}>
          <Text style={styles.buttonText}>Add Transaction</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 20,
  },
  input: {
    height: 50,
    borderRadius: 20,
    borderColor: '#ccc',
    backgroundColor: '#f1f1f1',
    marginBottom: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    fontSize: 16,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    paddingHorizontal: 8,
  },
  button: {
    backgroundColor: '#4CAF50', 
    height: 50,
    borderRadius: 20, 
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',

  },
  buttonText: {
    color: '#fff', 
    fontSize: 20, 
    fontWeight: 'bold', 
    textAlign: 'center', 
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
});

export default AddTransactionScreen;