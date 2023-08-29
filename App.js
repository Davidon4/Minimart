
import { StyleSheet, View } from "react-native";
import Header from "./src/components/Header";
import ShoppingList from "./src/components/ShoppingList";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <ShoppingList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});
