import * as React from 'react';



import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


import {HomeScreenNavigator, ProfileScreenNavigator, SearchScreenNavigator, TicketsScreenNavigator} from './CustomNavigaiton'

// Screen names

const ticketsName = 'TicketsScreen';
const homeName = 'HomeScreen';
const searchName = 'SearchScreen';
const profileName = 'ProfileScreen';


const Tab = createBottomTabNavigator();

export default function MainContainer(){
    return(
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn= route.name;

                    if (rn === 'Tickets') {
                        iconName = focused ? 'albums' : 'albums-outline'
                    } else if (rn === 'Accueil') {
                        iconName = focused ? 'home' : 'home-outline'
                    } else if (rn === 'Recherche') {
                        iconName = focused ? 'search' : 'search-outline'
                    } else if (rn === 'Profil') {
                        iconName = focused ? 'person' : 'person-outline'
                    }

                    return <Ionicons name= {iconName} size={size} color={color} />
                },
            })}>

                <Tab.Screen options={{headerShown: false}} name='Tickets' component={TicketsScreenNavigator}/>
                <Tab.Screen options={{headerShown: false}} name='Accueil' component={HomeScreenNavigator}/>
                <Tab.Screen options={{headerShown: false}} name='Recherche' component={SearchScreenNavigator}/>
                <Tab.Screen options={{headerShown: false}} name='Profil' component={ProfileScreenNavigator}/>
                

            </Tab.Navigator>
        </NavigationContainer>
    );
}