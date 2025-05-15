import { StyleSheet, Text, View } from 'react-native';

const SectionStyle = ({children}) => {
    return(
      <View style={styles.container}>
        <Text style={styles.title}>{children}</Text>
      </View>  
    );
};

const styles = StyleSheet.create({
    container:{
        marginVertical: 16,
    },

    title:{
        fontSize: 20, 
        fontWeight: "700",
        color: "#300",
        borderBottomWidth: 2,
        borderBottomColor: "#CCC",
        paddingBottom: 4,
    },
});

export default SectionStyle;