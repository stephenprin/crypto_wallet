import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react'
import { defaultStyles } from '@/constants/Styles'
import Colors from '@/constants/Colors'
import { Link } from 'expo-router'

const login = () => {
  const [countryCode, setCountryCode] = React.useState('+234')
  const [mobileNumber, setMobileNumber] = React.useState('')
  const onSignIn = () => { }
  return (
    <KeyboardAvoidingView style={{flex:1}}  behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={80}>
      <View style={defaultStyles.container}>
      <Text style={defaultStyles.header}>Welcome Back</Text>
      <Text style={defaultStyles.descriptionText}>Enter the phone number associated with your account</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={defaultStyles.input}
          placeholder='Country code'
          placeholderTextColor={Colors.deepGray}
          value={countryCode}
        />
         <TextInput
          style={[defaultStyles.input, {flex: 1}]}
          placeholder='Moibile number'
          keyboardType='numeric'
          value={mobileNumber}
          placeholderTextColor={Colors.deepGray}
          onChangeText={setMobileNumber}
          
        />
      </View>
     
      
      <TouchableOpacity
        style={[defaultStyles.pillButton,
        mobileNumber !== ''? styles.enabled : styles.disabled, {marginBottom: 20}]}
        onPress={onSignIn} disabled={mobileNumber.length < 10}
   
      
      >
        <Text style={defaultStyles.textBtn}>Continue</Text>
       </TouchableOpacity>
     
    </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 40,
    flexDirection: 'row',
  },
  
  enabled: {
    backgroundColor: Colors.secondary
  },
  disabled: {
    backgroundColor: Colors.dark
  }
})

export default login