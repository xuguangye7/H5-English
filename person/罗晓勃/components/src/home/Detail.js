import React, { Component } from 'react'
import { Text, View, StyleSheet ,TouchableOpacity,Dimensions,TextInput, Alert, ScrollView} from 'react-native'
import { Actions, Scene } from 'react-native-router-flux';
// import { Icon } from '@ant-design/react-native';
import { Button, Icon } from '@ant-design/react-native';
import Sound from 'react-native-sound';
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
        fetch('http://129.211.62.80:8080/word/show')
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
    render() {
        return (
            <View>
                <View style={{height:55,width:'100%',backgroundColor:'#8a8a8a',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <Icon name='left' style={{marginLeft:15}}  color="#fff" onPress={()=>{Actions.pop()}} />
                    <Text style={{color:'#fff',fontSize:23}}>单词详情</Text>
                    <Icon name='ellipsis' size={35} color="#fff" style={{marginRight:15}}/>
                </View>
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
        marginTop:400,
        backgroundColor:'#fff',
        alignItems:'center',
    },
    button:{
        width:'80%',
        height:50,
        borderRadius:20,
        backgroundColor:'#8a8a8a'
    },
    text1:{
        color:'#fff'
    }
})
