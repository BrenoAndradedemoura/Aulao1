import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Ipage } from '../App'

const items = [
  { id: '0', text: 'View' },
  { id: '1', text: 'Text' },
  { id: '2', text: 'Image' },
  { id: '3', text: 'ScrollView' },
  { id: '4', text: 'ListView' },
]

export default function Page2({ setPageI }: Ipage) {
  return (
    <>
     <FlatList
       style={styles.container}
       data={items}
       renderItem={({ item }) => <Text style={styles.row}>{item.text}</Text>}
       keyExtractor={(item) => item.id}
    />
    <TouchableOpacity style={styles.button} onPress={() => {
        setPageI(1)
      }}> 
        <text>Pag 1</text>
        </TouchableOpacity>
     </> 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'skyblue',
  },
  button: {
    backgroundColor: 'red',
    borderRadius: 5,
    width: 100,
    alignItems: 'center',
    padding: 5,
    margin: 5,
  }
})