import { View, Text, FlatList, TouchableOpacity, StyleSheet, ListRenderItemInfo } from 'react-native'
import React from 'react'


interface Task {
    id: string;
    title: string;
  }

  interface TaskListProps {
      tasks: Task[]
  }


export default function TaskList({tasks}: TaskListProps) {

  return (

         <FlatList
        data={tasks}
        keyExtractor={(item: Task) => item.id}
        renderItem={({item}: ListRenderItemInfo<Task>) => (
          <TouchableOpacity style={styles.buttonTask}>
            <Text style={styles.titleTask}>
              {item.title}
          </Text>
        </TouchableOpacity>
        )}
        />

  )
}


const styles = StyleSheet.create({

    buttonTask: {
      backgroundColor: '#29292e',
      padding: 10,
      marginTop: 10,
      borderRadius: 50,
    },
    titleTask: {
      color: '#f1f1f1',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center'
    }
  }
  )
