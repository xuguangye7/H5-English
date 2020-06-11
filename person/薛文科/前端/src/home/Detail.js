import React, { Component } from 'react'
import { Text, View, StyleSheet ,TouchableOpacity,Dimensions,TextInput, Alert, ScrollView} from 'react-native'
import { Actions, Scene } from 'react-native-router-flux';
// import { Icon } from '@ant-design/react-native';
import { Button, Icon } from '@ant-design/react-native';
import Sound from 'react-native-sound';
import Header from '../utils/Header';
const {width,scale,height} = Dimensions.get('window');
const s = width / 640;

export default class Detail extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        fetch('http://129.211.62.80:8088/word/show')
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                data:res.content
            })
        })
    }
    next=()=>{
        Actions.pop();
    }
    like=(idx)=>{
        console.log(idx)
        const post ={
            userid:15028341232,
            id:idx.id,
            name:idx.name,
            symbol:idx.symbol,
            chiness:idx.chiness,
            exmple:idx.exmple
        }
        fetch('http://129.211.62.80:8088/word/like',{
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
            console.log(res.message)
            console.log('收藏成功')
        })
    }
    render() {
        return (
            <View>
                <Header name="单词详情" />
                <ScrollView style={{backgroundColor:'#fff'}}>
                    <View style={styles.header}>
                        {
                            this.state.data.map((item)=>{
                                let musciPath='http://dict.youdao.com/dictvoice?audio='+item.name;
                                var music=new Sound(musciPath,null,(err)=>{
                                    if(err){
                                        Alert.alert('播放失败');
                                    }
                                })
                                return (
                                    <View style={{flexDirection:'row',alignItems:'center'}}>
                                        <Text style={styles.text} >{item.name}</Text>
                                        <Icon name='setting' style={styles.icon} color="#8a8a8a" size={35} onPress={()=>{music.play()}} />
                                    </View>
                                )
                            })
                        }
                    </View>
                    <View>
                        {
                            this.state.data.map((item)=>(
                                <Text style={styles.symbol}>{item.symbol}</Text>
                            ))
                        }
                    </View>
                    <View>
                        {
                            this.state.data.map((item)=>(
                                <Text style={styles.chiness}>{item.chiness}</Text>
                            ))
                        }
                    </View>
                    <View style={{width:'100%'}}>
                        <Text style={styles.symbol1}>例句</Text>
                        {
                            this.state.data.map((item)=>(
                                <Text style={styles.exmple}>{item.exmple}</Text>
                            ))
                        }
                    </View>
                    <View style={styles.footer}>
                        {
                            this.state.data.map((item)=>(
                                <Button style={styles.button} onPress={()=>this.like(item)}>
                                    <Text style={styles.text1}>添加生词本</Text>
                                </Button>
                            ))
                        }
                        <Button style={styles.button} onPress={this.next}>
                            <Text style={styles.text1}>继续</Text>
                        </Button>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    header:{
        width:'100%',
        height:80,
        // backgroundColor:"yellow"
    },
    text:{
        fontSize:40,
        marginTop:20,
        marginLeft:15,
        backgroundColor:'#fff',
        color:'red'
    },
    icon:{
        position:'absolute',
        right:15,
        top:20
    },
    symbol:{
        marginLeft:15,
        marginTop:10,
        fontSize:20,
        color:'#8a8a8a'
    },
    symbol1:{
        marginLeft:15,
        marginTop:20,
        fontSize:20,
        color:'#8a8a8a'
    },
    chiness:{
        marginLeft:15,
        marginTop:20,
        fontSize:20,
        color:'#000'
    },
    exmple:{
        marginLeft:15,
        marginTop:20,
        fontSize:22,
        color:'#000'
    },
    footer:{
        width:'100%',
        height:120,
        marginTop:350,
        backgroundColor:'#fff',
        alignItems:'center',
    },
    button:{
        width:'80%',
        height:50,
        marginBottom:10,
        borderRadius:20,
        backgroundColor:'#8a8a8a'
    },
    text1:{
        color:'#fff'
    }
})
