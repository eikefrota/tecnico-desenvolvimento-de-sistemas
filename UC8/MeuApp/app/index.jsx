import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import SectionTitle from "./components/SectionTitle"
import Card from "./components/Card"
import CustomButton from "./components/CustomButton"

const App = () => {
    const handlePress = () => {
        alert("Botão apertado!")
    };

    return(
        <SafeAreaView style={styles.container}>
            <SectionTitle>Bem-vindo ao App</SectionTitle>
            <Card 
                title="Componente Card"
                content="Este é exemplo de cartão com título e conteúdo" />

            <CustomButton
                title="Clique aqui"
                onPress={handlePress} />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 24,
        backgroundColor: "#f2f2f2"
    }
})

export default App;