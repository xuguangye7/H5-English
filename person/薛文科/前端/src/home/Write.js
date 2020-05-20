import React, { Component } from 'react'
import { Text,DeviceEventEmitter, View, StyleSheet } from 'react-native'
import { Actions} from 'react-native-router-flux'
import Header from '../utils/Header'
import {myFetch} from '../utils/FetchData' 

export default class Write extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        var detail_uil='word/writ'
        myFetch.get(detail_uil)
        .then(res=>{
            console.log(res.content);
            this.setState({
                data:res.content
            })
        })
    }
    detail=(idx)=>{
        console.log('idx.id',idx.id)
        DeviceEventEmitter.emit('returnData',idx.id);
        Actions.details()
    }
    render() {
        return (
            <View>
                <Header name='全部作文' />
                <View>
                {
                    this.state.data.map((item)=>{
                        return (
                            <View style={{width:'100%'}}>
                                <Text onPress={()=>this.detail(item)}>{item.title}</Text>
                            </View>
                        )
                    })
                }
                </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    
})
