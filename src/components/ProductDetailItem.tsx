import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ProductDetailItemProps {
  label: string;
  value?: string; 
}

const ProductDetailItem: React.FC<ProductDetailItemProps> = ({ label, value }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}:</Text>
      {value && <Text style={styles.value}>{value}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333', 
  },
  value: {
    fontSize: 16,
    color: '#555', 
    marginLeft: 5,
  },
});

export default ProductDetailItem;