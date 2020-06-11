import React, { Component } from 'react'
import { Text, View,ScrollView,DeviceEventEmitter, Image } from 'react-native'
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
                <ScrollView>
                <View style={{marginLeft:185,width:100,height:50,borderRadius:20,marginTop:15,marginBottom:10,borderWidth:2,borderColor:"red",backgroundColor:"#fff"}}>
                    <Text style={{fontSize:20,marginTop:7,marginLeft:23}}>cet4</Text>
                </View>
                {
                    this.state.data.map((item)=>(
                        <View style={{backgroundColor:"#fff",height:100,marginTop:5,flexDirection:'row',alignItems:'center',}}>
                            <Image style={{width:150,marginLeft:5,height:90}} source={require("../../pic/siji.png")}/>
                            <Text style={{width:200,marginLeft:100}} onPress={()=>this.detail(item)}>{item.name}</Text>
                        </View>
                    ))
                }
                <View style={{marginLeft:185,width:100,height:50,borderRadius:20,marginTop:15,marginBottom:10,borderWidth:2,borderColor:"red",backgroundColor:"#fff"}}>
                    <Text style={{fontSize:20,marginTop:7,marginLeft:23}}>新概念</Text>
                </View>
                {
                    this.state.data1.map((item)=>(
                        <View style={{backgroundColor:"#fff",height:100,marginTop:5,flexDirection:'row',alignItems:'center',}}>
                            <Image style={{width:150,marginLeft:5,height:90}} source={require("../../pic/xgn.jpg")}/>
                            <Text style={{width:200,marginLeft:100}} onPress={()=>this.detail(item)}>{item.name}</Text>
                        </View>
                    ))
                }
                <View style={{marginLeft:185,width:100,height:50,borderRadius:20,marginTop:15,marginBottom:10,borderWidth:2,borderColor:"red",backgroundColor:"#fff"}}>
                    <Text style={{fontSize:20,marginTop:7,marginLeft:23}}>口语</Text>
                </View>
                {
                    this.state.data2.map((item)=>(
                        <View style={{backgroundColor:"#fff",height:100,marginTop:5,flexDirection:'row',alignItems:'center',}}>
                            <Image style={{width:150,marginLeft:5,height:90}} source={require("../../pic/kouyu.jpg")}/>
                            <Text style={{width:200,marginLeft:100}} onPress={()=>this.detail(item)}>{item.name}</Text>
                        </View>
                    ))
                }
                </ScrollView>
            </View>
        )
    }
}