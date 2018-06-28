// import stuff
import React from 'react';
import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native';


// Create some stuff
class App extends React.Component{

  state = {
    text: "",
    todo: ['Learn React', 'Learn React Native', 'Build Apps']
  }
  // funcion que agrega nuevos todos al arreglo. usando Spread operator and adding the new todo (text)
  addTodo = () => {
    this.setState({
      todo: [...this.state.todo, this.state.text],
      text: ""
    })
  }

  deleteTodo = (text) => {
    var arr = this.state.todo;
    var toDelete = arr.indexOf(text);
    arr.splice(toDelete, 1);
    this.setState({
      todo: arr
    })

  }

  // Funcion que muestra el arreglo de todos. Mapeando el arreglo y retornado un componente con el texto
  renderTodos = () => {
    return this.state.todo.map( (text, index) => {
      return (
        <TouchableOpacity key={index}>
          <Text 
            style={{color: 'white', fontSize: 18}}
            onPress={() => this.deleteTodo(text)}
          > {text} </Text>
        </TouchableOpacity>
      )
    });

  }

  render(){
    return(
      <View style={styles.contentView}>
        <View style={ styles.viewStyle }>
          <Text style={styles.mainTitle}> Todo App Reminder </Text>
          <TextInput 
            style={ styles.inputStyles }
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
          <Button 
            title="Add Todo"
            color="#841584"
            onPress={this.addTodo}
            style={styles.addButton}
          />
          <View style={{marginTop: 50, alignItems: 'center'}}>
            {this.renderTodos()}
          </View>
        </View>
      </View>

      
    )
  }
}


const styles = {
  contentView: {
    flex: 1,
    marginTop: 30,
    padding: 10,
    backgroundColor: "#03A9F4"

  },
  viewStyle: {
    alignItems: 'center', 
    justifyContent: 'center',
    
  },
  mainTitle: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold"
  },
  inputStyles: {
    height: 40,
    borderColor: "white",
    color: "white",
    borderWidth: 1,
    margin: 10,
    width: 300,
    padding: 5
  },
  addButton: {
    marginBottom: 20,
    marginTop: 10,
    margin: 20
  }

}
// Export some stuff
export default App;
