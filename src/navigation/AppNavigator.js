import React, { useState }  from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../screens/SignInScreen';
import DashboardScreen from '../screens/DashboardScreen';
import TransactionDetailScreen from '../screens/TransactionDetailScreen';
import AddTransactionScreen from '../screens/AddTransactionScreen';
import { TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Create the Stack Navigator
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    // Stack Navigator for screen transitions
    <Stack.Navigator initialRouteName="SignIn">
      {/* SignIn Screen */}
      <Stack.Screen 
        name="SignIn" 
        component={SignInScreen} 
        options={{ 
          title: 'Sign In', // Title of the screen
          headerLeft: null, // Hide the default back button
          headerShown: false // Hide the header entirely
        }} 
      />

      {/* Dashboard Screen */}
      <Stack.Screen 
        name="Dashboard" 
        component={DashboardScreen} 
        options={({ navigation }) => ({ 
          title: 'Dashboard', // Title of the screen
          headerTitleAlign: 'center', // Center the title in the header
          headerStyle: {
            backgroundColor: '#4CAF50', // Set header background color to green
          },
          headerTintColor: '#fff', // Set the header text and icon color to white
          headerLeft: null, // Hide the default back button
          headerRight: () => (
            // Custom logout icon in the header right
            <TouchableOpacity
              onPress={() => {
                // Navigate to the SignIn screen when the logout icon is pressed
                navigation.replace('SignIn');
              }}
              style={{ marginRight: 15 }} // Add margin to the right for spacing
            >
              {/* Icon for logout */}
              <Icon name="logout" size={26} color="#fff" />
            </TouchableOpacity>
          ),
        })} 
      />

      {/* TransactionDetail Screen */}
      <Stack.Screen 
        name="TransactionDetail" 
        component={TransactionDetailScreen} 
        options={{ 
          title: 'Transaction Detail', // Title of the screen
          headerTitleAlign: 'center', // Center the title in the header
          headerStyle: {
            backgroundColor: '#4CAF50', // Set header background color to green
          },
          headerTintColor: '#fff', // Set the header text and icon color to white
        }} 
      />

      {/* AddTransaction Screen */}
      <Stack.Screen 
        name="AddTransaction" 
        component={AddTransactionScreen} 
        options={{ 
          title: 'Add Transaction', // Title of the screen
          headerTitleAlign: 'center', // Center the title in the header
          headerStyle: {
            backgroundColor: '#4CAF50', // Set header background color to green
          },
          headerTintColor: '#fff', // Set the header text and icon color to white
        }} 
      />
    </Stack.Navigator>
  );
};

export default AppNavigator; // Export the AppNavigator component
