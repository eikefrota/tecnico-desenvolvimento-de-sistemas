import { SafeAreaView, ScrollView } from 'react-native';

import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';


import styles from './styles';

const App = () => {
  const handlePress = () => {
    alert('Botão pressionado!');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Form /> 
      </ScrollView>
      {/* <Navbar /> */}
      <Navbar
        labels={{ inicio: 'Início', formulario: 'Formulário', sobre: 'Sobre' }}
        onInicioPress={() => console.log('Início')}
        onFormularioPress={() => console.log('Formulário')}
        onSobrePress={() => console.log('Sobre')}
      />

    </SafeAreaView>
  );
};


export default App;