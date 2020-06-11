import React, { Component } from 'react'
import { Text, View, DeviceEventEmitter,StyleSheet,Dimensions } from 'react-native'
import Header from '../utils/Header'
import {myFetch} from '../utils/FetchData' 
import LinearGradient from 'react-native-linear-gradient';
var id;
const {width,scale,height} = Dimensions.get('window');
const s = width / 640;
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
                <LinearGradient colors={['#ffcc99', '#ccffff', '#99ffff',]} style={{height: height}}>   
                <Text style={styles.title}>作文原题</Text>
                {
                    this.state.data.map((item)=>{
                        return (
                            <View style={{width:'100%'}}>
                                <Text>{item.directions}</Text>
                            </View>
                        )
                    })
                }
                <Text style={styles.title} onPress={this.maytext}>我的作文</Text>
                <Text>{this.state.mytext}</Text>
                <Text style={styles.title}>范文</Text>
                {
                    this.state.data.map((item)=>{
                        return (
                            <View style={{width:'100%'}}>
                                <Text style={s}>{item.answe}</Text>
                            </View>
                        )
                    })
                }
                <Text style={styles.title}>范文翻译</Text>
                {
                    this.state.data.map((item)=>{
                        return (
                            <View style={{width:'100%'}}>
                                <Text>{item.chiness}</Text>
                            </View>
                        )
                    })
                }
                </LinearGradient>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    title:{
        marginTop:15,
        color:'#ffff00',
        textShadowOffset:{width:3,hegith:3},
        textShadowRadius:2,
        textShadowColor:'#99ccff',
        fontSize:25,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        lineHeight:30,
        textAlign:'center'
    },
    item1:{
        // height:30,
        marginTop:15,
        flexDirection:"column",
        marginLeft:10,
        marginRight:10,
        borderWidth:2,
        borderColor:"#fff",
        borderRadius:10,
        backgroundColor:'#99ccff'
        // backgroundColor:'red'
        // justifyContent:'center',
        // alignItems:'center'

    },
    item1text:{
        height:30,
        lineHeight:30,
        color:'#fff',
        textShadowOffset:{width:2,hegith:2},
        textShadowRadius:2,
        textShadowColor:'black',
        // textAlign:'center'
        fontSize:18,
        paddingLeft:5,
        paddingRight:5
        // fontFamily:'SKTai'
    },
})