import { View, Text, FlatList, TouchableOpacity, StyleSheet, ListRenderItemInfo } from 'react-native'
import React, { useContext } from 'react'
import { ITask, TaskContext } from '../../contexts/TaskContext'



export default function TaskList() {

  const {tasks} = useContext(TaskContext)

  return (

         <FlatList
        data={tasks as unknown as ITask[]}
        keyExtractor={(item: ITask) => item.id}
        renderItem={({item}: ListRenderItemInfo<ITask>) => (
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
