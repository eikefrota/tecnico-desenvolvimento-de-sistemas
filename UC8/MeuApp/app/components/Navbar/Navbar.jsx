import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const Navbar = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={props.onInicioPress}>
        <Text style={styles.text}>{props.label.inicio}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={props.onFormularioPress}>
        <Text style={styles.text}>{props.label.formulario}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={props.onSobrePress}>
        <Text style={styles.text}>{props.label.sobre}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;