import React, { Component } from 'react'
import { Text, View,DeviceEventEmitter } from 'react-native'
import { Actions} from 'react-native-router-flux'
import Header from '../utils/Header'
import {myFetch} from '../utils/FetchData' 

export default class CompositionTitle extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            data1:[]
        }
    }
    componentDidMount(){
        var title_url='writ/test'
        var detail_uil='word/writ'
        myFetch.get(title_url)
        .then(res=>{
            console.log(res.content);
            this.setState({
                data:res.content
            })
        })
        
        myFetch.get(detail_uil)
        .then(res=>{
            console.log(res.content);
            this.setState({
                data1:res.content
            })
        })
    }
    detail=(idx)=>{
        console.log('idx.id',idx.id)
        DeviceEventEmitter.emit('returntitle',idx.id);
        Actions.compositionDetail()
    }
    detail1=(idx)=>{
        console.log('idx.id',idx.id)
        DeviceEventEmitter.emit('returnData',idx.id);
        Actions.details()
    }
    render() {
        return (
            <View>
                <Header name='写作' />
                <Text style={{marginLeft:200,fontSize:20,marginTop:3}}>真题部分</Text>
                {
                    this.state.data.map((item)=>{
                        return (
                            <View style={{width:'100%'}}>
                                <Text onPress={()=>this.detail(item)}>{item.title}</Text>
                            </View>
                        )
                    })
                }
                <View>
                <Text style={{marginLeft:200,fontSize:20,marginTop:3}}>经典范文</Text>
                {
                    this.state.data1.map((item)=>{
                        return (
                            <View style={{width:'100%'}}>
                                <Text onPress={()=>this.detail1(item)}>{item.title}</Text>
                            </View>
                        )
                    })
                }
                </View>
            </View>
        )
    }
}


// constructor(){
//     super();
//     this.state={
//         data:[]
//     }
// }
// componentDidMount(){
//     var detail_uil='word/writ'
//     myFetch.get(detail_uil)
//     .then(res=>{
//         console.log(res.content);
//         this.setState({
//             data:res.content
//         })
//     })
// }
// detail=(idx)=>{
//     console.log('idx.id',idx.id)
//     DeviceEventEmitter.emit('returnData',idx.id);
//     Actions.details()
// }
// render() {
//     return (
//         <View>
//             <Header name='全部作文' />
//             <View>
//             {
//                 this.state.data.map((item)=>{
//                     return (
//                         <View style={{width:'100%'}}>
//                             <Text onPress={()=>this.detail(item)}>{item.title}</Text>
//                         </View>
//                     )
//                 })
//             }
//             </View>
//         </View>
//     )
// }