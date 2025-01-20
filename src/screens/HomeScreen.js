import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const products = [
  { id: '1', name: 'Product 1', price: 10.0 },
  { id: '2', name: 'Product 2', price: 20.0 },
  { id: '3', name: 'Product 3', price: 30.0 },
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Checkout', { product: item })}
            >
              <Text style={styles.buttonText}>Buy</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  productContainer: { marginBottom: 20, padding: 10, borderWidth: 1, borderRadius: 5 },
  productName: { fontSize: 18 },
  productPrice: { fontSize: 16, color: 'gray' },
  button: { marginTop: 10, backgroundColor: 'blue', padding: 10, borderRadius: 5 },
  buttonText: { color: 'white', textAlign: 'center' },
});
