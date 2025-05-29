import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ProductDetailItem from '../components/ProductDetailItem';

const { width } = Dimensions.get('window');

const ProductScreen: React.FC = () => {
  const handleGoBack = () => {
    console.log('Voltar!');
    
  };

  const handleBuy = () => {
    console.log('Comprar!');
    
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
            <Ionicons name="chevron-back" size={24} color="white" />
          </TouchableOpacity>

          
          <Image
            source={require('../assets/logo.png')}
            style={styles.logo}
            resizeMode="contain" 
          />

        </View>
        <ScrollView style={styles.productCard}>
          <Text style={styles.productTitle}>
            Chocolate meio amargo Lacta Amaro - 40% cacau
          </Text>

          <View style={styles.imageContainer}>
            <Image
              source={require('../assets/chocolate_bar.png')} 
              style={styles.productImage}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.sectionTitle}>Dados do Produto:</Text>
          <View style={styles.detailsContainer}>
            <ProductDetailItem label="Descrição" />
            <ProductDetailItem label="Característica" />
            <ProductDetailItem label="Lactose" />
            <ProductDetailItem label="Tipo de açúcar" />
            <ProductDetailItem label="Glúten" />
            <ProductDetailItem label="Disponibilidade[Volume()]" />
            <ProductDetailItem label="Lead Time" />
            <ProductDetailItem label="Validade" />
            <ProductDetailItem label="Certificados" />
            <ProductDetailItem label="Premiações" />
            <ProductDetailItem label="Tipo de embalagem" />
            <ProductDetailItem label="gramatura" />
          </View>
        </ScrollView>

        
        <TouchableOpacity style={styles.buyButton} onPress={handleBuy}>
          <Text style={styles.buyButtonText}>Comprar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#075100', 
  },
  container: {
    flex: 1,
    backgroundColor: '#90EE90',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', 
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 20,
    backgroundColor: '#075100', 
    position: 'relative',
    height: 170, 
  },
  backButton: {
    backgroundColor: 'orange',
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', 
    left: 15,
    top: 50, 
    zIndex: 1, 
  },
  logo: {
    
    width: 1120, 
    height: 100,
    
  },
  productCard: {
    backgroundColor: '#90EE90', 
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 30,
    marginTop: -20, 
  },
  productTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  productImage: {
    width: width * 0.8, 
    height: width * 0.4, 
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  detailsContainer: {
    marginBottom: 20,
  },
  buyButton: {
    backgroundColor: 'orange',
    paddingVertical: 15,
    borderRadius: 40,
    marginHorizontal: 70,
    marginBottom: 20,
    alignItems: 'center',
  },
  buyButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProductScreen;