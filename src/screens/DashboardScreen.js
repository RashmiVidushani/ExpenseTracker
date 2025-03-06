import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import TransactionList from '../components/TransactionList';


const DashboardScreen = ({ navigation }) => {
  const [transactions, setTransactions] = useState([]);

  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <View style={styles.container}>
      <TransactionList transactions={transactions} navigation={navigation}>
          {transactions.length === 0 ? <Text>No transactions added yet.</Text> : null}
      {/* TODO: Make this work */}
      </TransactionList>

      <TouchableOpacity style={styles.button}
        title="Add Transaction"
          onPress={() => navigation.navigate('AddTransaction', { handleAddTransaction })}>
            <Text style={styles.buttonText}>Add Transaction</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  button: {
    backgroundColor: '#4CAF50', 
    height: 50,
    borderRadius: 20, 
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 12,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff', 
    fontSize: 20,
    textAlign: 'center', 
  }
});

export default DashboardScreen;