import React, { Component } from 'react'
import { Text, View, ScrollView,Alert,Image,StyleSheet, TouchableOpacity } from 'react-native'
import { Icon ,Tabs, WhiteSpace} from '@ant-design/react-native';
import { Actions,} from 'react-native-router-flux';
import Sound from 'react-native-sound';
import Header from '../utils/Header';
export default class Note extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            isClick:true,
            text:'看'
        }
    }
    componentDidMount(){
        fetch('http://129.211.62.80:8088/word/like')
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                data:res.content
            })
        })
    }
    delete=(idx)=>{
        console.log(idx.scontent)
        fetch('http://129.211.62.80:8088/word/delete?id='+idx.id)
        .then(res=>res.json())
        .then((res)=>{
            console.log('ok')
        })
    }
    look=()=>{
        var click=!this.state.isClick;
        this.setState({
            isClick:click
        })
        var just=this.state.isClick.toString()
        if(just=='false'){
            this.setState({
                text:'看'
            })
        }else{
            this.setState({
                text:'藏'
            })
        }
        
    }
    render() {
        return (
            <View>
                <Header name="生词本" />
                <ScrollView>
                    {
                        this.state.data.map((item)=>{
                            let musciPath='http://dict.youdao.com/dictvoice?audio='+item.name;
                                var music=new Sound(musciPath,null,(err)=>{
                                    if(err){
                                        Alert.alert('播放失败');
                                    }
                                })
                            return (
                                <View style={styles.body}>
                                    <View style={styles.main}>
                                        <Text style={styles.name}>{item.name}</Text>
                                        <Text style={styles.symbol}>{item.symbol}</Text>
                                        <Icon style={styles.icon} name='sound' color="#8a8a8a" size={25} onPress={()=>{music.play()}}/>
                                    </View>
                                    <TouchableOpacity style={this.state.isClick?styles.background1:styles.background2} onPress={()=>this.look()}>
                                        <Text style={styles.chiness}>{item.chiness}</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        })
                    }
                </ScrollView>
                <TouchableOpacity style={{backgroundColor:'#8a8a8a',width:60,height:60,alignItems:'center',justifyContent:'center',borderRadius:30,position:'absolute',right:10,top:300}} onPress={()=>this.look()}>
                    <Text style={{color:'white',fontSize:19}}>
                    {this.state.text}答案
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    text:{
        fontSize:20,
        marginBottom:10,
        marginTop:5
    },
    touxiang:{
        height: 55,
        width: 55, 
        borderRadius:400, 
        // backgroundColor:'green',
        overflow:'hidden'
    },
    body:{
        backgroundColor:'#fff'
    },
    main:{
        marginTop:15,
        paddingLeft:15,
        flexDirection:'row',
        borderBottomColor:'#8a8a8a',
        paddingBottom:5,
        borderBottomWidth:1
    },
    nicheng:{
        fontSize:18,
        color:'#555555',
        marginTop:15,
        marginLeft:15
    },
    name:{
        fontSize:25,
    },
    symbol:{
        fontSize:20,
        position:'absolute',
        right:'48%',
        top:5,
        color:'#8a8a8a'
    },
    icon:{
        position:'absolute',
        right:'5%',
        top:5
    },
    chiness:{
        fontSize:20,
        color:"#8a8a8a",
    },
    background1:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#8a8a8a"
    },
    background2:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#fff"
    }
})
