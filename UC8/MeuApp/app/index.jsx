// ----------------------------useContext---------------------------------------------
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


//-------------------------------useRef----------------------------------------------------
// import { useRef } from 'react';
// import { Button, TextInput, View } from 'react-native';

// export default function FocoNoInput() {
//   const inputRef = useRef(null);

//   return (
//     <View>
//       <TextInput ref={inputRef} placeholder="Digite aqui" />
//       <Button title="Focar no campo" onPress={() => inputRef.current.focus()} />
//     </View>
//   );
// }



// ---------------------------------useCallback-------------------------------------------
import { useCallback, useState } from 'react';
import { Button, Text, View } from 'react-native';

export default function BotaoMemoizado() {
  const [cont, setCont] = useState(0);

  const incrementar = useCallback(() => {
    setCont(prev => prev + 1);
  }, []);

  const decrementar = useCallback(() => {
    setCont(prev => prev - 1);
  }, []);

  const resetar = useCallback(() => {
    setCont(prev => 0);
  }, []);

  return (
    <View>
      <Text>Contador: {cont}</Text>
      <Button title="Incrementar" onPress={incrementar} />
      <Button title="Decrementar" onPress={decrementar} />
      <Button title="Resetar" onPress={resetar} />
    </View>
  );
}
