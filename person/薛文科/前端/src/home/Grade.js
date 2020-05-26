import React, { Component } from 'react'
import { Text, View, DeviceEventEmitter } from 'react-native'
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
        console.log('this.state.sort',this.state.sort);
    }
    render() {
        return (
            <View>
                <Header name="成绩" />
                <View>
                    <Text onPress={this.look}>您的正确率：</Text>
                    <Text>{this.state.sort}%</Text>
                    {
                        this.state.data.map((item)=>(
                            <View>
                                <Text>{item.name}--------{item.grade}</Text>
                            </View>
                        ))
                    }
                </View>
            </View>
        )
    }
}
