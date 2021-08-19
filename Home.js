import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ActivityIndicator, FlatList, TouchableWithoutFeedback, TouchableOpacity, ScrollView} from 'react-native';
import Footer from './Footer';

export default function Homepage({navigation}) {
    const [dataLoading, finishLoading] = useState(true)
    const [elevatorData, setData] = useState([]);

    useEffect(() => {
        navigation.addListener('state', () => {
            finishLoading(true)
    fetch('https://rocketapis.azurewebsites.net/api/elevators/notactive')
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => finishLoading(false));
        });
    }, []);

    const elevator = ({item}) => {
        return(
            <TouchableWithoutFeedback
                onPress={() =>
                    navigation.navigate('ElevatorDetail', {id: item.id})
                }
            >
                <View style={styles.listings}>
                    <Text style={styles.title}>Elevator {item.id}</Text>
                    <TouchableOpacity
                    style={styles.button}
                    onPress={() =>
                        navigation.navigate('ElevatorDetail', {id: item.id})
                    }
                    textBreakStrategy='simple'
                    >
                    <Text style={styles.buttonText}>Inactive</Text>
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
        );
    };

    return(
        <View style={styles.container}>
            {dataLoading ? <ActivityIndicator/> : (
                <FlatList
                    data={elevatorData}
                    renderItem={elevator}
                    keyExtractor={(item) => item.id}
                />
            )}
            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: 20
    },
    listings: {
        paddingTop: 15,
        paddingBottom: 15,
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    title: {
        paddingBottom: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        // fontFamily: 'OpenSans',
        fontWeight: 'bold',
        fontSize: 16
    },
    button: {
        alignItems: "center",
        backgroundColor: "#b22222",
        padding: 10,
        borderRadius: 4
    },
    buttonText: {
        // marginLeft: 'auto',
        // marginRight: 'auto',
        // fontFamily: 'OpenSans',
        color: 'white',
        // fontSize: 16,
    },
});
