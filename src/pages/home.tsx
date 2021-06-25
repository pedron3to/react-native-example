import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


export function Home() {
  const [input, setInput] = useState('');
  const [mySkills, setMySkills] = useState<never[[]]>([]);

  function handleAddNewSkill() {
    setMySkills(prevState => [...prevState, teste]);
  }



  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to React Native</Text>
      <TextInput
        style={styles.input}
        placeholder="Input"
        placeholderTextColor="#ccc"
        onChangeText={setInput}
      />

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.61}
        onPress={handleAddNewSkill}
      >
        <Text style={styles.buttonText}>
          TouchableOpacity/activeOpacity=0.61
        </Text>
      </TouchableOpacity>

      <Text style={[styles.title, { marginTop: 50 }]}>
        Added additional Styles.
      </Text>

      <TouchableOpacity style={styles.buttonSkill}>
        <Text style={styles.skill}>
          Button
        </Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 70,

  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: "#1F1E25",
    color: "#fff",
    fontSize: 18,
    padding: 15,
    marginTop: 30,
    borderRadius: 7,
  },
  button: {
    backgroundColor: "orange",
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: 'bold'
  },
  skill: {
    color: "#fff",
    fontSize: 18,
    fontWeight: 'bold'
  },
  buttonSkill: {
    backgroundColor: '#1f1f25',
    padding: 20,
    borderRadius: 5,

  }

});
