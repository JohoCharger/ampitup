import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChargingScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.header}>Hello again</Text>
                <Text style={styles.subHeader}>Joonas!</Text>
            </View>
            <View style={styles.firstContainer}>
                <View style={styles.progressBarContainer}>
                    <View style={styles.progressTextContainer}>
                        <Text style={styles.progressText}>Charging at 
                        <Text style={styles.progressTextPercent}> 53%</Text></Text>
                    </View>
                    <View style={styles.progressBar}>
                        <View style={styles.progress} />
                    </View>
                </View>
                <View style={styles.readyContainer}>
                    <Text style={styles.readyText}>Ready at</Text>
                    <Text style={styles.readyTextTime}>15.34</Text>
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    readyContainer: {
        alignItems: 'center',
        flexDirection: 'column',
        flex: 1,
    },
    firstContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    },
    readyText: {
        fontSize: 16,
    },
    readyTextTime: {
        fontSize: 36,
        fontWeight: 'bold',
    },
    textContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    progressBarContainer: {
        width: '50%',
        alignItems: 'center',
        borderRightWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    progressTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    progressText: {
        fontSize: 16,
        marginBottom: 10,
    },
    progressTextPercent: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    progressBar: {
        width: '100%',
        height: 20,
        backgroundColor: '#e0e0e0',
        borderRadius: 10,
        overflow: 'hidden',
    },
    progress: {
        width: '53%',
        height: '100%',
        backgroundColor: '#76c7c0',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 0,
    },
    subHeader: {
        fontSize: 48,
        marginTop: 0,
    },
});

export default ChargingScreen;