import { useEffect, useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

//regex for diffrient input fields
const userRE = /^[a-zA-Z]+$/;
const emailRE = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
const passRE = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])/;


export default function Register( {navigation}) {

    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const auth = getAuth();

    const userValidation = () => {
        if(userRE.test(user) && emailRE.test(email) && passRE.test(pass)
        ){
            createUserWithEmailAndPassword(auth, email, password)
                .than(() => {
                    navigation.navigate("Home");
                    console.log("User created!");
                })
        }
    }

    return (
        <View style={styles.container}>
        <View style={styles.inputfield}>
         <TextInput 
           style={styles.input} 
           placeholder='username' 
           onChangeText={setUser}
           autoCapitalize='none'
           testID='login-username'
            />   
            <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={setEmail}
            testID="email"
            keyboardType= "email-address"
          />    
         <TextInput 
           style={styles.input} 
           placeholder='password' 
           autoCapitalize='none'
           testID='login-password'           
           />  
                  
         </View> 
         <View style={styles.button}>
         <Button
           title="Login"             
           color={'white'}
           onPress={() => {userValidation}}
           testID='login-button'
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
   