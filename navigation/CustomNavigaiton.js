import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

//Screens
import TicketsScreen from './screens/TicketsScreen';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import ProfileScreen from './screens/ProfileScreen';
import NestedScreen from './screens/NestedScreen';


const Stack = createStackNavigator()



const HomeScreenNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}} name="HomeScreen" component={HomeScreen} />
            <Stack.Screen options={({ route }) => ({ title: route.params.eventname })} name="NestedScreen" component={NestedScreen} />
        </Stack.Navigator>
    )
}

export {HomeScreenNavigator}

///////////////////////////////////////////////////////////////////////////////////////

const ProfileScreenNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}} name="ProfileScreen" component={ProfileScreen} />
            <Stack.Screen name="NestedScreen" component={NestedScreen} />
        </Stack.Navigator>
    )
}

export {ProfileScreenNavigator}


///////////////////////////////////////////////////////////////////////////////////////

const SearchScreenNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}} name="SearchScreen" component={SearchScreen} />
            <Stack.Screen name="NestedScreen" component={NestedScreen} />
        </Stack.Navigator>
    )
}

export {SearchScreenNavigator}


///////////////////////////////////////////////////////////////////////////////////////

const TicketsScreenNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}} name="TicketsScreen" component={TicketsScreen} />
            <Stack.Screen name="NestedScreen" component={NestedScreen} />
        </Stack.Navigator>
    )
}

export {TicketsScreenNavigator}

///////////////////////////////////////////////////////////////////////////////////////

