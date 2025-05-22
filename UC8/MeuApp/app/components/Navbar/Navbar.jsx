import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const Navbar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Automobilistica</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Construção Civil</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Desenvolvimento</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;
