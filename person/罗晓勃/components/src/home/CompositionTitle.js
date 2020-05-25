import React, { Component } from 'react'
import { Text, View,DeviceEventEmitter } from 'react-native'
import { Actions} from 'react-native-router-flux'
import Header from '../utils/Header'
import {myFetch} from '../utils/FetchData' 

export default class CompositionTitle extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        var title_url='writ/test'
        myFetch.get(title_url)
        .then(res=>{
            console.log(res.content);
            this.setState({
                data:res.content
            })
        })
    }
    detail=(idx)=>{
        console.log('idx.id',idx.id)
        DeviceEventEmitter.emit('returntitle',idx.id);
        Actions.compositiondetail()
    }
    render() {
        return (
            <View>
                <Header name='写作' />
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
        )
    }
}
