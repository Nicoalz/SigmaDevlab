import * as React from 'react';
import { useEffect, useState } from 'react'
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { Card, Title } from 'react-native-paper';


export default function TicketsScreen({ navigation }) {
    const [usersEvent, setUsersEvent] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('http://192.168.0.45:1337/users/1',
            {
                method: "GET",
                headers: {
                    'Accept': 'Application/json'
                }
            })
            .then((response) => {

                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong with Users');
                }
            })
            .then((responseJson) => {
                setUsersEvent(responseJson)
                setIsLoading(false)
            })
            .catch((error) => {
                console.log(error);

            });

    }, []
    )


    return (

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <View showsVerticalScrollIndicator={false}>
                <Text style={styles.h1}>Mes inscriptions</Text>
                <Text style={styles.h3}>1 évènement à valider disponible</Text>
                <View style={{ flex: 1, flexDirection: 'row', marginVertical: 20 }}>
                    <Text style={[styles.button, styles.not_selected]} nativeID='favourite_button'>Favoris</Text>
                    <Text style={[styles.button, styles.selected]} nativeID='register_button'>Inscrit</Text>
                </View>

            </View>
            <ScrollView>
                
                {isLoading ? <Text>Loading Tickets...</Text> :
                    (usersEvent.registered_events.map(registered => {

                        return (

                            <View style={styles.container}>
                                <Card.Title
                                    title={registered.title}
                                    subtitle={registered.date}
                                />
                            </View>
                        )
                    }),
                        usersEvent.favourites.map(favourite => {

                            return (

                                <View style={styles.container}>
                                    <Card.Title
                                        title={favourite.title}
                                        subtitle={favourite.date}
                                    />


                                </View>
                            )

                        })
                    )


                }
            </ScrollView>
            
        </View>
        


    );
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        margin: 20,
        flex: 1,
        alignItems: 'center',
    },

    h1: {
        fontFamily: 'Roboto',
        fontSize: 30,
        fontWeight: "bold",
        textAlign: 'center',
        marginTop: 100,
    },
    h2: {
        fontSize: 20,
        textAlign: 'center',

    },
    h3: {
        fontSize: 15,
        textAlign: 'center',

    },

    button: {
        fontSize: 20,
        display: 'flex',
        textAlign: 'center',
        textAlignVertical: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
        height: 40,
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 20,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7
    },

    selected: {
        backgroundColor: '#cccbcc',

    },
    not_selected: {
        backgroundColor: 'white',

    }



});