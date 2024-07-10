import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../constants/colors';

const Homepage = () => {
  const [title, setTitle] = useState('');
  const [episodes, setEpisodes] = useState('');
  const [data, setData] = useState([]);

  const addItem = () => {
    if (title && episodes !== '') {
      setData([...data, { title, episodes: parseInt(episodes, 10) }]);
      setTitle('');
      setEpisodes('');
    }
  };

  const deleteItem = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  const editEpisodes = (index, value) => {
    const newData = [...data];
    if (value === '') {
      newData[index].episodes = '';
    } else {
      newData[index].episodes = parseInt(value, 10);
    }
    setData(newData);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ flex: 1, paddingHorizontal: 20 }}>
        <Text style={styles.header}>My Watchlist</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.titleInput}
            placeholder="Title"
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            style={styles.episodesInput}
            placeholder="Episodes"
            value={episodes}
            onChangeText={setEpisodes}
            keyboardType="numeric"
          />
          <TouchableOpacity style={styles.addButton} onPress={addItem}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={{ flex: 1 }}>
          {data.map((item, index) => (
            <View key={index} style={styles.itemContainer}>
              <Text>Title: {item.title}</Text>
              <View style={styles.episodesContainer}>
                <Text style={styles.episodesLabelText}>Episodes:</Text>
                <TextInput
                  style={styles.episodesText}
                  value={item.episodes.toString()}
                  onChangeText={(value) => editEpisodes(index, value)}
                  keyboardType="numeric"
                />
              </View>
              <TouchableOpacity onPress={() => deleteItem(index)} style={styles.deleteButton}>
                <Text style={styles.deleteButtonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

// CSS
const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 30,
    textAlign: 'center'
  },
  inputContainer: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: COLORS.black,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    height: 40,
    fontSize: 15,
  },
  episodesInput: {
    width: 100,
    borderWidth: 1,
    borderColor: COLORS.black,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    height: 40,
    fontSize: 15,
  },
  addButton: {
    backgroundColor: COLORS.lightblue,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 15,
    borderWidth: 1,
  },
  buttonText: {
    color: COLORS.black,
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: COLORS.black,
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 30,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  episodesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  episodesLabelText: {
    marginRight: 5,
  },
  episodesText: {
    borderWidth: 1,
    borderColor: COLORS.black,
    borderRadius: 5,
    paddingHorizontal: 10,
    textAlign: 'center',
  },
  deleteButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: COLORS.cherryred,
  },
  deleteButtonText: {
    color: COLORS.cherryred,
  },
});

export default Homepage;