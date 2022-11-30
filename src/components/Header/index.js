import { Text, View } from "react-native";
import { styles } from "./styles";

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

Header.defaultProps = {
  title: "Shop Lists",
};

export default Header;
