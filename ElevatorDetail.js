import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, ScrollView, Pressable, Alert} from 'react-native';
import Footer from './Footer';
import axios from 'axios';

export default function ElevatorDetail({route, navigation}) {
    const [dataLoading, finishLoading] = useState(true);
    const [allElevatorData, setAllElevatorData] = useState([]);
    const {id} = route.params;
    const selectedElevator = allElevatorData.find(elevator => elevator.id === id);
    const [buttonColor, newButtonColor] = useState('#b22222')
    const [buttonText, newButtonText] = useState('Inactive')
    const [buttonText2, newButtonText2] = useState('Make Active')
    // const [buttonLink, newButtonLink] = useState('')

    useEffect(() => {
        fetch('https://rocketapis.azurewebsites.net/api/elevators')
        .then((response) => response.json())
        .then((json) => setAllElevatorData(json))
        .catch((error) => console.error(error))
        .finally(() => finishLoading(false));
    }, []);


    // const API_URL = `https://rocketapis.azurewebsites.net/api/elevators/${id.id}/active`;

    // async function changeStatus() {
    //     // PUT request using axios with async/await
    //     const status = { title: 'React Put Request Example' };
    //     const response = await axios.put(API_URL);
    //     this.setState({ updatedAt: response.data.updatedAt });
    // }

//     function changeStatus() {
//         const [status, setStatus] = useState(null);
        
//         useEffect(() => {
//         // const article = { title: 'React Hooks PUT Request Example' };
//         axios.put(API_URL)
//             .then(response => setStatus(response.data.status));
//         }, []);
//     }

function changeStatus() {
    const data = { status: 'Active' };

    axios.put(`https://rocketapis.azurewebsites.net/api/elevators/${id}/active`, data)
    .then(response => {
        console.log("Status: ", response.status);
        console.log("Data: ", response.data);
    }).catch(error => {
        console.error('Something went wrong!', error);
    });
}

//   function changeStatus() {

//     const [status, setStatus] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [isError, setIsError] = useState(false);
//     const [data, setData] = useState(null);
  
//     const handleSubmit = () => {
//       setLoading(true);
//       setIsError(false);
//       const data = {
//         status: status
//       }
//       axios.put(`https://rocketapis.azurewebsites.net/api/elevators/${id.id}/active`, data).then(res => {
//         setData(res.data.status);
//         console.log(setData)
//         setStatus('Active');
//         setLoading(false);
//       }).catch(err => {
//         setLoading(false);
//         setIsError(true);
//       });
//     }
// }

    async function makeActive() {
        try {
            const response = await fetch(`https://rocketapis.azurewebsites.net/api/elevators/${id}`)
                if (response.status == 200) {
                    changeStatus()
                    Alert.alert('Status is now Active')
                    newButtonColor('#009900')
                    newButtonText('Active')
                    newButtonText2('Now Active')
                    // newButtonLink(navigation.goBack())
                }
        } catch(err) {
            console.error(err); 
        }
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.buttonText}>Go back</Text>
            </TouchableOpacity>
            {dataLoading ? <ActivityIndicator/> : (
                <ScrollView>
                    <Text style={styles.title}>Elevator {selectedElevator.id}</Text>
                    {/* <Text style={styles.title}>{selectedElevator.status}</Text> */}
                    <TouchableOpacity
                    // style={styles.buttonStatus}
                    style={[styles.buttonStatus, {backgroundColor: buttonColor}]}
                    textBreakStrategy='simple'
                    >
                    <Text style={styles.buttonStatusText}>{buttonText}</Text>
                    </TouchableOpacity>

                    <View style={styles.space} />

                    <TouchableOpacity
                    style={styles.buttonStatusMakeActive}
                    textBreakStrategy='simple'
                    onPress={makeActive}
                    // onClick={buttonLink}
                    >
                    <Text style={styles.buttonStatusText}>{buttonText2}</Text>
                    {/* <Pressable
                    style={styles.buttonStatusTextMakeActive}
                    onPress={makeActive}
                    >
                        {({ pressed }) => (
                        <Text style={styles.text}>
                            {pressed ? 'Now Active!' : 'Make Active'}
                        </Text>
                        )}
                    </Pressable> */}
                    </TouchableOpacity>
                </ScrollView>
            )}
            <Footer />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    button: {
        padding: 20,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        padding: 20
    },
    buttonStatus: {
        alignItems: "center",
        backgroundColor: "#b22222",
        padding: 10,
        borderRadius: 4
    },
    buttonStatusText: {
        color: 'white',
    },
    buttonStatusMakeActive: {
        alignItems: "center",
        backgroundColor: "black",
        padding: 10,
        borderRadius: 4
    },
    space: {
        width: 20,
        height: 20,
        color: 'white',
        justifyContent:'space-between',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
      }
});