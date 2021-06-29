import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import { Button } from '../components/Button'
import { SkillCard } from '../components/SkillCard'

interface SkillData {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [greeting, setGreeting] = useState('');

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }

    setMySkills(prevState => [...prevState, data]);
  }

  function handleRemoveSkill(id: string) {
    setMySkills(prevState => prevState.filter(
      skill => skill.id !== id
    ))

  }

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGreeting('Good Morning')
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Good afternoon')
    } else {
      setGreeting('Good night')
    }
  }, [])
  return (
    <View style={styles.container}>
      <StatusBar />
      <Text style={styles.title}>Welcome to React Native</Text>

      <Text style={styles.greeting}>
        {greeting}
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Skylls"
        placeholderTextColor="#ccc"
        onChangeText={setNewSkill} //observing each caracter
      />

      <Button onPress={handleAddNewSkill} title={'add'} />

      <Text style={[styles.title, { marginVertical: 50 }]}>
        My Skylls
      </Text>

      <FlatList
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <SkillCard
            skill={item.name}
            onPress={() => handleRemoveSkill(item.id)}
          />
        )}
      />

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

  greeting: {
    color: "#fff",
  }
});