import React from 'react';
import {ImageBackground, Image, StyleSheet, Text, TextInput, View, SafeAreaView, ScrollView, StatusBar} from 'react-native';



export default function ProfileScreen({ navigation }) {
    return (
      <SafeAreaView style={styles.profil_container}>
        

        <ImageBackground style={styles.profil_imgcouverture} source={require('./../../assets/imgprofil/pulv_bg.png')}>
        </ImageBackground>
    
        <View style={styles.profil_content}>
          <Text style={styles.profil_titreP} >Romain FAUSTINI</Text>
          <Text style={styles.profil_textM} >IIM, A1</Text>
          <Text style={styles.profil_textP} >Romaaaain 🇮🇹 Etudiant en première année</Text>


          {/*  On créer le block prochain évènement */}
          <View style={styles.profil_block}>
            <Text style={styles.profil_textP} >Prochain(s) évènement(s) :</Text>
    
            <View style={styles.profil_rondgroupe}>
              <View style={styles.profil_rond}><Image style={styles.profil_imgautres} source={require('./../../assets/imgprofil/1.png')}></Image></View>
              <View style={styles.profil_rond}><Image style={styles.profil_imgautres} source={require('./../../assets/imgprofil/2.png')}></Image></View>
              <View style={styles.profil_rond}><Image style={styles.profil_imgautres} source={require('./../../assets/imgprofil/3.png')}></Image></View>
              <View style={styles.profil_rondPlus}>
                <Image style={styles.profil_imgautres} source={require('./../../assets/imgprofil/plus.png')}></Image>
              </View>
            </View>
          </View>
    
          {/*  On créer le block Evenements passé */}
          <View style={styles.profil_block}>
            <Text style={styles.profil_textP} >Evènement(s) passé(s) : </Text>
    
            <View style={styles.profil_rondgroupe}>
              <View style={styles.profil_rond}><Image style={styles.profil_imgautres} source={require('./../../assets/imgprofil/1.png')}></Image></View>
              <View style={styles.profil_rond}><Image style={styles.profil_imgautres} source={require('./../../assets/imgprofil/2.png')}></Image></View>
              <View style={styles.profil_rond}><Image style={styles.profil_imgautres} source={require('./../../assets/imgprofil/3.png')}></Image></View>
              <View style={styles.profil_rondPlus}>
                <Image style={styles.profil_imgautres} source={require('./../../assets/imgprofil/plus.png')}></Image>
              </View>
            </View>
    
          </View>
    
          {/*  On créer le block Badges */}
          <View style={styles.profil_block}>
            <Text style={styles.profil_textP} >Badge(s) :</Text>
    
            <View style={styles.profil_rondgroupe}>
              <View style={styles.profil_rond}><Image style={styles.profil_imgautres} source={require('./../../assets/imgprofil/1.png')}></Image></View>
              <View style={styles.profil_rond}><Image style={styles.profil_imgautres} source={require('./../../assets/imgprofil/2.png')}></Image></View>
              <View style={styles.profil_rond}><Image style={styles.profil_imgautres} source={require('./../../assets/imgprofil/3.png')}></Image></View>

              <View style={styles.profil_rondPlus}>
                <Image style={styles.profil_imgautres} source={require('./../../assets/imgprofil/plus.png')}></Image>
              </View>
            </View>
    
          </View>
    
        </View>
    
        <Image />

        <View style={styles.profil_profil}>
          <Image style={styles.profil_imgprofil} source={require('./../../assets/imgprofil/profilpic.jpg')}></Image>
        </View>
        <View>
          <Image style={styles.profil_imgreglages} source={require('./../../assets/imgprofil/parametres.png')}></Image>
        </View>
        <View>
          <Image style={styles.profil_imgloupe} source={require('./../../assets/imgprofil/loupe.png')}></Image>
        </View>
    
      </SafeAreaView>
    );
}





const styles = StyleSheet.create({
  profil_container: {
    flex: 1,
  },
  profil_imgloupe: {
    position: 'absolute',
    borderColor:"white",
    top: 45,
    left: 340,
    width: '11%',
    borderRadius: 1000,
    height: 45,
  },
  profil_imgreglages: {
    position: 'absolute',
    borderColor:"white",
    top: 50,
    left: 20,
    width: '9%',
    borderRadius:1000,
    height: 38,
  },
  profil_imgprofil: {
    borderColor:"white",
    top: 0,
    left: 0,
    width: '100%',
    borderRadius:1000,
    height: 100,
  },
  profil_imgautres: {
    borderColor:"white",
    top: -2.5,
    left: 0,
    width: '100%',
    borderRadius:1000,
    height: 55,
  },
  profil_imgcouverture: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 250,
    backgroundColor: 'red'
  },
  profil_content: {
    position: 'absolute',
    width: '100%',
    height: '80%',
    bottom:0,
    backgroundColor: 'lightgrey',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingTop: '15%',
    flex:0,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  profil_profil: {
    ...StyleSheet.absoluteFill,
    position: 'absolute',
    top: '15%',
    left: '40%',
    width: '20%',
    height: '11%',
    borderRadius:1000,
    backgroundColor: 'grey',
    
  },
  profil_textG: {
    color: 'black',
    textAlign: 'center',
    fontSize: 18,
    marginBottom: '2%',
    maxWidth: '70%',
  },
  profil_textM: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
    marginBottom: '2%',
    maxWidth: '70%',
  },
  profil_textP: {
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: '2%',
    maxWidth: '70%',
  },

  profil_titreP: {
    color: 'black',
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: '2%',
    maxWidth: '70%',
  },
  
  profil_block: {
    color: 'black',
    width: '70%',
    backgroundColor: 'white',
    height: '20%',
    marginTop:'10%',
    // border: '3px solid black',
    borderRadius: 25,
    paddingTop: '2%',
    paddingLeft: '5%',
  },
  profil_rondgroupe: {
    minWidth: '100%',
    padding:0,
    height:100,
    textAlign: 'center',
    flexDirection:'row',
    marginTop:'5%',
  },

  profil_rond: {
    height:'50%',
    borderRadius: 1000,
    backgroundColor: 'white',
    flex: 0.25,
    marginRight:'5%',
  },
  profil_rondPlus: {
    height:'50%',
    borderRadius: 1000,
    backgroundColor: 'white',
    flex: 0.25,
    marginRight:'5%',
  },


});

