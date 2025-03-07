import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { List, Card, Title, Paragraph } from "react-native-paper";

// TransactionDetailScreen component to display details of a selected transaction
const TransactionDetailScreen = ({ route }) => {
  // Extract the 'transactions' data passed via navigation params
  const { transactions } = route.params; 
  console.log("transaction: ", transactions); // Log the transaction data for debugging

  return (
    <View style={styles.container}>
      {/* Card component from react-native-paper to display transaction details */}
      <Card style={styles.card}>
        <Card.Content>
          {/* Title of the transaction detail screen */}
          
          {/* Display the date, formatted as YYYY-MM-DD */}
          <Paragraph style={styles.paragraph}>Date: {new Date(transactions.date).toISOString().split("T")[0]}</Paragraph>
          
          {/* Display the amount, prepended with the dollar sign */}
          <Paragraph style={styles.paragraph}>Amount: ${transactions.amount}</Paragraph>
          
          {/* Display the description of the transaction */}
          <Paragraph style={styles.paragraph}>Description: {transactions.description}</Paragraph>
          
          {/* Display the location where the transaction occurred */}
          <Paragraph style={styles.paragraph}>Location: {transactions.location}</Paragraph>
          
          {/* Display the type of the transaction */}
          <Paragraph style={styles.paragraph}>Type: {transactions.type}</Paragraph>
          
          {/* Display the category of the transaction */}
          <Paragraph style={styles.paragraph}>Category: {transactions.category}</Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
  },
  card: {
    elevation: 5,
    borderRadius: 12,
    backgroundColor: "#ffffff",
    padding: 16,
    margin: 8,
  },
  title: {
    fontSize: 22,
    marginBottom: 16,
    textAlign: "center",
    fontWeight: "bold",
    color: "#333",
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 12,
    color: "#666",
  },
});

export default TransactionDetailScreen;
