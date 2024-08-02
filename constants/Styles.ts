import { StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';

export const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 16,
  },
  header: {
    fontSize: 30,
    fontWeight: '700',
    color: 'white'
  },
  pillButton: {
    padding: 10,
    height: 60,
    borderWidth: 0.21,
    borderColor: "white",
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLink: {
    color: Colors.gray,
    fontSize: 18,
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
  textBtn: {
    color: Colors.lightGray,
    fontSize: 18,
    fontWeight: '500',
  
  },
  descriptionText: {
    fontSize: 18,
    marginTop: 20,
    color: Colors.gray,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
  pillButtonSmall: {
    paddingHorizontal: 20,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextSmall: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 20,
    marginBottom: 10,
  },
  block: {
    marginHorizontal: 20,
    padding: 14,
    backgroundColor: '#fff',
    borderRadius: 16,
    gap: 20,
  },
  input: {
    backgroundColor: Colors.lightGray,
    padding: 15,
    borderRadius: 12,
    fontSize: 18,
    marginRight: 10,
  
  },
});