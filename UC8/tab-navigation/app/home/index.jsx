import { View, Text, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Home(){
    const router = useRouter();
    
    return(
        <View style={styles.container}>
            <Text>Bem-vindo à aba Home</Text>
            <Button title="Sobre o App" onPress={() => {router.push("/home/detalhesApp")}}></Button>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});