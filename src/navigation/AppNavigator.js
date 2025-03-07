import React, { useState }  from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../screens/SignInScreen';
import DashboardScreen from '../screens/DashboardScreen';
import TransactionDetailScreen from '../screens/TransactionDetailScreen';
import AddTransactionScreen from '../screens/AddTransactionScreen';
import { TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen name="SignIn" component={SignInScreen} options={{ 
        title: 'Sign In',
        headerLeft: null,
        headerShown:false
        }} />
      <Stack.Screen name="Dashboard" component={DashboardScreen} options={({ navigation }) => ({ 
        title: 'Dashboard',
        
        headerTitleAlign: 'center',
        headerLeft: null,
        headerRight: () => (
          <TouchableOpacity
          onPress={() => {
            navigation.navigate('SignIn');
          }}
          style={{ marginRight: 15 }} 
        >
          <Icon name="logout" size={26} color="#4CAF50" />
        </TouchableOpacity>
        ),

        })} />
      <Stack.Screen name="TransactionDetail" component={TransactionDetailScreen} options={{ 
        title: 'Transaction Detail', 
        headerTitleAlign: 'center'
      }} />
      <Stack.Screen name="AddTransaction" component={AddTransactionScreen} options={{ 
        title: 'Add Transaction' ,
        headerTitleAlign: 'center',
        }} />
    </Stack.Navigator>
  );
};

export default AppNavigator;