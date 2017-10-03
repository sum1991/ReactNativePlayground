import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

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
  render() {
    let pic ={
      uri:"https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"
    }
    return(<View style={{alignItems: 'center'}}>
      <Blink text="Hello"></Blink>
      <Blink text="Hello123"></Blink>
      <Blink text="Hell234o"></Blink>
      <Blink text="Hello2134"></Blink>
      <Blink text="Hello4"></Blink>
    </View>);
  }
}
