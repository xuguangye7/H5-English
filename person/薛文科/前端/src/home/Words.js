import React, { Component } from 'react'
import { Text, View } from 'react-native'
export default class Words extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        fetch('http://129.211.62.80:8080/word',{
            headers:{
                'Accept':'application/json;charset=utf-8'
            }
        })
       .then(res=>res.json())
       .then(res=>{
           this.setState({
               data:res.content
           })
           
       }) 
    }
    render() {
        return (
            <View>
                <Text>我的单词</Text>
                {
                    this.state.data.map((item)=>(
                        <Text style={{marginTop:15,marginLeft:15}} >{item.word}</Text>
                    ))
                }
            </View>
        )
    }
}
