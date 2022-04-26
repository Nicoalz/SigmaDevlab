import React from 'react';
import { StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import { FormBuilder } from 'react-native-paper-form-builder';
import { useForm } from 'react-hook-form';
import { Button } from 'react-native-paper';
import {ImageBackground, Image, TextInput, View, } from 'react-native';
import { borderLeftColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

function RegisterScreen() {

    const [isRegistered, setIsRegistered] = React.useState(false);

    const { control, setFocus, handleSubmit } = useForm({
        defaultValues: {
            username: '',
            Surname: '',
            Name: '',
            email: '',
            password: '',
            Year: '',
            axe: '',
        },
        mode: 'onChange',
    });

    return (

        <>

            {isRegistered ? 
            
            <View style={styles.profil_container}>

        <ImageBackground style={styles.profil_imgcouverture} source={require('./../../assets/imgprofil/pulv_bg.png')}>
        </ImageBackground>

  
    
        <View style={styles.profil_content}>
          <Text style={styles.profil_titreP} >Romain FAUSTINI</Text>
          <Text style={styles.profil_textM} >IIM, A1</Text>
          <Text style={styles.profil_textP} >Romaaaain 🇮🇹 Etudiant en première année</Text>
    
          <Button style={styles.profil_deco} onPress={() => setIsRegistered(false)}>
            Déconnexion
          </Button>

          <View style={styles.profil_block}>
            <Text style={styles.profil_textP} >Prochain(s) évènement(s) :</Text>
    
            <View style={styles.profil_rondgroupe}>
              <View style={styles.profil_rond}></View>
              <View style={styles.profil_rond}></View>
            </View>
          </View>
    
     
          <View style={styles.profil_block}>
            <Text style={styles.profil_textP} >Evènement(s) passé(s) : </Text>
    
            <View style={styles.profil_rondgroupe}>
              <View style={styles.profil_rond}></View>
              <View style={styles.profil_rond}></View>
            </View>
    
          </View>
    
    
          <View style={styles.profil_block}>
            <Text style={styles.profil_textP} >Badge(s) :</Text>
    
            <View style={styles.profil_rondgroupe}>
              <View style={styles.profil_rond}></View>
              <View style={styles.profil_rond}></View>
            </View>
    
          </View>
    
        </View>
    
        <Image />

        <View style={styles.profil_profil}>
        </View>
    
      </View>

                :

                <ScrollView style={styles.containerStyle}>
                <ScrollView contentContainerStyle={styles.scrollViewStyle}>
                    <Text style={styles.headingStyle}>S'inscrire</Text>
                    <FormBuilder style={styles.input}
                        control={control}
                        setFocus={setFocus}
                        formConfigArray={[
                            {
        
                                type: 'email',
                                name: 'email',
        
                                rules: {
                                    required: {
                                        value: true,
                                        message: 'Votre Email est requis',
                                    },
                                    pattern: {
                                        value:
                                            /[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})/,
                                        message: 'Votre email n\'est pas valide.',
                                    },
                                },
                                textInputProps: {
                                    label: 'Email',
                                },
                            },
                            {
                                type: 'text',
                                name: 'username',
        
                                rules: {
                                    required: {
                                        value: true,
                                        message: 'Votre username est requis',
                                    },
                                    minLength: {
                                        value: 2,
                                        message: 'Votre username doit contenir au minimum 2 caractères.',
                                    },
        
                                },
                                textInputProps: {
                                    label: 'Username',
                                },
                            },
                            {
                                type: 'text',
                                name: 'Surname',
        
                                rules: {
                                    required: {
                                        value: true,
                                        message: 'Votre nom est requis',
                                    },
                                    minLength: {
                                        value: 2,
                                        message: 'Votre nom doit contenir au minimum 2 caractères.',
                                    },
        
                                },
                                textInputProps: {
                                    label: 'Nom',
                                },
                            },
                            {
                                type: 'text',
                                name: 'Name',
        
                                rules: {
                                    required: {
                                        value: true,
                                        message: 'Votre prénom est requis',
                                    },
                                    minLength: {
                                        value: 2,
                                        message: 'Votre prénom doit contenir au minimum 2 caractères.',
                                    },
        
                                },
                                textInputProps: {
                                    label: 'Prénom',
                                },
                            },
        
                            {
                                type: 'password',
                                name: 'password',
                                rules: {
                                    required: {
                                        value: true,
                                        message: 'Le mot de passe est requis.',
                                    },
                                    minLength: {
                                        value: 8,
                                        message: 'Votre mot de passe doit contenir au minimum 8 caractères.',
                                    },
                                    maxLength: {
                                        value: 30,
                                        message: 'Votre mot de passe doit contenir entre 8 et 30 caractères.',
                                    },
                                },
                                textInputProps: {
                                    label: 'Mot de passe',
                                },
                            },
                            {
                                name: 'Year',
                                type: 'autocomplete',
        
        
                                rules: {
                                    required: {
                                        value: true,
                                        message: 'Votre niveau est requis',
                                    },
                                },
                                textInputProps: {
                                    label: 'Année',
                                },
                                options: [
                                    {
                                        value: "A1",
                                        label: 'A1',
                                    },
                                    {
                                        value: "A2",
                                        label: 'A2',
                                    },
                                    {
                                        value: "A3",
                                        label: 'A3',
                                    },
                                    {
                                        value: "A4",
                                        label: 'A4',
                                    },
                                    {
                                        value: "A5",
                                        label: 'A5',
                                    },
                                ],
                            },
                            {
                                name: 'axe',
                                type: 'autocomplete',
        
        
                                rules: {
                                    required: {
                                        value: true,
                                        message: 'Votre axe est requis',
                                    },
                                },
                                textInputProps: {
                                    label: 'Axe',
                                },
                                options: [
                                    {
                                        value: "prepa",
                                        label: 'Prepa',
                                    },
                                    {
                                        value: "dw",
                                        label: 'Developpement web',
                                    },
                                    {
                                        value: "crea",
                                        label: 'Création Design',
                                    },
                                    {
                                        value: "threeD",
                                        label: 'Animation 3D',
                                    },
                                    {
                                        value: "com",
                                        label: 'Communication Digitale E-Business',
                                    },
                                ],
                            },
                        ]}
                    />
                    <Button style={styles.button}
                        mode={'contained'}
                        onPress={handleSubmit((data) => {
        
                            var axios = require('axios');
        
                            var config = {
                                method: 'post',
                                url: 'http://192.168.0.45:1337/users',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                data: data
                            };
        
                            axios(config)
                                .then(function (response) {
                                    console.log(JSON.stringify(response.data));
                                    setIsRegistered(true);
                                })
                                .catch(function (error) {
                                    console.log(error);
                                    setIsRegistered(false);
                                });
        
        
        
        
                        })}>
                        S'inscire
                    </Button>
        
        
        
                </ScrollView>
        
            </ScrollView>
            }

        
 

        </>



            

       
    );
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
    },
    scrollViewStyle: {
        flex: 1,
        padding: 15,
        marginTop: 90,
        marginBottom: 40,
        justifyContent: 'center',
    },
    headingStyle: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 40,
    },
    button: {
        backgroundColor: 'orange',
    },
    profil_container: {
        flex: 1
      },
      profil_imgcouverture: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: 250,
        backgroundColor: 'red'
      },
      profil_content: {
        position: 'absolute',
        width: '100%',
        height: '80%',
        bottom:0,
        backgroundColor: 'lightgrey',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingTop: '15%',
        flex:0,
        // justifyContent: 'center',
        alignItems: 'center',
      },
      profil_profil: {
        ...StyleSheet.absoluteFill,
        position: 'absolute',
        top: '15%',
        left: '40%',
        width: '20%',
        height: '11%',
        borderRadius:1000,
        backgroundColor: 'grey',
        
        
      },
      profil_textG: {
        color: 'black',
        textAlign: 'center',
        fontSize: 18,
        marginBottom: '2%',
        maxWidth: '70%',
      },
      profil_textM: {
        color: 'black',
        textAlign: 'center',
        fontSize: 16,
        marginBottom: '2%',
        maxWidth: '70%',
      },
      profil_textP: {
        color: 'black',
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: '2%',
        maxWidth: '70%',
      },
    
      profil_titreP: {
        color: 'black',
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: '2%',
        maxWidth: '70%',
      },
      profil_block: {
        color: 'black',
        minWidth: '70%',
        backgroundColor: 'white',
        height: '20%',
        marginTop:'10%',
        //border: '3px solid black',
        borderRadius: 25,
        paddingTop: '2%',
        paddingLeft: '5%'
      },
      profil_rondgroupe: {
        minWidth: '40%',
      },
    
      profil_rond: {
        minWidth: '20%',
        minHeight: '11%',
        borderRadius:1000,
        //backgroundColor: 'green',
      },


});

export default RegisterScreen;