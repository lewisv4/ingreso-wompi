import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { StripeProvider } from '@stripe/stripe-react-native';
import SplashScreen from './src/screens/SplashScreen';
import HomeScreen from './src/screens/HomeScreen';
import CheckoutScreen from './src/screens/CheckoutScreen';
import PaymentSummaryScreen from './src/screens/PaymentSummaryScreen';
import FinalStatusScreen from './src/screens/FinalStatusScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    
    <Provider store={store}>
      <StripeProvider publishableKey={process.env.STRIPE_PUBLISHABLE_KEY}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Checkout" component={CheckoutScreen} />
            <Stack.Screen name="PaymentSummary" component={PaymentSummaryScreen} />
            <Stack.Screen name="FinalStatus" component={FinalStatusScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </StripeProvider>
    </Provider>
  );
}