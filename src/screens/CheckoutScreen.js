import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StripeProvider, useStripe } from '@stripe/stripe-react-native';

const CheckoutScreen = ({ route }) => {
  const { product } = route.params;
  const [clientSecret, setClientSecret] = useState(null);
  const { initPaymentSheet, presentPaymentSheet } = useStripe();

  useEffect(() => {
    const fetchPaymentIntent = async () => {
      const response = await fetch('http://localhost:5000/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: product.price * 100, 
        }),
      });

      const { clientSecret } = await response.json();
      setClientSecret(clientSecret);
    };

    fetchPaymentIntent();
  }, [product]);

  const handlePayPress = async () => {
    if (!clientSecret) return;

    const { error } = await presentPaymentSheet({
      clientSecret,
    });

    if (error) {
      console.error('Payment failed:', error.message);
    } else {
      console.log('Payment successful!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>
      <Text>{product.name}</Text>
      <Text>{`Price: $${product.price}`}</Text>
      <Button title="Pay" onPress={handlePayPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold' },
});

export default CheckoutScreen;
