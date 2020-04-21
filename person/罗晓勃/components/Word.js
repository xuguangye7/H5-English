import React, { Component } from 'react'
import { Text, View, StyleSheet ,Dimensions,TextInput, TouchableOpacity,} from 'react-native'
import { Icon } from '@ant-design/react-native';
import { Actions, Scene } from 'react-native-router-flux';
import Progress from './Progress';
const {width,scale,height} = Dimensions.get('window');
const s = width / 640;
export default class Word extends Component {
    constructor(){
        super();
        this.state={
            searchData:''
        }
    }
    searchhandle = (text)=>{
        this.setState({searchData:text})
    }
    search=()=>{
        let formData=new FormData();
        formData.append('id','3');
        var opts={
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body:formData
        }
        const post ={
            id:this.state.searchData
        }
        fetch('http://129.211.62.80:8080/word',{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(post),
        }).then(res=>{
            if(res.ok){
                return res.json()
            }
        }).then(res=>{
            console.log(res);
            console.log(res.id)
            Actions.search()
        }).catch((err)=>{
            console.error(err);
        })
    }
    render() {
        return (
            <View>
                <View style={styles.word}>
                    <View style={styles.main}>
                        <View style={styles.plan}>
                            <View style={styles.plan1}>
                                <View style={styles.plan2}>
                                    <Text style={{fontSize:20,width:200*s,height:70*s,lineHeight:70*s,textAlign:'center'}}>剩余</Text>
                                    <View style={{width:200*s,height:130*s,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                                        <Text style={{fontSize:60,width:100*s,height:130*s,textAlign:'center'}}>59</Text>
                                        <Text style={{fontSize:20,width:30*s,height:40*s,textAlign:'center',}}>天</Text>
                                    </View>
                                </View>
                                <View style={styles.plan2}>
                                    <Text style={{fontSize:20,width:200*s,height:70*s,lineHeight:70*s,textAlign:'center'}}>今日背单词</Text>
                                    <View style={{width:200*s,height:130*s,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                                        <Text style={{fontSize:60,width:100*s,height:130*s,textAlign:'center'}}>59</Text>
                                        <Text style={{fontSize:20,width:30*s,height:40*s,textAlign:'center',}}>个</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.changeplan}>
                                <View style={styles.changeitem}>
                                    <Text style={{fontSize:17,lineHeight:50*s}}>六级词汇</Text>
                                </View>
                                <View style={styles.changebtn}>
                                    <Text style={{fontSize:16,lineHeight:50*s}}>修改计划</Text>
                                </View>
                            </View>
                            <View style={styles.progress}>
                                <View style={styles.protext}>
                                    <Text style={{fontSize:16}}>已完成</Text>
                                    <Text style={{fontSize:20}}>150</Text>
                                    <Text style={{fontSize:20}}>/</Text>
                                    <Text style={{fontSize:20}}>2000</Text>
                                </View>
                                <View style={styles.probar}>
                                    <Progress/>
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity onPress={Actions.wordcard}>
                        <View style={styles.button}>
                            <Text style={{color:'#fff',fontSize:20,width:520*s,height:70*s,lineHeight:70*s,textAlign:"center"}}>开始背单词</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <View style={styles.button}>
                            <Text style={{color:'#fff',fontSize:20,width:520*s,height:70*s,lineHeight:70*s,textAlign:"center"}}>复习单词</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    word:{
        backgroundColor:'#fff',
        width:width,
        height:height
    },
    main:{
        width:width,
        flexDirection:'column',
        height:height-70,
        backgroundColor:'#ffcc99',
        // justifyContent:'center',
        alignItems:'center'
    },
    plan:{
        marginTop:30,
        width:520*s,
        height:520*s,
        backgroundColor:'#ffffcc',
        borderRadius:20,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    plan1:{
        width:520*s,
        height:240*s,
        // backgroundColor:'green',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:"space-around"
    },
    plan2:{
        width:200*s,
        height:200*s,
        // backgroundColor:'red'
    },
    changeplan:{
        width:400*s,
        height:80*s,
        // backgroundColor:'blue',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomWidth:2,
        borderBottomColor:'red'

    },
    changeitem:{
        width:100*s,
        height:50*s,
        // backgroundColor:'#fff',
        
    },
    changebtn:{
        width:100*s,
        height:50*s,
        // backgroundColor:'#fff',
        borderColor:'red',
        borderWidth:1,
        borderRadius:15
    },
    progress:{
        width:520*s,
        height:200*s,
        // backgroundColor:'pink',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:"center"
    },
    protext:{
        width:420*s,
        height:40*s,
        // backgroundColor:'red',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    probar:{
        width:420*s,
        height:50*s,
        marginTop:10
    },
    button:{
        width:520*s,
        height:70*s,
        marginTop:30,
        backgroundColor:'red',
        borderRadius:20
    }
});
