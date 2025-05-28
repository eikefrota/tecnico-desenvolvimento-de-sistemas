import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from "expo-router";

export default function Configuracoes() {
    const router = useRouter();
    
  return (
    <View style={styles.container}>
      <Text>Configurações</Text>
      <Button title='Voltar' onPress={() => {router.back()}}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});