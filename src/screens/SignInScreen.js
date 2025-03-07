import React, { useState } from 'react';
import { View, Text, TextInput, Alert, StyleSheet, TouchableOpacity } from 'react-native';

const SignInScreen = ({ navigation }) => {
  const [username, setUsername] = useState(''); // State for username input
  const [password, setPassword] = useState(''); // State for password input

  // Function to handle sign-in
  const handleSignIn = () => {
    // Input validation
    if (!username.trim() || !password.trim()) {
      Alert.alert('Error', 'Please enter both username and password');
      return;
    }

    if (username === 'admin' && password === 'admin') {
      navigation.navigate('Dashboard'); // Navigate to Dashboard if credentials are correct
    } else {
      Alert.alert('Error', 'Invalid username or password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>
      <Text style={styles.subtitle}>Track your expenses, manage your budget, and take control of your finances.</Text>
      
      {/* Username Input Field */}
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />

      {/* Password Input Field */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Sign-In Button */}
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    marginTop: 16,
    marginBottom: 24,
    textAlign: 'center',
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
  },
  button: {
    backgroundColor: '#4CAF50', 
    height: 50,
    borderRadius: 20, 
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff', 
    fontSize: 20,
    fontWeight: 'bold', 
    textAlign: 'center', 
  },
});

export default SignInScreen;