// 1 - Criar um contador com botões de incrementar, decrementar e resetar.

// import { useState } from 'react';
// import { Button, Text, View } from 'react-native';

// export default function Contador() {
//   const [contador, setContador] = useState(0);

//   return (
//     <View>
//       <Text>Contador: {contador}</Text>
//       <Button title="Incrementar" onPress={() => setContador(contador + 1)} />
//       <Button title="Decrementar" onPress={() => setContador(contador - 1)} />
//       <Button title="Resetar" onPress={() => setContador(0)} />
//     </View>
//   );
// }


// 2 - Alternar visibilidade de um texto com botão "Mostrar/Ocultar".

// import { useState } from 'react';
// import { Button, Text, View } from 'react-native';

// export default function mostrarOcultar() {
//   const [visivel, setVisivel] = useState(true);
//   return (
//     <View>
//       {visivel && <Text>ACHOOOOOOOU</Text>}
//       <Button title="Alternar" onPress={() => setVisivel(!visivel)} />
//     </View>
//   );
// }


// 3 - Exibir uma mensagem no console toda vez que o estado de um contador mudar. 

// import { useEffect, useState } from 'react';
// import { Button, Text, View } from 'react-native';

// export default function Contador() {
//   const [contador, setContador] = useState(0);
  
//   useEffect(() => {
//     console.log("Apertado")
//   })

//   return (
//     <View>
//       <Text>Contador: {contador}</Text>
//       <Button title="Incrementar" onPress={() => setContador(contador + 1)} />
//       <Button title="Decrementar" onPress={() => setContador(contador - 1)} />
//       <Button title="Resetar" onPress={() => setContador(0)} />
//     </View>
//   );
// }


// 5 - Criar um contexto de tema (claro/escuro) com botão para alternar entre eles. 

// import React, { useContext, useState, createContext } from 'react';
// import { View, Text, Button } from 'react-native';

// const TemaContexto = createContext();

// function TemaProvider({ children }) {
//   const [tema, setTema] = useState('claro');
//   return (
//     <TemaContexto.Provider value={{ tema, setTema }}>
//       {children}
//     </TemaContexto.Provider>
//   );
// }

// function MostrarTema() {
//   const { tema, setTema } = useContext(TemaContexto);
//   return (
//     <View>
//       <Text>Tema: {tema}</Text>
//       <Button
//         title="Alternar Tema"
//         onPress={() => setTema(tema === 'claro' ? 'escuro' : 'claro')}
//       />
//     </View>
//   );
// }

// export default function App() {
//   return (
//     <TemaProvider>
//       <MostrarTema />
//     </TemaProvider>
//   );
// }


// 6 - Criar um contexto de autenticação que mostra "Bem-vindo" se o usuário estiver logado.

