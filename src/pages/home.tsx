import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<Array<string>>([]);

  function handleAddNewSkill() {
    setMySkills(prevState => [...prevState, newSkill]);
  }



  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to React Native</Text>
      <TextInput
        style={styles.input}
        placeholder="Skylls"
        placeholderTextColor="#ccc"
        onChangeText={setNewSkill}
      />

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.61}
        onPress={handleAddNewSkill}
      >
        <Text style={styles.buttonText}>
          Add
        </Text>
      </TouchableOpacity>

      <Text style={[styles.title, { marginVertical: 50 }]}>
        My Skylls
      </Text>

      {
        mySkills.map(skill => (
          <TouchableOpacity
            key={skill}
            style={[styles.buttonSkill, { marginVertical: 10 }]}
          >
            <Text style={[styles.skill]}>
              {newSkill}
            </Text>
          </TouchableOpacity>
        ))
      }

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
    alignItems: 'center'

  }

});
