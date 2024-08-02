import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react'
import { defaultStyles } from '@/constants/Styles'
import Colors from '@/constants/Colors'
import { Link } from 'expo-router'

const signup = () => {
  const [countryCode, setCountryCode] = React.useState('+234')
  const [mobileNumber, setMobileNumber] = React.useState('')
  const onSignup = () => { }
  return (
    <KeyboardAvoidingView style={{flex:1}}  behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={80}>
      <View style={defaultStyles.container}>
      <Text style={defaultStyles.header}>Let's get started!</Text>
      <Text style={defaultStyles.descriptionText}>Create an account to get started.</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='Country code'
          placeholderTextColor={Colors.deepGray}
          value={countryCode}
        />
         <TextInput
          style={[styles.input, {flex: 1}]}
          placeholder='Moibile number'
          keyboardType='numeric'
          value={mobileNumber}
          placeholderTextColor={Colors.deepGray}
          onChangeText={setMobileNumber}
          
        />
      </View>
      <Link href={"/login"} replace asChild>
        <TouchableOpacity>
        <Text style={defaultStyles.textLink}>Already have an account? Login</Text>
       </TouchableOpacity>
      </Link>

      <View style={{flex:1}} />
      
      <TouchableOpacity
        style={[defaultStyles.pillButton,
        mobileNumber !== ''? styles.enabled : styles.disabled, {marginBottom: 20}]}
        onPress={onSignup} disabled={mobileNumber.length < 10}
   
      
      >
        <Text style={defaultStyles.textBtn}>Sign up</Text>
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
  input: {
    backgroundColor: Colors.lightGray,
    padding: 15,
    borderRadius: 12,
    fontSize: 18,
    marginRight: 10,
  
  },
  enabled: {
    backgroundColor: Colors.secondary
  },
  disabled: {
    backgroundColor: Colors.dark,
  }
})

export default signup