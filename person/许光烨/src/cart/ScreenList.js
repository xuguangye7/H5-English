import React, { Component } from 'react'
import { Text, View,DeviceEventEmitter } from 'react-native'
import Header from '../utils/Header'
import {myFetch} from '../utils/FetchData'
import { Actions } from 'react-native-router-flux';
export default class ScreenList extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            data1:[],
            data2:[]

        }
    }
    componentDidMount(){
        var list_url='video/list'
        myFetch.get(list_url)
        .then(res=>{
            this.setState({
                data:res.content
            })
        })
        var list_url='video/middle'
        myFetch.get(list_url)
        .then(res=>{
            this.setState({
                data1:res.content
            })
        })
        var list_url='video/easy'
        myFetch.get(list_url)
        .then(res=>{
            this.setState({
                data2:res.content
            })
        })
    }
    detail=(idx)=>{
        console.log('idx.id',idx.name)
        DeviceEventEmitter.emit('returnname',idx.name);
        Actions.watchScreen()
    }
    render() {
        return (
            <View>
                <Header name="全部视频" />
                <Text>cet4</Text>
                {
                    this.state.data.map((item)=>(
                        <View>
                            <Text onPress={()=>this.detail(item)}>{item.name}</Text>
                        </View>
                    ))
                }
                <Text>新概念</Text>
                {
                    this.state.data1.map((item)=>(
                        <View>
                            <Text onPress={()=>this.detail(item)}>{item.name}</Text>
                        </View>
                    ))
                }
                <Text>口语</Text>
                {
                    this.state.data2.map((item)=>(
                        <View>
                            <Text onPress={()=>this.detail(item)}>{item.name}</Text>
                        </View>
                    ))
                }
            </View>
        )
    }
}