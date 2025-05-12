import { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

// export default function multiplicacao(){
//   const [valor1, setValor1] = useState("");
//   const [valor2, setValor2] = useState("")
//   const resultado = Number(valor1) * Number(valor2);

//   return(
//     <View style={{flex: 1, justifyContent: "center", alignItems: "center", gap: 50}}>
//       <TextInput placeholder='Digite o valor 1:' keyboardType='numeric' onChangeText={setValor1} value={valor1}></TextInput>

//       <TextInput placeholder='Digite o valor 2:' keyboardType='numeric' onChangeText={setValor2} value={valor2}></TextInput>

//       <Text>Resultado: {resultado}</Text>
//     </View>
//   )
// }

// export default function divisao(){
//   const [valor1, setValor1] = useState("");
//   const [valor2, setValor2] = useState("");
//   const resultado = Number(valor1) / Number(valor2);

//   return(
//     <View style={{flex: 1, justifyContent: "center", alignItems: "center", gap: 50}}>
//       <TextInput placeholder='Digite o valor 1:' keyboardType='numeric' onChangeText={setValor1} value={valor1}></TextInput>

//       <TextInput placeholder='Digite o valor 2:' keyboardType='numeric' onChangeText={setValor2} value={valor2}></TextInput>

//       <Text>Resultado: {resultado}</Text>
//     </View>
//   )
// }



// export default function potencia(){
//   const [valor1, setValor1] = useState("");
//   const [valor2, setValor2] = useState("");
//   const resultado = Number(valor1) ** Number(valor2);

//   return(
//     <View style={{flex: 1, justifyContent: "center", alignItems: "center", gap: 50}}>
//       <TextInput placeholder='Digite o valor 1:' keyboardType='numeric' onChangeText={setValor1} value={valor1}></TextInput>

//       <TextInput placeholder='Digite o valor 2:' keyboardType='numeric' onChangeText={setValor2} value={valor2}></TextInput>

//       <Text>Resultado: {resultado}</Text>
//     </View>
//   )
// }



// export default function raizQuadrada(){
//   const [valor, setValor] = useState("");
//   const resultado = Math.sqrt(valor)

//   return(
//     <View style={{flex: 1, justifyContent: "center", alignItems: "center", gap: 50}}>
//       <TextInput placeholder='Digite o valor:' keyboardType='numeric' onChangeText={setValor} value={valor}></TextInput>

//       <Text>Resultado: {resultado}</Text>
//     </View>
//   )
// }



// export default function media(){
//   const [valor1, setValor1] = useState("");
//   const [valor2, setValor2] = useState("");
//   const resultado = (Number(valor1) + Number(valor2)) / 2;

//   return(
//     <View style={{flex: 1, justifyContent: "center", alignItems: "center", gap: 50}}>
//       <TextInput placeholder='Digite o valor 1:' keyboardType='numeric' onChangeText={setValor1} value={valor1}></TextInput>

//       <TextInput placeholder='Digite o valor 2:' keyboardType='numeric' onChangeText={setValor2} value={valor2}></TextInput>

//       <Text>Resultado: {resultado}</Text>
//     </View>
//   )
// }


// export default function restoDaDivisao(){
//   const [valor1, setValor1] = useState("");
//   const [valor2, setValor2] = useState("");
//   const resultado = Number(valor1) % Number(valor2);

//   return(
//     <View style={{flex: 1, justifyContent: "center", alignItems: "center", gap: 50}}>
//       <TextInput placeholder='Digite o valor 1:' keyboardType='numeric' onChangeText={setValor1} value={valor1}></TextInput>

//       <TextInput placeholder='Digite o valor 2:' keyboardType='numeric' onChangeText={setValor2} value={valor2}></TextInput>

//       <Text>Resultado: {resultado}</Text>
//     </View>
//   )
// }



// export default function dobro(){
//   const [valor, setValor] = useState("");
//   const resultado = valor * 2

//   return(
//     <View style={{flex: 1, justifyContent: "center", alignItems: "center", gap: 50}}>
//       <TextInput placeholder='Digite o valor:' keyboardType='numeric' onChangeText={setValor} value={valor}></TextInput>

//       <Text>Resultado: {resultado}</Text>
//     </View>
//   )
// }



export default function imparPar(){
  const [valor, setValor] = useState("");
  const resto = Number(valor) % 2;
  let resultado = "" 

  if (resto == 0 ? resultado= "Par" : resultado = "Ímpar")

  return(
    <View style={{flex: 1, justifyContent: "center", alignItems: "center", gap: 50}}>
      <TextInput placeholder='Digite o valor 1:' keyboardType='numeric' onChangeText={setValor} value={valor}></TextInput>

      <Text>Resultado: {resultado}</Text>
    </View>
  )
}