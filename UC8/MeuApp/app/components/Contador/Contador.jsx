import { useState } from 'react';
import { Button, View } from 'react-native';

const [contador, setContador] = useState()

const Contador = ({ contador }) => {
    return(
        <View>
            <Button onPress={contador + 1}>Contador</Button>
        </View>
    );
};

export default Contador 