import "react-native-get-random-values";
import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { View, FlatList, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const ListItem = ({ item, removeItems }) => {
  const itemPressed = (item) => {
    removeItems(item.id);
  };

  return (
    <TouchableOpacity onPress={() => itemPressed(item)}>
      <View style={styles.listItems}>
        <Text style={styles.listItemText}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const initState = [
  { id: uuid(), name: "Cornflakes" },
  { id: uuid(), name: "Milo" },
  { id: uuid(), name: "Milk" },
  { id: uuid(), name: "Nescafe" },
  { id: uuid(), name: "Rice" },
  { id: uuid(), name: "Spaghetti" },
];

const ShoppingList = () => {
  const [itemList, setItemList] = useState(initState);
  const [deletedItemList, setDeletedItemList] = useState([]);

  const removeItems = (id) => {
    setDeletedItemList([
      ...deletedItemList,
      ...itemList.filter((item) => item.id === id && item),
    ]);
    setItemList(itemList.filter((item) => item.id !== id));
  };

  const reset = () => {
    setItemList(initState);
    setDeletedItemList([]);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={itemList}
        renderItem={({ item }) => <ListItem {...{ item, removeItems }} />}
      />
      <TouchableOpacity style={styles.textItem} onPress={reset}>
        <Text style={{ color: "#FFF" }}>RESET</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ShoppingList;
