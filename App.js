import React , {useState} from 'react';
import { TouchableOpacity , TextInput, KeyboardAvoidingView, StyleSheet, Text, View, Keyboard } from 'react-native';
import Task from './components/task';

export default function App() {
  // how to create functional component in react/react native
  // use useState() if is gg to constantly change
  const [task, setTask] = useState() ;
  // It comes together [<name of the state> , <function to set this state>set_] = useState()
  const [taskItems, setTaskItems] = useState([])
  // going to be an empty array


  // Function 1 (add)
  const handleAddTask = () => {
    // put out everything from the task, then add task 
    // when u click plus, the keyboard will go back down
    Keyboard.dismiss()
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  // Function 2 (delete)
  const completeTask = (index)=>{
    let itemsCopy = [...taskItems]; //save it in itemscopy
    itemsCopy.splice(index,1); //remove 1 item from the array
    setTaskItems(itemsCopy); //not include the one that is deleted 
  }

  return (
    <View style={styles.container}>
      {/* Today's Task */}
      <View style = {styles.tasksWrapper}>
        <Text style = {styles.sectionTitle}>
          Today's Task
        </Text>

          <View style = {styles.items}>
            {/* This is where the tasks will go */}
            {
              // index can get from the map function
              taskItems.map((item, index) => {
                return (
                <TouchableOpacity key = {index} onPress={() => completeTask(index)}>
                  <Task text = {item} />
                </TouchableOpacity>
                )
              })
            }
          </View>
      </View>

      {/* Write a task */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? "padding" : "height"}
        style = {styles.writeTaskWrapper}>
        <TextInput style = {styles.input} placeholder ={"Write a task"} value={task} onChangeText={text => setTask(text)}/>

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style = {styles.addWrapper}>
            <Text style = {styles.addText}>+</Text>
          </View>
        </TouchableOpacity>

      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7BCCB5',
  },
  tasksWrapper :{
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle:{
    fontSize: 24,
    fontWeight: 'bold'
  },
  items:{
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    width: 250,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    marginLeft: 20,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#ffff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {

  },
});
