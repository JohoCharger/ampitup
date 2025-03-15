import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Button, StyleSheet, Platform } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import { Html5QrcodeScanner } from "html5-qrcode";

export default function QRScanner() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [qrResult, setQrResult] = useState("");
    const navigation = useNavigation();

    useEffect(() => {
        if (Platform.OS !== "web") {
            // Request camera permission on mobile
            (async () => {
                const { status } = await Camera.requestCameraPermissionsAsync();
                setHasPermission(status === 'granted');
            })();
        } else {
            // Initialize the web scanner
            const scanner = new Html5QrcodeScanner("qr-reader", { fps: 5, qrbox: 250 });
            scanner.render(
                (data) => {
                    setQrResult(data);
                    navigation.navigate('charging', { qrData: data });

                    scanner.clear(); // Stop scanner after successful scan
                },
                (error) => console.log(error)
            );
        }
    }, []);

    // Handle QR code scan on mobile
    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        setQrResult(data);
        // Navigate to the charging page with the scanned data
        console.log("vittu")
        navigation.navigate('charging', { qrData: data });
    };

    if (Platform.OS !== "web" && hasPermission === null) {
        return <Text>Requesting camera permission...</Text>;
    }
    if (Platform.OS !== "web" && hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            {Platform.OS === "web" ? (
                <>
                    <View id="qr-reader" style={styles.webScanner} />
                    <Text>{qrResult}</Text>
                </>
            ) : (
                <>
                    <Camera type={CameraType.back} onBarCodeScanned={scanned ? undefined : handleBarCodeScanned} style={StyleSheet.absoluteFillObject} />
                    {scanned && <Button title="Scan Again" onPress={() => setScanned(false)} />}
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    webScanner: {
        width: 300,
        height: 300,
    },
});