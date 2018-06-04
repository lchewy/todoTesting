import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ListView,
} from "react-native";
import { LoginButton } from "react-native-fbsdk";
import { Actions } from "react-native-router-flux";
import _ from "lodash";
import { Header } from "../common";
import { connect } from "react-redux";
import * as actions from "../../actions";

class Main extends Component {
  constructor(props) {
    super(props);
    const { list } = this.props;
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = { dataSource: ds.cloneWithRows(list) };
  }

  componentDidMount() {
    const { fetchTasks, list } = this.props;
    fetchTasks();
  }

  componentWillReceiveProps(nextProp) {
    this.createDataSource(nextProp);
  }

  createDataSource({ list }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.setState({ dataSource: ds.cloneWithRows(list) });
  }

  renderLogoutBtn() {
    return (
      <TouchableOpacity onPress={() => Actions.logOut()}>
        <Text style={{ color: "#fff" }}>>>>logout</Text>
      </TouchableOpacity>
    );
  }

  renderRow(list) {
    return (
      <View style={styles.taskContainerStyles}>
        <View>
          <Text>{list.value}</Text>
        </View>
        <TouchableOpacity>
          <Text>-</Text>
        </TouchableOpacity>
      </View>
    );
  }

  addTask() {
    const { newTask, addNewTask } = this.props;
    if (newTask !== "") {
    addNewTask(newTask);
    }
    alert("add a task");
  }

  render() {
    console.log(this.props)
    return (
      <View style={{ justifyContent: "space-between", flex: 1 }}>
        <View style={styles.headerContainerStyles}>
          <Header
            heading="You Got This!"
            headerStyle={styles.headerStyles}
            textStyle={styles.textStyles}
          />
          {this.renderLogoutBtn()}
        </View>

        <ListView
          enableEmptySections
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />

        <View style={styles.footer}>
          <TextInput
            style={styles.textInputStyles}
            onChangeText={val => this.props.onTaskChange(val)}
            value={this.props.newTask}
            placeholder="add a task"
            placeholderTextColor="#fff"
          />
          <TouchableOpacity
            onPress={this.addTask.bind(this)}
            style={styles.addBtnStyles}
          >
            <Text style={{ fontSize: 30 }}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = {
  headerContainerStyles: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#008080",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2
  },
  headerStyles: {
    paddingTop: 0,
    marginTop: 0
  },
  textStyles: {
    fontSize: 25,
    color: "#fff"
  },
  taskContainerStyles: {
    flex: 1
    // marginBottom: 100
    // flexDirection:"row"
  },
  textInputStyles: {
    alignSelf: "stretch",
    color: "#fff",
    padding: 20,
    backgroundColor: "#252525",
    borderTopWidth: 1,
    borderWidth: 1,
    borderTopColor: "#ededed",
    flex: 3
  },
  footer: {
    // position: "absolute",
    flexDirection: "row"
    // bottom: 0,
    // left: 0,
    // right: 0,
    // zIndex: 10
  },
  addBtnStyles: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d3d3d3"
  }
};

const mstp = ({ todo: { tasks, newTask } }) => {
  const list = _.map(tasks, (val, uid) => {
    return { ...val, uid };
  });
  return {
    list,
    newTask
  };
};
export default connect(mstp, actions)(Main);

// <ScrollView style={styles.taskContainerStyles}>
//         {tasks}
//         </ScrollView>
// const tasks = _.map(this.props.list, ({ value }) => {
//   return <Tasks value={value} />;
// });