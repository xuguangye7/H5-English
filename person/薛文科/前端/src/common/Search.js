import React, { Component } from 'react'
import { Text, View, StyleSheet,Image,TouchableOpacity, TextInput } from 'react-native'
import { NoticeBar,Icon ,Tabs, WhiteSpace, Button} from '@ant-design/react-native';
import { Actions} from 'react-native-router-flux'
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
                <View style={{height:55,width:'100%',backgroundColor:'red',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <Icon name='left' style={{marginLeft:15}}  color="#fff" onPress={()=>{Actions.pop()}} />
                    <Text style={{color:'#fff',fontSize:23}}>单词详情</Text>
                    <Icon name='ellipsis' size={35} color="#fff" style={{marginRight:15}}/>
                </View>
                <View style={styles.header}>
                    {
                        this.state.data.map((item)=>(
                            <Text style={styles.text} >{item.word}</Text>
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
                    <Text style={styles.chiness}>You Must be able to speak French for this job</Text>
                </View>
                <TouchableOpacity style={styles.start}  onPress={this.start}>
                    <Text style={{color: '#fff',fontSize:18}}>添加到我的收藏</Text>
                </TouchableOpacity>
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
    header:{
        width:'100%',
        height:80,
        // backgroundColor:"yellow"
    },
    text:{
        fontSize:40,
        marginTop:20,
        marginLeft:15,
        backgroundColor:'#fff'
    },
    chiness:{
        marginLeft:15,
        marginTop:10,
        fontSize:20
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
})
