import { TouchableOpacity, Text, StyleSheet } from "react-native";

const CustomButton = ({title, onPress, backgroundColor = '#1E90FF', textColor = '#FFF'}) => {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor}]} onPress={onPress}>
            <Text style={[styles.text, {color: textColor}]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default CustomButton;