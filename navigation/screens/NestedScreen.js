import * as React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import {useEffect, useState} from 'react'

export default function NestedScreen({route, navigation }) {
    const {eventid, eventname} = route.params;
    const [event, setEvent] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    

    useEffect(() => {
        fetch('http://10.2.162.139:1337/events/' + eventid,
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
        
        <View style={{flex: 1}}>
                {isLoading ? 
                    <View>
                        <View style={{ backgroundColor: 'rgba(52, 52, 52, 0.8)', alignSelf: 'stretch', height: 200 }}>
                            <ImageBackground
                            source={{uri:'http://10.2.162.139:1337' + event.image['url'] }}
                            style={{width: '100%', height: '100%'}}
                            > 
                                <View style={{ flex:1, justifyContent:'flex-end', backgroundColor: 'rgba(52, 52, 52, 0.5)', alignSelf: 'stretch', height: 200 }}>
                                    <Text style={{ color: "white", fontSize: 26, fontWeight: 'bold' }}>{event.title}</Text>
                                    <Text style={{ color: "white"}}>{event.date.toString().substring(8,10) + ' ' + event.date.toString().substring(5,7) + ' ' + event.date.toString().substring(0,4) + ' à ' + event.date.toString().substring(11,16)}</Text> 
                                    <Text style={{ color: "white"}}>{event.axe}</Text> 
                                </View>
                            </ImageBackground>
                        </View>

                        <View style={{}}>
                            <View style={{}}>
                            <Text>Location : {event.location}</Text>
                            </View>
                            <View style={{}}>
                            <Text>Prix : {event.price}</Text>
                            </View>
                        </View>
                        <Text>Description : {event.description}</Text>
                        <Text style={styles.news}>News : {event.news}</Text> 
                    </View>
                : <Text>Loading...</Text>}
        </View>
        
    );
    

    }
    const styles = StyleSheet.create({
        backgroundImage: {
            flex: 1,
            resizeMode: "cover",
            justifyContent: "center"
        },
        
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
            alignSelf: 'stretch',
            height: 200
        },

        news: {
            marginTop:25
        },
});