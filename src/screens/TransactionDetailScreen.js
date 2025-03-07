import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { List } from "react-native-paper";

const TransactionDetailScreen = ({ route }) => {
  const { transaction } = route.params;
  console.log("transaction: ", transaction);

  return (
    <View style={styles.container}>
      <List.Section style={styles.section}>
        <List.Item
          title="Date"
          description={new Date(transaction.date).toISOString().split("T")[0]}
          titleStyle={{ fontWeight: "bold", fontSize: 16, color: "#333" }}
          descriptionStyle={{ fontSize: 14, color: "#666" }}
        />
        <List.Item title="Amount" description={transaction.amount} />
        <List.Item title="Description" description={transaction.description} />
        <List.Item title="Location" description={transaction.location} />
        <List.Item title="Type" description={transaction.type} />
        <List.Item title="Category" description={transaction.category} />
      </List.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: "center",
  },
  section: {
    borderColor: "#74b1be",
    borderWidth: 2,
    margin: 8,
  },
});

export default TransactionDetailScreen;
