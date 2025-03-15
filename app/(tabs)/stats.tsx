import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Stats = () => {
    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.header}>Your stats this month</Text>
                <Text style={styles.congratulationBanner}>You have been on time this month Joonas!</Text>
                <View style={styles.statsContainer}>
                    <View style={styles.statItem}>
                        <Text style={styles.statLabel}>Accumulated bonus: </Text>
                        <Text style={styles.statValue}>35mins</Text>
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.statLabel}>Idle minutes: </Text>
                        <Text style={styles.statValue}>56</Text>
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.statLabel}>EV in charge: </Text>
                        <Text style={styles.statValue}>27hrs</Text>
                    </View>
                </View>
                <View style={styles.topContainer}>
                    <Text style={styles.header}>Top 3 parkers</Text>
                    <View style={styles.statsContainer}>
                        <View style={styles.statItem}>
                            <Text style={styles.statLabel}>1. Teemu Teekkari: </Text>
                            <Text style={styles.statValue}>3mins idle</Text>
                        </View>
                        <View style={styles.statItem}>
                            <Text style={styles.statLabel}>2. John Doe: </Text>
                            <Text style={styles.statValue}>20mins idle</Text>
                        </View>
                        <View style={styles.statItem}>
                            <Text style={styles.statLabel}>3. Matias Mäkilaakso: </Text>
                            <Text style={styles.statValue}>25mins idle</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    topContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',

    },
    congratulationBanner: {
        fontSize: 18,
        fontWeight: 'semibold',
        marginBottom: 16,
    },
    statsContainer: {
        marginTop: 16,
        width: '80%',
        maxHeight: 150,
        flex: 1,
    },
    container: {
        flexGrow: 1,
        padding: 16,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    statItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    statLabel: {
        fontSize: 18,
    },
    statValue: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Stats;