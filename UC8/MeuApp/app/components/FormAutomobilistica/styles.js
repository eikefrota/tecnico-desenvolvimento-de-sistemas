import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
  },

  label: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: 'bold',
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
    marginTop: 5,
    height: 50,
  },

  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },

  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },

  toggleLabel: {
    marginHorizontal: 8,
  },

  button: {
    backgroundColor: '#6200ee',
    padding: 12,
    borderRadius: 6,
    marginTop: 20,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    marginBottom: 15,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },

  picker: {
    height: 50,
    color: '#000', // Para texto visível no iOS
  },


});
