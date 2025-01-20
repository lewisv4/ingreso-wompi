import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FinalStatusScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transaction Status</Text>
      <Text>The final status of the transaction will be displayed here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});