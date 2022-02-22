import * as React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import {useEffect, useState} from 'react'

export default function NestedScreen({route, navigation }) {
    const {eventid, eventname} = route.params;
    const [event, setEvent] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    

    useEffect(() => {
        fetch('http://localhost:1337/events/' + eventid,
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
                    <View style={{flex: 1}}>
                        <View style={{ backgroundColor: 'rgba(52, 52, 52, 0.8)', alignSelf: 'stretch', height: 200 }}>
                            <ImageBackground
                            source={{uri:'http://localhost:1337' + event.image['url'] }}
                            style={{width: '100%', height: '100%'}}
                            > 
                                <View style={{ paddingLeft:20, paddingBottom:20, flex:1, justifyContent:'flex-end', backgroundColor: 'rgba(52, 52, 52, 0.5)', alignSelf: 'stretch', height: 200 }}>
                                    <Text style={{ color: "white", fontSize: 26, fontWeight: 'bold' }}>{event.title}</Text>
                                    <Text style={{ color: "white"}}>{event.date.toString().substring(8,10) + '/' + event.date.toString().substring(5,7) + '/' + event.date.toString().substring(0,4) + ' à ' + event.date.toString().substring(11,16)}</Text>
                                    {event.axe == 'prepa' ? <Text style={{ color: "white"}}>Prépa </Text> : null}
                                    {event.axe == 'dw' ? <Text style={{ color: "white"}}>Axe Développement Web </Text> : null}
                                    {event.axe == 'crea' ? <Text style={{ color: "white"}}>Axe Création & Design</Text> : null}
                                    {event.axe == 'threed' ? <Text style={{ color: "white"}}>Axe 3D</Text> : null}
                                    {event.axe == 'jv' ? <Text style={{ color: "white"}}>Axe Jeux Vidéo</Text> : null}
                                    {event.axe == 'com' ? <Text style={{ color: "white"}}>Axe CDEB</Text> : null}
                                </View>
                            </ImageBackground>
                        </View>
                        <ScrollView>
                            <View style={{flexDirection:'row', justifyContent:'space-around',marginBottom:30, marginTop:30}}>
                                <View style={styles.squareCard}>
                                <Text  style={{ color: "black", fontSize: 26, fontWeight: 'bold', textAlign:'center' }}>{event.price}</Text>
                                </View>
                                <View style={styles.squareCard}>
                                <Text  style={{ color: "black", fontSize: 26, fontWeight: 'bold', textAlign:'center' }}>{event.location}</Text>
                                </View>
                            </View>
                            <Text style={styles.infosTitle}>Description</Text>
                            <Text style={styles.infosText}>{event.description}</Text>
                            <Text style={styles.infosTitle}>News</Text>
                            <Text style={styles.infosText}>{event.news}</Text> 
                        </ScrollView>
                        
                        
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
        infosTitle: {
            color: '#272727',
            fontSize: 26,
            fontWeight: 'bold',
            marginLeft:20,
            marginBottom:15
        },
        infosText: {
            color: '#272727',
            marginBottom: 30,
            marginLeft: 20,
            marginRight: 20,
            textAlign: 'justify'
        },
        squareCard: {
            backgroundColor: 'white',
            justifyContent: "center",
            alignItems: "center",
            width: 130,
            height: 130,
            borderRadius: 10,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2
            },
            shadowOpacity: 0.5,
            shadowRadius: 3.84,
            elevation: 5
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