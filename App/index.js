// Filename: index.js
// Combined code from all files

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button } from 'react-native';

// BasicMath Component
const getRandomNumber = () => Math.floor(Math.random() * 10) + 1;

const BasicMath = () => {
    const [num1, setNum1] = useState(getRandomNumber());
    const [num2, setNum2] = useState(getRandomNumber());
    const [result, setResult] = useState(null);

    const handleAddition = () => {
        setResult(num1 + num2);
    };

    const handleSubtraction = () => {
        setResult(num1 - num2);
    };

    const handleMultiplication = () => {
        setResult(num1 * num2);
    };

    return (
        <View style={styles.gameContainer}>
            <Text style={styles.mathPrompt}>{`${num1} + ${num2} = ?`}</Text>
            <Button title="Add" color="#8E44AD" onPress={handleAddition} />
            <Text style={styles.mathPrompt}>{`${num1} - ${num2} = ?`}</Text>
            <Button title="Subtract" color="#2980B9" onPress={handleSubtraction} />
            <Text style={styles.mathPrompt}>{`${num1} * ${num2} = ?`}</Text>
            <Button title="Multiply" color="#27AE60" onPress={handleMultiplication} />
            {result !== null && <Text style={styles.result}>Result: {result}</Text>}
        </View>
    );
};

// App Component
export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Playful Math for Kids</Text>
            <BasicMath />
        </SafeAreaView>
    );
}

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        alignItems: 'center',
        backgroundColor: '#FFEC99',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FF6F61',
        marginBottom: 20,
    },
    gameContainer: {
        backgroundColor: '#FFFFFF',
        padding: 20,
        borderRadius: 10,
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        marginBottom: 20,
    },
    mathPrompt: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#34495E',
        marginBottom: 10,
    },
    result: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#E74C3C',
        marginTop: 20,
    },
});