import React, { Component } from 'react'
import { Text, View,ScrollView, DeviceEventEmitter } from 'react-native'
import Header from '../utils/Header'
import {myFetch} from '../utils/FetchData' 
var id;
export default class Answe extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            title:[],
            mytext:[]
        }
    }
    componentDidMount(){
        DeviceEventEmitter.addListener("returntitles", (params) => {
            console.log('paramsaa',params);
            id=params;
        })
        var title_url='writ/detail'
        myFetch.get(title_url,{id:id})
        .then(res=>{
            console.log(res.content);
            this.setState({
                data:res.content
            })
            this.setState({
                title:res.content[0].title
            })
        })
        this.maytext();
    }
    maytext=()=>{
        console.log('1111')
        // DeviceEventEmitter.addListener("returnanswe", (params) => {
        //     console.log('paramsaa',params);
        // })
        var answe_url='writ/answe'
        myFetch.get(answe_url)
        .then(res=>{
            this.setState({
                mytext:res.content[0].answe
            })
        })
    }
    render() {
        return (
            <View>
                <Header name={this.state.title} />
                <ScrollView>
                <Text style={{marginLeft:180,fontSize:20,marginTop:3}}>作文原题</Text>
                {
                    this.state.data.map((item)=>{
                        return (
                            <View style={{width:'100%'}}>
                                <Text>{item.direction}</Text>
                            </View>
                        )
                    })
                }
                <Text style={{marginLeft:180,fontSize:20,marginTop:3}} onPress={this.maytext}>我的作文</Text>
                <Text>{this.state.mytext}</Text>
                <Text style={{marginLeft:200,fontSize:20,marginTop:3}}>范文</Text>
                {
                    this.state.data.map((item)=>{
                        return (
                            <View style={{width:'100%'}}>
                                <Text>{item.answe}</Text>
                            </View>
                        )
                    })
                }
                <Text style={{marginLeft:180,fontSize:20,marginTop:3}}>范文翻译</Text>
                {
                    this.state.data.map((item)=>{
                        return (
                            <View style={{width:'100%'}}>
                                <Text>{item.chiness}</Text>
                            </View>
                        )
                    })
                }
                </ScrollView>
            </View>
            
        )
    }
}