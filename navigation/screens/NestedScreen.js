import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {useEffect, useState} from 'react'

export default function NestedScreen({route, navigation }) {
    const {eventid, eventname} = route.params;
    const [event, setEvent] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    

    useEffect(() => {
        fetch('http://192.168.0.45:1337/events/' + eventid,
        {
            method: "GET",
            headers: {
                'Accept' : 'Application/json'
            }
        })
        .then(res => res.json())
        .then(response => {
            setEvent(response)
            setIsLoading(true)
            
        })
    },[])

    
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            
                {isLoading ? 
                    <View>
                        <Text style={{ fontSize: 26, fontWeight: 'bold' }}>{event.title}</Text>
                        <Text>Axe : {event.axe}</Text> 
                        <Text>Date : {event.date}</Text> 
                        <Text>Location : {event.location}</Text>
                        <Image style={styles.image} source={{uri:'http://192.168.0.45:1337' + event.image['url'] }} />
                        <Text>Description : {event.description}</Text> 
                        <Text style={styles.news}>News : {event.news}</Text> 
                        
                    </View>
                : <Text>Loading...</Text>}
                
                
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
            fontSize: 30,
            textAlign:'center',
            fontWeight: 'bold'
        },
    
        h2: {
            fontSize: 20,
            textAlign:'center',
            
        },
    
        image: {
            width: 200, 
            height: 200,
            borderRadius: 10,
        },

        news: {
            marginTop:25
        },
});