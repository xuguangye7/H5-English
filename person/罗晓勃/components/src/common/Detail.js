import React, { Component } from 'react'
import { Text,DeviceEventEmitter, View } from 'react-native';
import Header from '../utils/Header';
import {myFetch} from '../utils/FetchData'

var detail_url='word/writer';
var detail_id;
export default class Detail extends Component {
    constructor(props){
        super(props);
        this.state={
            item:null,
            data:[]
        }
    }
    componentDidMount(){
        DeviceEventEmitter.addListener("returnData", (params) => {
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
            })
    }
    render() {
        return (
            <View>
                <Header name='优秀范文'/>
                {
                    this.state.data.map((item)=>{
                        return (
                            <View style={{width:'100%'}}>
                                <Text>{item.name}</Text>
                            </View>
                        )
                    })
                }
            </View>
        )
    }
}
