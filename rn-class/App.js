//libraries
import { View, Text, StyleSheet, FlatList, Image, Button } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
//context
import CartContextProvider, {
  CartContext,
} from "./context/CartContextProvider";

const Item = ({ item }) => {
  const { setAmount } = useContext(CartContext);

  return (
    <View style={styles.item}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">{item.title}</Text>
      <Text style={styles.price}>${item.price.toFixed(2)}</Text>
      <Text style={styles.description} numberOfLines={1} ellipsizeMode="tail">
        {item.description}
      </Text>
      <Button
        title="Add"
        style={styles.button}
        onPress={() => {
          alert(`${item.title}  Added!`);
          setAmount((prevAmount) => prevAmount + 1);
        }}
      />
    </View>
  );
};

const App = () => {
  const [products, setProducts] = useState([]);
  const { amount } = useContext(CartContext);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error Occured While Trying to Get Products ! ", error);
      }
    };
    getProducts();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.cartIconContainer}>
        <Text style={styles.cartCount}>{amount}</Text>
      </View>
      <View style={{ width: "95%", flex: 1 }}>
        <FlatList
          data={products}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2} // Added numColumns
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 5,
  },
  item: {
    flex: 1, // Added flex: 1
    padding: 5,
    margin: 3, // Reduced margin
    marginTop: 6,
    marginBottom : 6,
    backgroundColor: "#ffffff",
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0.5 },
    shadowOpacity: 0.15,
    shadowRadius: 1,
    elevation: 2,
  },
  image: {
    width: "100%", // Adjusted image width
    height: 60,
    resizeMode: "contain",
    marginBottom: 4,
  },
  title: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 2,
  },
  price: {
    fontSize: 10,
    color: "green",
    marginBottom: 2,
  },
  description: {
    fontSize: 10,
    color: "#666",
    marginBottom: 3,
  },
  cartInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  amountText: {
    marginLeft: 3,
    fontSize: 12,
    fontWeight: "bold",
  },
  cartIconContainer: {
    position: "absolute",
    top: 5,
    right: 5,
    flexDirection: "row",
    alignItems: "center",
    zIndex: 10,
  },
  cartCount: {
    marginLeft: 3,
    fontSize: 12,
    fontWeight: "bold",
  },
  button: {
    fontSize: 10,
    padding: 2,
  },
});

export default App;