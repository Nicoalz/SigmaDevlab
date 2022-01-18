import React, {useEffect, useState} from 'react'
import { View, ScrollView, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {Card, Title} from 'react-native-paper';





export default function HomeScreen({navigation}){

    const [isLoading, setIsLoading] = useState(true);
    const [events, setEvents] = useState(null);
    var axe_title ='Axe';
    var price ='';

    useEffect(() => {
        fetch('http://192.168.1.132:1337/events',
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
        <ScrollView>
            <Title style={styles.h1}>Event IIM</Title>  
            <Title style={styles.h2}>Trier</Title> 

            

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
                        <TouchableOpacity onPress={()=> navigation.navigate('NestedScreen')}>
                        <View style={styles.container}>
                            <Card.Title
                                title={axe_title}
                                subtitle={event.location}
                            />
                            <View style={styles.image}>
                                <View style={styles.image_overlay}></View>
                                <Image style={styles.image} source={{uri:'http://192.168.1.132:1337' + event.image['url'] }} />
                            </View>
                            

                            
                            <Title style={styles.absolute}>{event.title}</Title>
                            <Title style={styles.price}>{price}</Title>

                        </View>
                        </TouchableOpacity>
                    )
                }
            
            
            
            
            )}
        </ScrollView>

        
    )
} 


const styles = StyleSheet.create({
    container: {
    width: 300,
    margin: 20,
    flex: 1,
    alignItems: 'center',
    },

    h1: {
        fontSize: 30,
        textAlign:'center',
        fontWeight: 'bold'
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