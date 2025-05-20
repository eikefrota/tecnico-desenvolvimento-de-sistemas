<!-- ---criar----
npx create-expo-app@3 promodoro

---executar----
npm start

---recriar projeto-----
npm run reset-project

----na pasta app, exclui layout---

------------------------------useState---------------------------------------------
import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';

export default function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <View>
      <Text>Contador: {contador}</Text>
      <Button title="Aumentar" onPress={() => setContador(contador + 1)} />
    </View>
  );
}

------------------------------------useEffect-----------------------------------
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

export default function Timer() {
  const [tempo, setTempo] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTempo(t => t + 1), 1000);
    return () => clearInterval(id); // Limpeza
  }, []);

  return <Text>Tempo: {tempo}s</Text>;
}

----------------------------useContext---------------------------------------------
import React, { useContext, useState, createContext } from 'react';
import { View, Text, Button } from 'react-native';

const TemaContexto = createContext();

function TemaProvider({ children }) {
  const [tema, setTema] = useState('claro');
  return (
    <TemaContexto.Provider value={{ tema, setTema }}>
      {children}
    </TemaContexto.Provider>
  );
}

function MostrarTema() {
  const { tema, setTema } = useContext(TemaContexto);
  return (
    <View>
      <Text>Tema: {tema}</Text>
      <Button
        title="Alternar Tema"
        onPress={() => setTema(tema === 'claro' ? 'escuro' : 'claro')}
      />
    </View>
  );
}

export default function App() {
  return (
    <TemaProvider>
      <MostrarTema />
    </TemaProvider>
  );
}
---------------------------------useRef----------------------------------------------------
import React, { useRef } from 'react';
import { View, TextInput, Button } from 'react-native';

export default function FocoNoInput() {
  const inputRef = useRef(null);

  return (
    <View>
      <TextInput ref={inputRef} placeholder="Digite aqui" />
      <Button title="Focar no campo" onPress={() => inputRef.current.focus()} />
    </View>
  );
}
-------------------------------------------useCallback-------------------------------------------
import React, { useState, useCallback } from 'react';
import { View, Button, Text } from 'react-native';

export default function BotaoMemoizado() {
  const [cont, setCont] = useState(0);

  const incrementar = useCallback(() => {
    setCont(prev => prev + 1);
  }, []);

  return (
    <View>
      <Text>Contador: {cont}</Text>
      <Button title="Incrementar" onPress={incrementar} />
    </View>
  );
}
-----------------------------------
Respostas dos exercícios


// ✅ useState
// 1. Contador com incrementar, decrementar e resetar
function Contador() {
  const [contador, setContador] = useState(0);
  return (
    <View>
      <Text>Contador: {contador}</Text>
      <Button title="+" onPress={() => setContador(contador + 1)} />
      <Button title="-" onPress={() => setContador(contador - 1)} />
      <Button title="Reset" onPress={() => setContador(0)} />
    </View>
  );
}

// 2. Mostrar/Ocultar texto
function MostrarTexto() {
  const [visivel, setVisivel] = useState(true);
  return (
    <View>
      {visivel && <Text>Texto visível</Text>}
      <Button title="Alternar" onPress={() => setVisivel(!visivel)} />
    </View>
  );
}

// ✅ useEffect
// 3. Log no console quando o contador mudar
function LogContador() {
  const [cont, setCont] = useState(0);
  useEffect(() => {
    console.log('Contador mudou:', cont);
  }, [cont]);

  return <Button title="+" onPress={() => setCont(cont + 1)} />;
}

// 4. Temporizador
function Temporizador() {
  const [tempo, setTempo] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTempo(t => t + 1), 1000);
    return () => clearInterval(id);
  }, []);

  return <Text>Tempo: {tempo}s</Text>;
}

// ✅ useContext
const TemaContext = createContext();

// 5. Tema claro/escuro
function TemaProvider({ children }) {
  const [tema, setTema] = useState('claro');
  return (
    <TemaContext.Provider value={{ tema, alternar: () => setTema(t => t === 'claro' ? 'escuro' : 'claro') }}>
      {children}
    </TemaContext.Provider>
  );
}

function MostrarTema() {
  const { tema, alternar } = useContext(TemaContext);
  return (
    <View>
      <Text>Tema atual: {tema}</Text>
      <Button title="Alternar Tema" onPress={alternar} />
    </View>
  );
}

// 6. Autenticação
const AuthContext = createContext();

function AuthProvider({ children }) {
  const [logado, setLogado] = useState(false);
  return (
    <AuthContext.Provider value={{ logado, login: () => setLogado(true), logout: () => setLogado(false) }}>
      {children}
    </AuthContext.Provider>
  );
}

function MostrarUsuario() {
  const { logado, login, logout } = useContext(AuthContext);
  return (
    <View>
      <Text>{logado ? 'Bem-vindo!' : 'Faça login'}</Text>
      <Button title={logado ? 'Logout' : 'Login'} onPress={logado ? logout : login} />
    </View>
  );
}

// ✅ useRef
// 7. Foco automático
function FocoInput() {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return <TextInput ref={inputRef} placeholder="Digite algo" />;
}

// 8. Contar cliques sem re-render
function ContarCliques() {
  const cliques = useRef(0);
  return (
    <Button title="Clique" onPress={() => {
      cliques.current++;
      console.log(`Clicado ${cliques.current} vezes`);
    }} />
  );
}

// ✅ useCallback
// 9. Adicionar item à lista
function ListaTarefas() {
  const [tarefas, setTarefas] = useState([]);
  const [texto, setTexto] = useState('');

  const adicionar = useCallback(() => {
    setTarefas(prev => [...prev, texto]);
    setTexto('');
  }, [texto]);

  return (
    <View>
      <TextInput value={texto} onChangeText={setTexto} />
      <Button title="Adicionar" onPress={adicionar} />
      {tarefas.map((t, i) => <Text key={i}>{t}</Text>)}
    </View>
  );
}

// 10. Função memoizada para incrementar
const Incrementar = React.memo(({ onIncrementar }) => {
  return <Button title="Incrementar" onPress={onIncrementar} />;
});

function ContadorCallback() {
  const [valor, setValor] = useState(0);
  const incrementar = useCallback(() => setValor(v => v + 1), []);
  return (
    <View>
      <Text>Valor: {valor}</Text>
      <Incrementar onIncrementar={incrementar} />
    </View>
  );
} -->