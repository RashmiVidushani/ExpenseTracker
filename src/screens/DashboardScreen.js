import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import TransactionList from '../components/TransactionList';

const DashboardScreen = ({ navigation }) => {
  const [transactions, setTransactions] = useState([]); // State to store transactions

  // Function to add a new transaction
  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  // Component to display transactions or empty list message
  const Transaction = ({ transaction, navigation }) => {
    if (transactions.length === 0) {
      return (
        <View style={styles.emptyListContainer}>
          <Text style={styles.emptyList}>No transactions added yet.</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <TransactionList transactions={transactions} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Transaction />

      {/* Button to navigate to Add Transaction Screen */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AddTransaction', { handleAddTransaction })}
      >
        <Text style={styles.buttonText}>Add Transaction</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  emptyListContainer: {
    flex: 1,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  emptyList: {
    fontSize: 22,
    textAlign: 'center',
    marginTop: 250,
    color: '#666',
  },
  button: {
    backgroundColor: '#4CAF50', 
    height: 50,
    borderRadius: 20, 
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 40,
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
