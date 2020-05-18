import React, { Component } from 'react'
import { Text, View,DeviceEventEmitter } from 'react-native'
import { Actions} from 'react-native-router-flux'
import Header from '../utils/Header'
import {myFetch} from '../utils/FetchData' 
import { Button } from '@ant-design/react-native'
var detail_url='writ/detail';
var detail_id;
export default class CompositionDetail extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            title:[]
        }
    }
    componentDidMount(){
        DeviceEventEmitter.addListener("returntitle", (params) => {
            console.log('params',params);
            detail_id=parseInt(params)
        })
        // console.log('id',id)
        myFetch.get(detail_url,{id:detail_id})
            .then(res=>{
                console.log(res.content)
                this.setState({
                    data:res.content
                })
                this.setState({
                    title:res.content[0].title
                })
            })
    }
    render() {
        return (
            <View>
                <Header name={this.state.title} />
                <Text>写作原题</Text>
                {
                    this.state.data.map((item)=>{
                        return (
                            <View style={{width:'100%'}}>
                                <Text onPress={()=>this.detail(item)}>{item.directions}</Text>
                            </View>
                        )
                    })
                }
                <Button>开始做题</Button>
            </View>
        )
    }
}
