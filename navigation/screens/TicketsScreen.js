import * as React from 'react';
import { useEffect, useState } from 'react'
import { View, ScrollView, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Card, Title } from 'react-native-paper';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


export default function TicketsScreen({ navigation }) {
    const [usersEvent, setUsersEvent] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [clickRegister, setClickRegister] = useState(false);
    const [clickFavourite, setClickFavourite] = useState(true);




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

        <View style={[styles.body]}>
            <View showsVerticalScrollIndicator={false}>
                <Text style={styles.h1}>Mes inscriptions</Text>
                <View style={[styles.container_button]} >

                    {clickFavourite ?
                        <TouchableOpacity style={[styles.button, styles.selected]} onPress={() => { setClickFavourite(true), setClickRegister(false) }}>
                            <Text >Favoris</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={[styles.button, styles.not_selected]} onPress={() => { setClickFavourite(true), setClickRegister(false) }}>
                            <Text >Favoris</Text>
                        </TouchableOpacity>
                    }


                    {clickRegister ?
                        <TouchableOpacity style={[styles.button, styles.selected]} onPress={() => { setClickRegister(true), setClickFavourite(false) }}>
                            <Text >Inscrit</Text>
                        </TouchableOpacity>
                        : <TouchableOpacity style={[styles.button, styles.not_selected]} onPress={() => { setClickRegister(true), setClickFavourite(false) }}>
                            <Text >Inscrit</Text>
                        </TouchableOpacity>
                    }

                </View>
                {isLoading ? <Text>Loading Tickets...</Text> :

                    <ScrollView style={[styles.ScrollView]}>

                        {clickFavourite ?
                            usersEvent.favourites.map(favourite => {
                                return (

                                    <TouchableOpacity>
                                        <View style={styles.container_ticket}>
                                            <Card.Title style={styles.card}
                                                title={favourite.title}
                                                subtitle={favourite.date}
                                            />
                                            <Image style={styles.logo} source={{ uri: 'http://192.168.0.45:1337' + favourite.image.url }} />

                                        </View>
                                    </TouchableOpacity>
                                )

                            }) : null

                        }
                        {clickRegister ?

                            usersEvent.registered_events.map(registered => {
                                return (

                                    <TouchableOpacity>
                                        <View style={styles.container_ticket}>
                                            <Card.Title style={styles.card}
                                                title={registered.title}
                                                subtitle={registered.date}
                                            />
                                            <Image style={styles.logo} source={{ uri: 'http://192.168.0.45:1337' + registered.image.url }} />
                                        </View>
                                    </TouchableOpacity>
                                )

                            }) : null

                        }
                    </ScrollView>
                }

            </View>
        </View>



    );
}



const styles = StyleSheet.create({

    body: {
        flex: 1,
    },

    container_button: {

        justifyContent: 'center',
        flexDirection: 'row',
        marginVertical: 40,

    },

    container_ticket: {

        paddingBottom: 30,
        borderBottomColor: 'lightgrey',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10



    },

    ScrollView: {
        height: '100%'

    },

    card: {
        width: '80%',

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
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 20,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.05,
        shadowRadius: 4.65,
        elevation: 7
    },

    logo: {
        borderRadius: 100,
        width: 50,
        height: 50

    },

    selected: {
        backgroundColor: '#cccbcc',

    },
    not_selected: {
        backgroundColor: 'white',

    }



});