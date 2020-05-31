import React, { Component } from 'react'
import { Text, View,Dimensions,StyleSheet, ScrollView,Image, TouchableOpacity,TextInput,ImageBackground} from 'react-native'
import { Icon ,Tabs} from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
import Sound from 'react-native-sound';
import Progress from './Progress';
const {width,scale,height} = Dimensions.get('window');
const s = width / 640;
const { TabPane } = Tabs;
export default class Learn1 extends Component {
    constructor(){
        super();
        this.state={
            searchData:'',
            data:[]
        }
    }
    componentDidMount(){
        fetch('http://open.iciba.com/dsapi/')
        .then(res=>res.json())
        .then(res=>{
            console.log(res.content)
            this.setState({
                data:res
            })
            console.log('data',this.state.data.content)
        })
    }
    play1=()=>{
        console.log('tts',this.state.data.tts)
        let musciPath=this.state.data.tts;
        var music=new Sound(musciPath,null,(err)=>{
            if(err){
                Alert.alert('播放失败');
            }else{
                music.play();
            }
        })
    }
    render() {
        return (
            <View style={{flex:1}}>                
                <ScrollView>
                    {/* 每日一句 */}
                    <View style={styles.card}>
                        <ImageBackground source={this.state.data.picture}  style={{width:'100%', height:'100%',alignItems:'center'}}>
                            <View style={{
                                width:'100%',
                                height:150*s,
                                backgroundColor:'#66dd00'
                            }}>
                                <Text style={{marginLeft:10*s,fontSize:15*s,marginTop:10*s,color:'#fff'}}>每日一句</Text>
                                <Icon name='setting' style={styles.icon} color="#fff" size={25} onPress={this.play1} />
                                <Text style={{fontSize:20*s,marginTop:15*s,color:'#fff',marginLeft:15*s}}>{this.state.data.content}</Text>
                                <Text style={{fontSize:20*s,marginTop:15*s,color:'#fff',marginLeft:15*s}}>{this.state.data.note}</Text>
                            </View>
                            <View></View>
                        </ImageBackground>
                    </View>
                    {/* 我的课程 */}
                    <View style={styles.course}>
                        <View style={styles.course1}>
                            <View style={{padding:5}}>
                                <Text style={{fontSize:16}}>精选课程</Text>
                            </View>
                        </View>    
                        <View style={{
                            width:width,
                            height:280*s,
                            flexDirection:'row',
                            justifyContent:'space-around'
                        }}>
                            <View style={styles.c1}>
                                <Image 
                                    style={{
                                        width:s*150,
                                        height:200*s,
                                    }}
                                    source={require('../pic/course1.jpg')}
                                    />
                                <Text style={{marginTop:10}}>维多利亚时期的</Text>
                            </View>
                            <View style={styles.c1}>
                                <Image 
                                    style={{
                                        width:s*150,
                                        height:200*s,
                                    }}
                                    source={require('../pic/course2.jpg')}
                                    />
                                <Text style={{marginTop:10}}>维多利亚时期的</Text>
                            </View>
                            <View style={styles.c1}>
                                <Image 
                                    style={{
                                        width:s*150,
                                        height:200*s,
                                    }}
                                    source={require('../pic/course3.jpg')}
                                    />
                                <Text style={{marginTop:10}}>维多利亚时期的</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.all}>
                         <TouchableOpacity>
                             <View style={styles.allbtn}>
                                    <Text style={styles.btntext}>Look at all</Text>
                             </View>
                         </TouchableOpacity>
                    </View>
                    {/* 口语课 */}

                    <View style={styles.articleBack}>
                        <View style={styles.article}>
                            <Image 
                                style={{
                                    width:width*0.45,
                                    height:350*s,
                                    opacity:0.5
                                }}
                                source={require('../pic/article.jpg')}
                            />
                            <TouchableOpacity style={styles.write} onPress={Actions.write}>
                            {/* <View style={styles.write}> */}
                                <Text style={{
                                    width:width*0.18,
                                    height:width*0.18,
                                    // backgroundColor:'red',
                                    borderRadius:width*0.09,
                                    textAlign:'center',
                                    lineHeight:width*0.18,
                                    fontSize:18
                                }}>Writing</Text>
                            {/* </View> */}
                            </TouchableOpacity>
                        </View>
                        <View style={styles.listen}>
                            <Image 
                                    style={{
                                        width:width*0.45,
                                        height:350*s,
                                        opacity:0.5
                                    }}
                                    source={require('../pic/listen2.jpg')}
                                />
                            <TouchableOpacity style={styles.listenclick} onPress={Actions.listen}>
                                {/* <View style={styles.listenclick}> */}
                                    <Text style={{
                                        width:width*0.18,
                                        height:width*0.18,
                                        borderRadius:width*0.09,
                                        textAlign:'center',
                                        lineHeight:width*0.18,
                                        fontSize:18
                                    }}>Listening</Text>
                                {/* </View> */}
                            </TouchableOpacity>
                        </View>

                    </View>
                    
                </ScrollView>  
                {/* <View style={styles.listenclick} >
                    <TouchableOpacity onPress={Actions.listen}>
                        <Image 
                        style={{
                            width:100*s,
                            height:100*s,
                            borderRadius:50*s
                        }}
                        source={require('../pic/timg.jpg')}/>
                    </TouchableOpacity>
                </View> */}
            </View>
            
        )
    }
}
const styles = StyleSheet.create({
    card:{
        marginTop:3,
        width:width,
        height:150*s,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'space-around',
        // margin:'auto'
      },
    course:{
        width:width*0.96,
        marginLeft:width*0.02,
        marginTop:5*s,
        height:220,
        backgroundColor:'#e9e4d9',
        // backgroundColor:'#fff',
        flex:1,
        borderWidth:1*s,
        borderBottomWidth:0
    },
    course1:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    course2:{
        flexDirection:'row',
        justifyContent:'space-around',
        height:300,
    },
    c1:{
        width:150*s,
        height:200*s,
        marginTop:10,
    },
    course3:{
        flexDirection:'row',
        justifyContent:"space-around",
        width:width,
        height:80*s,
        backgroundColor:'#e9e4d9',
    },
    all:{
        width:width*0.96,
        height:70*s,
        marginLeft:width*0.02,
        backgroundColor:'#e9e4d9',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:"center",
        borderWidth:1*s,
        borderTopWidth:0,
        // backgroundColor:'#fff',
    },
    allbtn:{
        width:250*s,
        height:60*s,
        backgroundColor:'#7eaedc',
        borderRadius:30*s,
        borderWidth:1*s
    },
    btntext:{
        width:250*s,
        height:60*s,
        textAlign:'center',
        lineHeight:60*s,
        fontSize:20,
        // fontFamily:''
        // backgroundColor:"red"
    },
    articleBack:{
        width:width,
        height:350*s,
        // backgroundColor:'#e9e4d9',
        marginTop:10*s,
        flexDirection:'row',
        justifyContent:'space-around',
    },
    article:{
        width:width*0.45,
        height:350*s,
        // backgroundColor:'blue'
        borderWidth:1*s,
        position:'relative'
    },
    write:{
        position:'absolute',
        top:width*0.13,
        left:width*0.13,
        width:width*0.18,
        height:width*0.18,
        // backgroundColor:'red',
        backgroundColor:'#fff',
        opacity:0.8,
        borderRadius:width*0.09,
        borderWidth:1*s,
    },
    listen:{
        position:'relative',
        width:width*0.45,
        height:350*s,
        // backgroundColor:'green'
        borderWidth:1*s,
    },
    listenclick:{
        position:'absolute',
        top:width*0.13,
        left:width*0.13,
        width:width*0.18,
        height:width*0.18,
        // backgroundColor:'red',
        backgroundColor:'#fff',
        opacity:0.8,
        borderRadius:width*0.09,
        borderWidth:1*s,
    }
  });
  