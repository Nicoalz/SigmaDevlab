import React from 'react';
import { StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import { FormBuilder } from 'react-native-paper-form-builder';
import { useForm } from 'react-hook-form';
import { Button } from 'react-native-paper';

function RegisterScreen() {
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
                            })
                            .catch(function (error) {
                                console.log(error);
                            });




                    })}>
                    Submit
                </Button>

            </ScrollView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
    
    },
    scrollViewStyle: {
        flex: 1,
        padding: 15,
        marginTop: 20,
        justifyContent: 'center',
    },
    headingStyle: {
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 40,
    },
    button: {
        backgroundColor: 'orange',
    },

});

export default RegisterScreen;