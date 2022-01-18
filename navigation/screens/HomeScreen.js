import * as React from 'react';
import {useEffect, useState} from 'react'
import {  View, ScrollView, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {Card, Title} from 'react-native-paper';

export default function HomeScreen({ navigation }) {

    const [isLoading, setIsLoading] = useState(true);
    const [events, setEvents] = useState(null);
    var axe_title ='Axe';
    var price ='';
    var event_title ='';

    useEffect(() => {
        fetch('http://192.168.1.168:1337/events',
        {
            method: "GET",
            headers: {
                'Accept' : 'Application/json'
            }
        })
        .then(res => res.json())
        .then(response => {
            setEvents(response)
            setIsLoading(false)
        })
    },[])


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
           
           
           
            <Title style={styles.h1}>Event IIM</Title>  
            <Title style={styles.h2}>Trier</Title> 
            <ScrollView showsVerticalScrollIndicator={false}>

            

            {isLoading ? <Text>Loading... </Text> : events.map(event => 
            
                {
                    
                    if (event.axe =="prepa") {
                        axe_title = "Prépa"
                        
                    }
                    else if (event.axe =="dw") {
                        axe_title = "Axe Développement web"
                    }
                    else if (event.axe =="crea") {
                        axe_title = "Axe Création & Design"
                    }
                    else if (event.axe =="threed") {
                        axe_title = "Axe 3D"
                    }
                    else if (event.axe =="jv") {
                        axe_title = "Axe Jeux Vidéo"
                    }
                    else if (event.axe =="com") {
                        axe_title = "Axe CDEB"
                    }
                    else {
                        axe_title = "Axe"
                    }

                    if (event.price =="0") {
                        price = "Gratuit"
                    }
                    else {
                        price = event.price + ' €' 
                    }

                    

                    return (
                        
                        <View style={styles.container}>
                            <Card.Title
                                title={axe_title}
                                subtitle={event.location}
                            />
                            <View style={styles.image}>
                                <TouchableOpacity onPress={()=> navigation.navigate('NestedScreen', {eventname : event.title, eventid : event.id })}>
                                <View style={styles.image_overlay}></View>
                                <Image style={styles.image} source={{uri:'http://192.168.1.168:1337' + event.image['url'] }} />
                                </TouchableOpacity>
                            </View>
                            
                            <Title style={styles.absolute}>{event.title}</Title>
                            <Title style={styles.price}>{price}</Title>
                            

                        </View>
                        
                    )
                }
            
            
            
            
            )}
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
        fontFamily:'Roboto',
        fontSize: 30,
        fontWeight: "bold",
        textAlign: 'center',
        marginTop: 100,
    },

    h2: {
        fontSize: 20,
        textAlign:'center',
        
    },

    image: {
        width: '100%', 
        height: 200,
        position: 'relative',
        borderRadius: 10,
    },

    
    image_overlay: {
        backgroundColor : 'rgba(0,0,0,0.45)',
        position: 'absolute',
        width: '100%',
        height: 200,
        borderRadius: 10,
        zIndex: 1
    },


    absolute: {
        color :'white',
        position: 'absolute',
        bottom: 10,
        left: 20,
    },

    price:{
        color :'white',
        position: 'absolute',
        bottom: 10,
        right: 20,
    }

});