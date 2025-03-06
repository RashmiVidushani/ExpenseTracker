import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/FontAwesome';



const AddTransactionScreen = ({ route, navigation }) => {
  const [date, setDate] = useState(new Date()); 
  const [showPicker, setShowPicker] = useState(false);
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [type, setType] = useState('Credit');
  const [category, setCategory] = useState('Shopping');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date; 
    setShowPicker(Platform.OS === 'ios'); 
    setDate(currentDate); 
  };

  const showDatePicker = () => {
    setShowPicker(true);
  };


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
      <View style={styles.DatePick}>
       
        <TextInput
        style={styles.dateInput}
        placeholder="Date"
        value={date.toDateString()}
        onChangeText={setDate}
      />
      {showPicker && (
        <DateTimePicker
          value={date}
          mode="date" 
          display={Platform.OS === 'ios' ? 'spinner' : 'default'} 
          onChange={onChange} 
        />)}
      <Icon name="calendar" size={20} color="black" onPress={showDatePicker}  style={styles.icon}></Icon>
      </View>
      
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
  icon: {
    marginLeft: 10,
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
  dateInput: {
    flex: 1,
    height: 50,
    color: '#000',
  },
  DatePick:{
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 10,
    margin:20,
    borderRadius: 20,
    marginBottom: 10,
    marginLeft: 20,
    paddingHorizontal: 8,
    marginBottom: 10,
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