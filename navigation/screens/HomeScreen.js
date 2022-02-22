import * as React from 'react';
import {useEffect, useState} from 'react'
import {  View, ScrollView, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {Card, Title} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import { Button, SafeAreaView } from 'react-native';

export default function HomeScreen({ navigation }) {

    const [isLoading, setIsLoading] = useState(true);
    const [events, setEvents] = useState(null);
    const [shouldShow, setShouldShow] = useState(false);
    const [selectedAxe, setSelectedAxe] = useState();
    var axe_title ='Axe';
    var price ='';
    var event_title ='';

    useEffect(() => {
        fetch('http://localhost:1337/events',
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

            <ScrollView showsVerticalScrollIndicator={false}>

            <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.containerTri}>
        {/*Here we will return the view when state is true 
        and will return false if state is false*/}
        {shouldShow ? (
            <Picker style={{alignSelf: 'stretch'}} selectedValue={selectedAxe}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedAxe(itemValue)
            }>
            <Picker.Item label="Tous" value="all"/>
            <Picker.Item label="Prépa" value="prepa"/>
            <Picker.Item label="Développement web" value="dw" />
            <Picker.Item label="Création & Design" value="crea" />
            <Picker.Item label="3D" value="threed" />
            <Picker.Item label="Jeux Vidéo" value="jv" />
            <Picker.Item label="CDEB" value="com" />
            </Picker>
        ) : null}
        <Button
            title="Trier"
            onPress={() => setShouldShow(!shouldShow)}
        />
        </View>
        </SafeAreaView  > 

            
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

                    
                        //display only dw events
                        if (event.axe == selectedAxe) {
                            return (
                                <View style={styles.container}>
                                <Card.Title
                                    title={axe_title}
                                    subtitle={event.location}
                                />
                                <View style={styles.image}>
                                    <TouchableOpacity onPress={()=> navigation.navigate('NestedScreen', {eventname : event.title, eventid : event.id })}>
                                    <View style={styles.image_overlay}></View>
                                    <Image style={styles.image} source={{uri:'http://localhost:1337' + event.image['url'] }} />
                                    </TouchableOpacity>
                                </View>
                                
                                <Title style={styles.absolute}>{event.title}</Title>
                                <Title style={styles.price}>{price}</Title>
                                
    
                            </View>
                            )
                        }
                        else if (selectedAxe == null || selectedAxe == 'all') {
                            return (
                        
                                <View style={styles.container}>
                                    <Card.Title
                                        title={axe_title}
                                        subtitle={event.location}
                                    />
                                    <View style={styles.image}>
                                        <TouchableOpacity onPress={()=> navigation.navigate('NestedScreen', {eventname : event.title, eventid : event.id })}>
                                        <View style={styles.image_overlay}></View>
                                        <Image style={styles.image} source={{uri:'http://localhost:1337' + event.image['url'] }} />
                                        </TouchableOpacity>
                                    </View>
                                    
                                    <Title style={styles.absolute}>{event.title}</Title>
                                    <Title style={styles.price}>{price}</Title>
                                    
        
                                </View>
                                
                            )
                        }
                    
                    return (
                        <View style={{width:330}}></View>
                    )
                }
            
            
            )}
        </ScrollView>


        </View>
    );
}



const styles = StyleSheet.create({
    containerTri: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        margin: 10,
      },
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