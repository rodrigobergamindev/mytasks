import { Platform, View, Text, StyleSheet, SafeAreaView, TextInput, Touchable, TouchableOpacity} from 'react-native'
import React, {useContext, useState} from 'react'
import TaskList from '../TaskList';
import { TaskContext } from '../../contexts/TaskContext';


export const Home = () => {

  const [newTask, setNewTask] = useState('')
  const {addTask} = useContext(TaskContext)


  const handleAddNewTask = () => {
    const data = {
      id: new Date().getTime().toString(),
      title: newTask ? newTask : 'Empty'
    }

    addTask(data)

  }

  return (
    <SafeAreaView style={styles.safeArea}>
    <View style={styles.container}>
        <Text style={styles.title}>Home</Text>
        <TextInput
        onChangeText={setNewTask}
        placeholderTextColor='#555'
        placeholder="Nova tarefa..."
        style={styles.input}/>

        <TouchableOpacity onPress={handleAddNewTask} activeOpacity={0.7} style={styles.button}>
            <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>

        <Text style={styles.titleTasks}>Minhas tarefas</Text>


        <TaskList/>


    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: '#121214',
    },
    container: {
      flex: 1,
      backgroundColor: '#121214',
      paddingHorizontal: 30,
      paddingVertical: 50
    },
    title: {
      color: '#f1f1f1',
      fontSize: 24,
      fontWeight: 'bold'
    },
    input: {
      backgroundColor: '#29292e',
      color: '#f1f1f1',
      fontSize: 18,
      padding: Platform.OS === 'ios' ? 15 : 10,
      marginTop: 30,
      borderRadius: 7
    },
    button: {
      backgroundColor: '#eba417',
      padding: 15,
      borderRadius: 7,
      alignItems: 'center',
      marginTop: 20
    },
    buttonText: {
      color: '#121214',
      fontSize: 18,
      fontWeight: 'bold'
    },
    titleTasks: {
      color: '#f1f1f1',
      fontSize: 24,
      fontWeight: 'bold',
      marginVertical: 50
    },
  }
  )
