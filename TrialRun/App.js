import React from 'react';
import { StyleSheet, Text, View,Image,TextInput } from 'react-native';

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
  constructor(props)
  {
    super(props)
    this.state={text:''}
  }
  
  render() {
    let pic ={
      uri:"https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"
    }
    return(<View style={{flex:1,flexDirection:'column',justifyContent: 'space-around',}}>
      <TextInput style={{height:20}} onChangeText={(state)=>this.setState(state)}></TextInput>
      <Text style={{padding: 10, fontSize: 42}}>
      {/*{this.state.text.split(' ').map((word) => word && '🍕').join(' ')}*/}
    </Text>
      <View style={{width:50,height:50,backgroundColor:'red'}}></View>
      <View style={{width:50,height:50,backgroundColor:'blue'}}></View>
      <View style={{width:50,height:50,backgroundColor:'brown'}}></View>
    </View>);
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