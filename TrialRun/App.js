import React from 'react';
import { StyleSheet, Text, View,Image,TextInput,Button,Alert } from 'react-native';

class Greetings extends React.Component{
  render(){
    return(
      <Text>{this.props.name}</Text>
    );
  }
}
class Blink extends React.Component{
  constructor(props)
  {
    super(props);
    this.state={showText:true}
    setInterval(()=>{
      this.setState(currentstate=>{
        return {showText:!currentstate.showText}
      });
    },1000);
  }

  render(){
    let display =this.state.showText?this.props.text:"";
    return(
    <Text>{display} </Text>);
  };
}


export default class App extends React.Component {


  _onPressButton(){
    Alert.alert("you tapped a button")
  }
  
  render() {
    let pic ={
      uri:"https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"
    }
    return(
      <View style={buttonTutorials.container}>
          <View style={buttonTutorials.buttonContainer}>
            <Button 
            title="First Red Button" 
            onPress={this._onPressButton}
            />
          </View>
          <View style={buttonTutorials.buttonContainer} title="First Blue Button">
            <Button 
            title="First Blue Button" 
            onPress={this._onPressButton}/>
          </View>
          <View style={buttonTutorials.alternativeLayout} title="First green Button">
            <Button 
            title="First Green Button" 
            onPress={this._onPressButton}/>
          </View>
      </View>
    );
  }
}
const styles= StyleSheet.create(
{
  bigBlue:{
    color:'blue',
    fontWeight:'bold',
   fontSize:30, 
  },
  red:{
    color:'red'
  }
}
)

const buttonTutorials= StyleSheet.create(
{
  container:{
    flex:1,
    justifyContent: 'center'
  },
  buttonContainer:{
    margin:20
  },
  alternativeLayout:{
    margin:20,
    flexDirection:'row'
  }
}


)