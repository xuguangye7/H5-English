import React, { Component } from 'react'
import { Text, View, StyleSheet,Image,TouchableOpacity, TextInput,ScrollView } from 'react-native'
import { NoticeBar,Icon ,Tabs, WhiteSpace, Button} from '@ant-design/react-native';
import { Actions} from 'react-native-router-flux'
import Sound from 'react-native-sound';
import Header from '../utils/Header';
export default class Search extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        fetch('http://129.211.62.80:8080/word/search')
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                data:res.content
            })
        })
    }
    render() {
        const customIcon = (
            <Image
              source={{
                uri: 'https://zos.alipayobjects.com/rmsportal/bRnouywfdRsCcLU.png',
              }}
              style={{ width: 12, height: 12 }}
            />
        );
        return (
            <View style={styles.main}>
                <Header name='单词详情' />
                {/* <View style={styles.header}>
                    {
                        this.state.data.map((item)=>(
                            <Text style={styles.text} >{item.name}</Text>
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
                <WhiteSpace/>
                <NoticeBar 
                    mode="closable" 
                    icon={undefined}
                    marqueeProps={{style: { fontSize: 20, color: 'red',marginLeft:10 } }}
                >
                    词根体现单词本质含义
                </NoticeBar>
                <WhiteSpace/>
                <NoticeBar 
                    mode="closable" 
                    icon={undefined}
                    marqueeProps={{style: { fontSize: 20, color: 'red',marginLeft:10 } }}
                >
                    派生联想，把单词串成树
                </NoticeBar>

                <View>
                    <Text style={styles.chiness}>例句</Text>
                    <Text style={styles.chiness}></Text>
                </View>
                <TouchableOpacity style={styles.start}  onPress={this.start}>
                    <Text style={{color: '#fff',fontSize:18}}>添加到我的收藏</Text>
                </TouchableOpacity> */}
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
                                        <Icon name='notification' style={styles.icon} color="#8a8a8a" size={35} onPress={()=>{music.play()}} />
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
                    <WhiteSpace/>
                    <NoticeBar 
                        mode="closable" 
                        icon={undefined}
                        marqueeProps={{style: { fontSize: 20, color: 'red',marginLeft:10 } }}
                    >
                        词根体现单词本质含义
                    </NoticeBar>
                    <WhiteSpace/>
                    <NoticeBar 
                        mode="closable" 
                        icon={undefined}
                        marqueeProps={{style: { fontSize: 20, color: 'red',marginLeft:10 } }}
                    >
                        派生联想，把单词串成树
                    </NoticeBar>
                    <View style={{width:'100%'}}>
                        <Text style={styles.symbol1}>例句</Text>
                        {
                            this.state.data.map((item)=>(
                                <Text style={styles.exmple}>{item.exmple}</Text>
                            ))
                        }
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    main:{
        backgroundColor:'#fff',
        width:'100%',
        flex:1
    },
    start: {
        position: 'absolute',
        bottom: 150,
        width: 200,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8a8a8a',
        borderRadius: 20,
        opacity:0.8,
        marginLeft:140
    },
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
})
