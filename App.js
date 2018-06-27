// import stuff
import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';


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

  // Funcion que muestra el arreglo de todos. Mapeando el arreglo y retornado un componente con el texto
  renderTodos = () => {
    return this.state.todo.map( (text, index) => {
      return (
        <Text key={index}> {text} </Text>
      )
    });

  }

  render(){
    return(
      <View style={ styles.viewStyle }>
        <Text> Hello World! this app is great </Text>
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
        {this.renderTodos()}
      </View>

      
    )
  }
}


const styles = {
  viewStyle: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    
  },
  inputStyles: {
    height: 40,
    borderColor: "green",
    borderWidth: 1,
    margin: 10
  },
  addButton: {
    marginBottom: 20,
    marginTop: 10,
    margin: 20
  }

}
// Export some stuff
export default App;
