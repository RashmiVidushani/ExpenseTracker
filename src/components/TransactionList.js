import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

// TransactionList component to display a list of transactions
const TransactionList = ({ transactions }) => {
  // Hook to access navigation object for navigation actions
  const navigation = useNavigation();

  // Render function for each item in the transactions list
  const renderItem = ({ item }) => (
    // Navigating to 'TransactionDetail' screen on press
    <TouchableOpacity onPress={() => navigation.navigate('TransactionDetail', { transactions: item })}>
      <View style={styles.item}>
        {/* Display transaction description */}
        <Text>{item.description}</Text>
        {/* Display transaction amount */}
        <Text>{item.amount}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    // FlatList to efficiently render the list of transactions
    <FlatList
      data={transactions} // Data passed in as a prop
      renderItem={renderItem} // Render function for each transaction
      keyExtractor={(item) => item.id} // Unique identifier for each item (based on 'id')
    />
  );
};

// Styling for each transaction item in the list
const styles = StyleSheet.create({
  item: {
    padding: 16, 
    borderBottomWidth: 1, 
    borderBottomColor: '#ccc', 
  },
});

export default TransactionList; 
