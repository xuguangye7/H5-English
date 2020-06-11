import React, { Component } from 'react'
import { Text, View, DeviceEventEmitter, ImageBackground } from 'react-native'
import Header from '../utils/Header'

import {myFetch} from '../utils/FetchData'
var sort,number,grade,id;
export default class Grade extends Component {
    constructor(){
        super();
        this.state={
            sort:0,
            data:[]
        }
    }
    componentDidMount(){
        DeviceEventEmitter.addListener("returngrade",(params)=>{
            console.log(params)
            sort=params.count;
            number=params.number
            grade=sort/number*100
            id=params.id
            console.log('sort',sort)
        })
        this.setState({
            sort:grade
        })
        console.log(this.state.sort)
        var grade_url='grade/check'
        myFetch.get(grade_url)
        .then(res=>{
            var arr=[]
            for(var i=0;i<res.content.length;i++){
                if(res.content[i].id>=id-number){
                    arr.push(res.content[i])
                }
            }
            this.setState({
                data:arr
            })
        })
    }
    look=()=>{
        // console.log('this.state.sort',this.state.sort);
    }
    render() {
        return (
            <View>
                <Header name="成绩" />
                <ImageBackground source={require('../../pic/grade.jpg')}  style={{width:"100%", height:"100%"}}>
                <View>
                    <Text style={{fontSize:20,marginTop:90,marginLeft:50}}>您一共复习了2个单词，</Text>
                    <Text style={{fontSize:20,marginTop:30,marginLeft:50}}>您的正确率：{this.state.sort}%</Text>
                    {
                        this.state.data.map((item)=>(
                            <View>
                                <Text style={{fontSize:18,marginTop:20,marginLeft:60}}>{item.name}--------{item.grade}</Text>
                            </View>
                        ))
                    }
                </View>
                </ImageBackground>
            </View>
        )
    }
}