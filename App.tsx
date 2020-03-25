import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import AddProductFlow from './src/flows/addProduct/AddProductFlow';

export default function App() {
  // TODO: add menu ?
  return (
    <>
      <AddProductFlow />
    </>
  );
}
