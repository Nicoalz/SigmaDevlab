import * as React from 'react';
import {ImageBackground, Image, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';

export default function SearchScreen({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <View style={{marginBottom:40, flex: 0, flexDirection: "column", alignItems: "center",}}>
                <Text style={styles.search_h1}>Event IIM</Text>
                
                <TextInput placeholder="Rechercher" style={styles.search_recherche}>
                    
                </TextInput>
            </View>
            <View style={{flex: 0, flexDirection:"row",flexWrap:'wrap',justifyContent:'center',}}>
                <ImageBackground source={require('./../../assets/img/dev.png')} style={styles.search_card}>
                    <Text style={styles.search_cardText}>Développement web</Text>
                </ImageBackground>
                <ImageBackground source={require('./../../assets/img/jv.png')} style={styles.search_card}>
                    <Text style={styles.search_cardText}>Jeux vidéo</Text>
                </ImageBackground>
                <ImageBackground source={require('./../../assets/img/3d.png')} style={styles.search_card}>
                    <Text style={styles.search_cardText}>Animation 3D</Text>
                </ImageBackground>
                <ImageBackground source={require('./../../assets/img/cdeb.png')} style={styles.search_card}>
                    <Text style={styles.search_cardText}>Communication Digitale E-Business</Text>
                </ImageBackground>
                <ImageBackground source={require('./../../assets/img/cd.png')} style={styles.search_card}>
                    <Text style={styles.search_cardText}>Création & designe</Text>
                </ImageBackground>
                <ImageBackground source={require('./../../assets/img/annee_prep.png')} style={styles.search_card}>
                    <Text style={styles.search_cardText}>Année préparatoire</Text>
                </ImageBackground>
            </View>
        </View>
    );
}


  
const styles = StyleSheet.create({
    search_h1: {
      fontFamily:'Roboto',
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
    search_card: {
        width:146,
        height:90,
        margin:10,
        borderRadius:10,
        flex: 0,
        justifyContent:'center',
        alignItems:"center",
      },
    search_cardText:{
        fontSize:13,
        fontWeight:'bold',
        color: 'white',
        textAlign:'center',

    }
  });