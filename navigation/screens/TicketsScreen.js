import * as React from 'react';
import { useEffect, useState } from 'react'
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { Card, Title } from 'react-native-paper';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


export default function TicketsScreen({ navigation }) {
    const [usersEvent, setUsersEvent] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    var [state, setState] = useState("usersEvent.favourites");
    

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
                <Text style={styles.h3}>1 évènement à valider disponible</Text>
                <View style={[styles.container_button]} >
                    <Text style={[styles.button, styles.not_selected]} onPress={() => {
                        alert('ok')
                        
                    }}>Favoris</Text>
                    <Text style={[styles.button, styles.selected]} nativeID='register_btn'>Inscrit</Text>
                </View>
                <ScrollView style={[styles.ScrollView]}>

                    {isLoading ? <Text nativeID='fav_reg'>Loading Tickets...</Text> :
                    
                        <Text>{state}</Text>
                        

                    }
                </ScrollView>

            </View>
        </View>



    );
}


function DisplayFavourite(event) {
    return (
        event.map(favourite => {
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

function DisplayRegistered(event) {
    return (
        event.map(registered => {

            return (

                <View style={styles.container}>
                    <Card.Title
                        title={registered.title}
                        subtitle={registered.date}
                    />
                </View>
            )
        })
    )
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

    container: {
        width: 300,
        margin: 20,
        flex: 1,
    },

    ScrollView: {
        height: '100%'

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