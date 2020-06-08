import React, { Component } from 'react'
import { Text, View,DeviceEventEmitter,StyleSheet ,Dimensions,ImageBackground} from 'react-native'
import { Actions} from 'react-native-router-flux'
import Header from '../utils/Header'
import {myFetch} from '../utils/FetchData' 
const {width,scale,height} = Dimensions.get('window');
const s = width / 640;
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
        Actions.compositiondetail()
    }
    detail1=(idx)=>{
        console.log('idx.id',idx.id)
        DeviceEventEmitter.emit('returnData',idx.id);
        Actions.details()
    }
    render() {
        return (
            <View style={styles.back}>
                <ImageBackground
                    source={require('../../../pic/writeback.jpg')} 
                    style={{width: '100%', height: '100%'}}
                >
                <Header name='写作' />
                <Text style={styles.title}>真题部分</Text>
                {
                    this.state.data.map((item)=>{
                        return (
                            <View style={styles.item1}>
                                <Text onPress={()=>this.detail(item)} style={styles.item1text}>{item.title}</Text>
                            </View>
                        )
                    })
                }
                <View>
                <Text style={styles.title}>经典范文</Text>
                {
                    this.state.data1.map((item)=>{
                        return (
                            <View style={styles.item1}>
                                <Text onPress={()=>this.detail1(item)}  style={styles.item1text}>{item.title}</Text>
                            </View>
                        )
                    })
                }
                </View>
                </ImageBackground>
            </View>
        )
    }
}


const styles=StyleSheet.create({
    back:{
        width:width,
        height:height,
        backgroundColor:'blue',
        
    },
    title:{
        // backgroundColor:'red',
        fontSize:20,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        lineHeight:30,
        textAlign:'center'
    },
    item1:{
        width:width,
        flexDirection:"column",
        marginLeft:10,
        borderWidth:1,
        borderColor:"red",
        borderRadius:10
        // justifyContent:'center',
        // alignItems:'center'

    },
    item1text:{
        width:width,
        // textAlign:'center'
        fontSize:16,
        // fontFamily:'SKTai'
    },
})