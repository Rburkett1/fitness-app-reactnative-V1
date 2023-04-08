import { useEffect, useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text } from 'react-native';

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';


export default function Login(navigation) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //function to check user and pass validation 
    function checkLogin() {
        signInWithEmailAndPassword(auth, email, password)
             .then((userCredential) => {
                 //navigate to home if login valid 
                navigation.navigate("Home")
             })
             .catch(() => {
                alert('there was an error')
                
             })
    }

    return (
        <View style={styles.container}>
        <View style={styles.inputfield}>
         <TextInput 
           style={styles.input} 
           placeholder='email'
           onChangeText={setEmail} 
           autoCapitalize='none'
           testID='login-email'
            />       
         <TextInput 
           style={styles.input} 
           placeholder='password' 
           onChangeText={setPassword}
           autoCapitalize='none'
           testID='login-pass'           
           />         
         </View> 
         <View style={styles.button}>
         <Button
           title="Login"             
           color={'white'}
           onPress={checkLogin}
           testID='login-button'
         /> 
         <Button
           title="Register"         
           color={'white'}
           onPress={() => navigation.navigate('Register')}
           testID='login-register'
         /> 
       </View>
       </View>
     );
   }
   
   const styles = StyleSheet.create({
     container: {
       flex: 1,
       backgroundColor: 'darkgray',
       alignItems: 'center',
       justifyContent: 'center',
     },
     input: {
       paddingVertical: 15,
       paddingHorizontal: 15,
       backgroundColor: 'lightgray',
       //borderColor: 'black',
       //borderWidth: 1,
       borderRadius: 25,
       width: 350,
       marginTop: 10,
       marginBottom: 10,
       
     },
     inputfield: {
       alignItems: 'center',
        marginTop: 10,
        marginBottom: 10
        
     },
     button: {
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'space-between',
     },
   });
   