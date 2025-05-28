import { View, Text, StyleSheet } from "react-native";

export default function DetalhesApp(){
    return(
        <View styles={styles.container}>
            <Text style={styles.container}>Informações sobre o App</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{ 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center' 
    }
});