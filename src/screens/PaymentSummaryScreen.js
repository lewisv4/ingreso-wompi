// File: src/screens/PaymentSummaryScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PaymentSummaryScreen({ route }) {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Summary</Text>
      <Text>Product: {product.name}</Text>
      <Text>Amount: ${product.price.toFixed(2)}</Text>
      <Text>Your payment was successful!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});
