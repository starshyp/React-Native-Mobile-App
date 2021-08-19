import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, SafeAreaView, TextInput, Alert, TouchableOpacity} from 'react-native';
// import login from './assets/login.png';
// import Button from 'react-bootstrap/Button';

export default function Startup({navigation}) {
    // const [dataLoading, finishLoading] = useState(true)
    const [inputData, setData] = useState('');
    const [name, setName] = useState('');
    // useEffect(() => {
    // fetch(`https://rocketapis.azurewebsites.net/api/employee/${data}`)
    //     .then((response) => response.json())
    //     .then((json) => setData(json))
    //     .catch((error) => console.error(error))
    //     .finally(() => finishLoading(false));
    // }, []);

//     const API_URL = 'https://jsonplaceholder.typicode.com/users';

// async function fetchUsers() {
//  try{
//    const response = await fetch(API_URL)
//    const users = await response.json();
//    return users;
//   }catch(err){
//     console.error(err); 
//   }
// }

// fetchUsers().then(users => {
//   users; // fetched users
// });

const API_URL = `https://rocketapis.azurewebsites.net/api/employee/${inputData}`;

async function rocketEmployee() {
    try {
        const response = await fetch(API_URL)
        // const data = await JSON.parse(response);
        // for (let i = 0; i < data.email.length; i += 1) {
            if (response.status == 200) {
                navigation.navigate('RocketElevators')
            } else {
                Alert.alert('Authorized Personnel Only')
            }
        // }
    } catch(err) {
        console.error(err); 
    }
}

    // const rocketEmployee = async function() {    
    //     await fetch (`https://rocketapis.azurewebsites.net/api/employee/${data}`)
    //         .then((response) => {
    //         let employeeParsed = JSON.parse(response);
    //         if (employeeParsed['email'] === data) {
    //             navigation.navigate('RocketElevators')
    //         } else {
    //             Alert.alert('Authorized Personnel Only')
    //         }
    //     })
    //         .catch((err) => {
    //             console.log(`ERROR: ${err.message}`);
    //         });
    // }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={{ marginVertical: 16 }}>
            {name ? `Hi ${name}!` : 'What is your name?'}
            </Text>
            <TextInput
            style={styles.input}
            // onChangeText={(val) => textInputChange(val)}
            onChangeText={text => setName(text)}
            placeholder="Name"
            autoCapitalize="none"
            />
            <TextInput
            style={styles.input}
            // onChangeText={(val) => textInputChange(val)}
            onChangeText={inputData => setData(inputData)}
            value={inputData}
            placeholder="Email"
            autoCapitalize="none"
            />
            <TouchableOpacity
            style={styles.button} 
            title="Connect"
            onPress={rocketEmployee}
            textBreakStrategy='simple'
            >
            <Text style={styles.buttonText}>Connect</Text>
            </TouchableOpacity>
        </SafeAreaView>
        );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 150
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 200
    },
    button: {
        alignItems: "center",
        backgroundColor: "#0053a0",
        padding: 10,
        borderRadius: 4
    },
    buttonText: {
        color: 'white',
    },
});