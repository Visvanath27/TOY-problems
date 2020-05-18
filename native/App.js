import React from 'react';
import {
  View,
  TextInput,
  Text,
  Button,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';

class TaskComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }
  render() {
    const tasks = this.props.tasks.map((task, i) => {
      return (
        <View>
          <View>
            <Text
              style={{
                backgroundColor: task.complete ? 'green' : '',
                textDecorationStyle: "solid",
                padding: 10,
                textAlign: 'left',
                color : "black"
              }}>
              {task.name}
            </Text>
            <Text style={{ padding: 10, textAlign:"left" ,color:"Black" }}>
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              padding: 10,
              paddingLeft: 70,
            }}>
            <TouchableOpacity
              style={styles.buttonstyle}
              onPress={() => this.taskDone(i)}>
              <Text>Done</Text>
            </TouchableOpacity>
            <Text> </Text>
            <TouchableOpacity
              style={styles.buttonstyle}
              onPress={() => this.deleteTask(i)}>
              <Text>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    });
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <TextInput
            style={{ borderColor: 'gray', borderWidth: 1,color:"Black" }}
            onChangeText={this.handleChange}
            placeholder="Enter a task"
            value={this.state.value}
          />
          <Button title="Add Task" onPress={this.handleSubmit} />
          {tasks}
        </ScrollView>
      </View>
    );
  }

  deleteTask = i => {
    this.props.deleteTask(i);
  };

  taskDone = i => {
    this.props.taskDone(i);
  };

  handleChange = text => {
    this.setState({
      value: text,
    });
  };

  handleSubmit = () => {
    this.props.addTask(this.state.value, false);
    this.setState({
      value: '',
    });
  };
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      complete: false,
    };
  }
  render() {
    return (
      <View style={{ marginTop: Constants.statusBarHeight, flex: 1, backgroundColor:"beige" }}>
        <Text style={{ fontSize: 30, textAlign: 'center', color: 'navyblue', fontWeight :"bold", paddingTop : 20 }}>
          ToDo List
        </Text>
        <TaskComponent
          tasks={this.state.tasks}
          addTask={this.addTask}
          deleteTask={this.deleteTask}
          taskDone={this.taskDone}
        />
      </View>
    );
  }
  addTask = (name) => {
    this.setState(state => ({
      tasks: [...state.tasks, { name}],
    }));
  };

  deleteTask = index => {
    this.setState(state => {
      const tasks = [...state.tasks];
      tasks.splice(index, 1);
      return { tasks };
    });
  };

  taskDone = index => {
    this.setState(state => {
      const tasks = [...state.tasks];
      tasks[index].complete = !tasks[index].complete;
      return { tasks };
    });
  };
}
const styles = StyleSheet.create({
  buttonstyle: {
    backgroundColor: 'grey',
    width: 70,
    height: 30,
    alignItems: 'Flex-start',
    padding: 1,
  },
});