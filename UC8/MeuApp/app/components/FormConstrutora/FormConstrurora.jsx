import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import styles from './styles';

const Form = () => {
  const [modeloCarro, setModeloCarro] = useState('');
  const [anoCarro, setAnoCarro] = useState('');
  const [marca, setMarca] = useState('');
  const [quilometragem, setQuilometragem] = useState('');

  const faixas = [
    '0km a 5.000km',
    '5.001km a 10.000km',
    '10.001km a 20.000km',
    '20.001km a 50.000km',
    'Mais de 50.000km'
  ];

  const handleSubmit = () => {
    if (!modeloCarro || !anoCarro || !marca || !quilometragem) {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }

    Alert.alert('Dados enviados',
      `Nome do Carro: ${modeloCarro}\nAno: ${anoCarro}\nMarca: ${marca}\nQuilometragem: ${quilometragem}`
    );

    // Limpar campos
    setModeloCarro('');
    setAnoCarro('');
    setMarca('');
    setQuilometragem('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Modelo do Carro</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o modelo do carro:"
        value={modeloCarro}
        onChangeText={setModeloCarro}
      />

      <Text style={styles.label}>Ano:</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={anoCarro}
          onValueChange={(itemValue) => setAnoCarro(itemValue)}
          mode="dropdown"
          style={styles.picker}
        >
          <Picker.Item label="Selecione o ano" value="" />
          {Array.from({ length: 50 }, (_, i) => {
            const year = new Date().getFullYear() - i;
            return <Picker.Item key={year} label={String(year)} value={String(year)} />;
          })}
        </Picker>
      </View>

      <Text style={styles.label}>Marca</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={marca}
          onValueChange={(itemValue) => setMarca(itemValue)}
          mode="dropdown"
          style={styles.picker}
        >
          <Picker.Item label="Selecione a marca do carro:" value="" />
          <Picker.Item label="Audi" value="Audi" />
          <Picker.Item label="BMW" value="BMW" />
          <Picker.Item label="BYD" value="BYD" />
          <Picker.Item label="Chevrolet" value="Chevrolet" />
          <Picker.Item label="Fiat" value="Fiat" />
          <Picker.Item label="Ford" value="Ford" />
          <Picker.Item label="Honda" value="Honda" />
          <Picker.Item label="Hyundai" value="Hyundai" />
          <Picker.Item label="Jeep" value="Jeep" />
          <Picker.Item label="Nissan" value="Nissan" />
          <Picker.Item label="Peugeot" value="Peugeot" />
          <Picker.Item label="Porsche" value="Porsche" />
          <Picker.Item label="Renault" value="Renault" />
          <Picker.Item label="Volkswagen" value="Volkswagen" />
        </Picker>
      </View>

      <Text style={styles.label}>Quilometragem</Text>
      {faixas.map((faixa, index) => (
        <View key={index} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
          <RadioButton
            value={faixa}
            status={quilometragem === faixa ? 'checked' : 'unchecked'}
            onPress={() => setQuilometragem(faixa)}
          />
          <Text onPress={() => setQuilometragem(faixa)}>{faixa}</Text>
        </View>
      ))}

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Form;
