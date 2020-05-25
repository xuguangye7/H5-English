import React, { Component } from 'react'
import { Text, View,Dimensions,StyleSheet, ScrollView,DeviceEventEmitter,Image,TouchableOpacity,TextInput,ToastAndroid, ImageBackground} from 'react-native'
import {Router,Overlay,Scene,Drawer,Lightbox,Modal, Actions} from 'react-native-router-flux'
import { Icon ,Tabs, WhiteSpace} from '@ant-design/react-native';
import Word from './Word';
import Sound from 'react-native-sound';
const {width,scale} = Dimensions.get('window');
const s = width / 640;
export default class Learn extends Component {
    constructor(){
        super();
        this.state={
            searchData:'',
            data:[]
        }
    }
    // 每日一句
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
            console.log(res.message)
            if(res.message){
                Actions.search()
            }else{
                ToastAndroid.show('没有搜索到你要的词汇');
            }
        }).catch((err)=>{
            console.error(err);
        })
    }
    detail1=()=>{
        DeviceEventEmitter.emit('returnname','大学英语四级多少分才算通过呢？_好看视频.mp4');
        Actions.watchScreen()
    }
    detail2=()=>{
        DeviceEventEmitter.emit('returnname','大学英语四级高频词汇1_好看视频.mp4');
        Actions.watchScreen()
    }
    detail3=()=>{
        DeviceEventEmitter.emit('returnname','大学英语四级高频词汇速记宝典 Lesson 1 测试课_好看视频.mp4');
        Actions.watchScreen()
    }
    render() {
        const tabs = [
            { title: '轻松学' },
            { title: '背单词' },
          ];
        const style = {
            alignItems: 'center',
            backgroundColor: '#fff',
            justifyContent:'center'
          };
        return (
            <View style={{flex:1}}>
                <View style={styles.header}>
                    <TouchableOpacity>
                        <Icon                    
                            name="menu"
                                style={{
                                width:20,
                                height:50*s,
                                marginTop:16*s
                        }}/>
                    </TouchableOpacity>
                    <View style={styles.search}>
                        <TextInput 
                            placeholder="请输入您要搜索的单词"
                            placeholderTextColor='#8a8a8a'
                            style={{
                                width: 490*s,height: 50*s,
                                padding: 0,
                                paddingLeft: 10,
                                fontSize:15
                            }}
                            onChangeText={this.searchhandle}
                        />
                    </View>    
                    <TouchableOpacity>
                            <Icon name='search' size={28} color='gray' onPress={this.search} />
                    </TouchableOpacity>       
                </View>
                <Tabs tabs={tabs} style={{
                }}>
                    <View style={style}>
                        <ScrollView>
                            <View style={styles.card}>
                                <ImageBackground source={require('../../pic/1.png')}  style={{width:'100%', height:'100%',alignItems:'center'}}>
                                    <View style={{
                                        width:'100%',
                                        height:160, 
                                        // backgroundColor:'#66dd00'
                                    }}>
                                        <Text style={{marginLeft:10,fontSize:17,marginTop:10,color:'#fff'}}>每日一句</Text>
                                        <Icon name='notification' style={styles.icon} color="#fff" size={25} onPress={this.play1} />
                                        <Text style={{fontSize:18,marginTop:15,color:'#fff',marginLeft:10}}>{this.state.data.content}</Text>
                                        <Text style={{fontSize:18,marginTop:15,color:'#fff',marginLeft:10}}>{this.state.data.note}</Text>
                                    </View>
                                    {/* <View></View> */}
                                </ImageBackground>
                            </View>
                            <WhiteSpace style={{height:5,backgroundColor:"#eeeeee"}}></WhiteSpace>
                            <View style={styles.oral}>
                                <View style={styles.course1}>
                                    <View style={{padding:5}}>
                                        <Text style={{fontSize:16}}>精选口语课</Text>
                                    </View>
                                    <View  style={{padding:5}}>
                                        <Text onPress={()=>Actions.screenList()}>全部口语课 ></Text>
                                    </View>
                                </View>
                                <ScrollView style={styles.scroll}
                                    horizontal={true} 
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <View style={{
                                        width:width*1.6,
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
                                                source={require('../../pic/四级英语.jpg')}
                                                />
                                            <Text onPress={this.detail1} style={{marginTop:10,marginLeft:25}}>四级英语</Text>
                                        </View>
                                        <View style={styles.c1}>
                                            <Image 
                                                style={{
                                                    width:s*150,
                                                    height:200*s,
                                                }}
                                                source={require('../../pic/口语.jpg')}
                                                />
                                            <Text onPress={this.detail2} style={{marginTop:10,marginLeft:25}}>口语英语</Text>
                                        </View>
                                        <View style={styles.c1}>
                                            <Image 
                                                style={{
                                                    width:s*150,
                                                    height:200*s,
                                                }}
                                                source={require('../../pic/新概念英语.jpg')}
                                                />
                                            <Text onPress={this.detail3} style={{marginTop:10,marginLeft:25}}>新概念英语</Text>
                                        </View>
                                        <View style={styles.c1}>
                                            <Image 
                                                style={{
                                                    width:s*150,
                                                    height:200*s,
                                                }}
                                                source={require('../../assets/course3.jpg')}
                                                />
                                            <Text style={{marginTop:10}}>维多利亚时期的</Text>
                                        </View>
                                        <View style={{width:150*s,
                                                    height:200*s,
                                                    marginTop:10,
                                                    flexDirection:'row',
                                                    alignItems:'center',
                                                    justifyContent:'space-around',
                                                    backgroundColor:'gray'
                                                    }}>
                                            <Text>查看全部</Text>
                                        </View>
                                    </View>
                                </ScrollView>                    
                            </View>
                            <View style={styles.all}>
                                <TouchableOpacity>
                                    <View style={styles.allbtn}>
                                            <Text onPress={()=>Actions.screenList()} style={styles.btntext}>look at all</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            {/* 读写 */}
                            <WhiteSpace style={{marginTop:5,height:5,backgroundColor:"#eeeeee"}}></WhiteSpace>
                            <View style={{width:"100%",marginTop:10,flexDirection:'row',alignItems:'center',justifyContent:"center",}}>
                                <TouchableOpacity>
                                    <View style={styles.allbtn}>
                                            <Text style={styles.btntext}>读写专区</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            
                            <View style={styles.articleBack}>
                                <View style={styles.article}>
                                    <Image 
                                        style={{
                                            width:width*0.45,
                                            height:350*s,
                                            opacity:0.5
                                        }}
                                        source={require('../../pic/article.jpg')}
                                    />
                                    <TouchableOpacity style={styles.write}>
                                    {/* <View style={styles.write}> */}
                                        <Text onPress={()=>Actions.compositionTitle()} style={{
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
                                            source={require('../../pic/listen2.jpg')}
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
                    </View>
                    <View style={style}>
                        <ScrollView>
                        <Word/>
                        </ScrollView>
                    </View>
                </Tabs>
            </View>
        )
    }
}
const styles = StyleSheet.create({
  top:{
    width:width,
    height:50*s,
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:'white'
  },
  card:{
    marginTop:3,
    width:width,
    height:150,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'space-around'
  },
  course:{
      width:width,
      height:228,
      backgroundColor:'white',
      marginTop:5,
      flex:1
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
      backgroundColor:'white',
  },
  oral:{
    width:width,
      height:240,
      backgroundColor:'white',
      marginTop:5
  },
  dub:{
    width:width,
    height:450,
    backgroundColor:'white',
    marginTop:10
  },
  dub1:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:5
  },
  dub2:{
    flexDirection:'row',
    justifyContent:'space-around',
    flexWrap:'wrap'
  },
  scroll:{
    flexDirection:'row',
    // justifyContent:'space-around',
    // height:200,
    // backgroundColor:'blue'
    // marginTop:10
  },
  header:{
    width:width,
    height: 70*s,
    // borderBottomColor: 'red',
    // backgroundColor:'red',
    borderBottomWidth: 1/3,
    backgroundColor:'#fff',
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: 'center',

},
search:{
    width: 525*s,
    height: 50*s,
    borderRadius:25*s,
    borderWidth:1,
    borderColor:'gray',
    flexDirection: 'row',
    alignItems: 'center'
},
icon:{
    position:'absolute',
    right:15,
    top:10
},
all:{
    width:width*0.96,
    height:70*s,
    marginTop:-10,
    marginLeft:width*0.02,
    backgroundColor:'#fff',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:"center",
    // borderWidth:1*s,
    // borderTopWidth:0,
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
    // backgroundColor:'red',
    marginTop:15*s,
    marginBottom:15*s,
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
    top:width*0.16,
    left:width*0.14,
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
    top:width*0.16,
    left:width*0.14,
    width:width*0.18,
    height:width*0.18,
    // backgroundColor:'red',
    backgroundColor:'#fff',
    opacity:0.8,
    borderRadius:width*0.09,
    borderWidth:1*s,
}
});
