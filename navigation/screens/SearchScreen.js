import * as React from 'react';
import {ImageBackground, Image, StyleSheet, Text, TextInput, View, ScrollView, SafeAreaView} from 'react-native';
import {useEffect, useState} from 'react';
import { Searchbar, Card, Title, Paragraph } from 'react-native-paper';
export default function SearchScreen({route, navigation }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [events, setEvents] = useState([]);
    const onChangeSearch = query => setSearchQuery(query);
    const apiURL = 'http://localhost:1337/events';
    const [shouldShow, setShouldShow] = useState(false);

    useEffect(() => {
        fetch(apiURL,
        {
            method: "GET",
            headers: {
                'Accept' : 'Application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            setEvents(data)
            setIsLoading(false)
            
        })
    },[])
    return (
      
        <ScrollView style={{ flex: 1 }} >
             
            <View style={{marginBottom:40, flex: 0, flexDirection: "column", alignItems: "center", }} >
                <Text style={styles.search_h1}>Event IIM</Text>
                
                
                <Searchbar
               onFocus={() => setShouldShow(true)}
               
               
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
                />
                     
                {shouldShow ? (
                <ScrollView style={styles.suggestions} >

                { events.filter((event) => {
                    return event.title.toLowerCase().includes(searchQuery.toLowerCase());
                } ).map(event => 
                {  
                    return (
                    <Card style={styles.shadow} onPress={()=> navigation.navigate('NestedScreen', {eventname : event.title, eventid : event.id })}>
                        
                        <Card.Content >
                          <Title  key={event.id}>{event.title}</Title>
                          <Paragraph>{event.axe}</Paragraph>
                          <Image style={styles.image} source={{uri:'http://localhost:1337' + event.image['url'] }} />
                        </Card.Content>
                    </Card>

                        
                    )
                }
                )}
                </ScrollView>
                    ) : null}

            </View>
        </ScrollView>
        
    );
}   



const styles = StyleSheet.create({
    search_h1: {
      fontSize: 30,
      fontWeight: "bold",
      textAlign: 'center',
      marginTop: 100,
    },
    search_recherche: {
        borderWidth: 1,
        width:188,
        height: 22,
        borderRadius: 30,
        textAlign: 'center',
        fontSize:16,
        fontWeight: "bold",
    },
    suggestions:{
        height:'auto',
        alignSelf:"stretch",
        backgroundColor: 'white',
        position:'relative'
    },
    shadow:{
    marginTop:5,
    marginBottom:5,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    },
    image: {
        width: 100, 
        height: 50,
        borderRadius: 10,
        position:'absolute',
        right: 50,
        top: '40%',
    },


  });